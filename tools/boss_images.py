# Découpe les 8 crayons boss de l'image de Mika et fabrique assets/images/boss-<voiture>.webp (fond transparent, même échelle, pieds alignés)
import sys, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
src = sys.argv[1]; out = sys.argv[2]
im = Image.open(src).convert('RGB')
a = np.array(im).astype(np.int32)
H, W = a.shape[:2]
BG = np.array([241, 234, 215])
# cases (x0, x1, y0, y1) ; clés = voiture du boss
cells = {
 'bille': (0, 250, 0, 410), 'gomme': (250, 500, 0, 410), 'compas': (500, 740, 0, 410), 'plume': (740, W, 0, 410),
 'colle': (0, 245, 410, H), 'correcteur': (245, 490, 410, H), 'portemine': (490, 700, 410, H), 'agrafeuse': (700, W, 410, H),
}
def cut(key, box):
    x0, x1, y0, y1 = box
    c = a[y0:y1, x0:x1]
    d = np.sqrt(((c - BG) ** 2).sum(axis=2))
    thr = 22 if key != 'agrafeuse' else 20
    bgm = d < thr
    # le fond = ce qui touche le bord de la case
    lab, n = ndi.label(bgm)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    flood = np.isin(lab, list(edge))
    if key == 'agrafeuse':
        # papier découpé plus clair + fumée : on enlève aussi tout ce qui est clair et peu saturé autour
        paper = (c.min(axis=2) > 205) & (np.abs(c[:, :, 0] - c[:, :, 2]) < 45)
        lab2, n2 = ndi.label(paper | flood)
        e2 = set(np.unique(np.concatenate([lab2[0], lab2[-1], lab2[:, 0], lab2[:, -1]]))) - {0}
        flood = np.isin(lab2, list(e2))
    # zones de papier enfermées (entre le bras et le corps...) : on les retire aussi si elles sont bien plates et de la couleur du fond
    flat = d < 11
    if key == 'agrafeuse':
        flat = flat | ((c.min(axis=2) > 215) & (np.abs(c[:, :, 0] - c[:, :, 2]) < 40))
    labf, nf = ndi.label(flat & ~flood)
    if nf:
        areas = ndi.sum(np.ones_like(labf), labf, range(1, nf + 1))
        big = [i + 1 for i, ar in enumerate(areas) if ar > 120]
        flood = flood | np.isin(labf, big)
    flood = ndi.binary_opening(flood, iterations=1) | flood
    alpha = (~flood).astype(np.float32)
    # on garde seulement le plus gros objet (+ ses parties proches : accessoire, plume...)
    lab3, n3 = ndi.label(ndi.binary_dilation(alpha > 0.5, iterations=6))
    sizes = ndi.sum(alpha > 0.5, lab3, range(1, n3 + 1))
    keep = lab3 == (1 + int(np.argmax(sizes)))
    alpha = alpha * keep
    # bord doux
    al = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.9))
    al = np.array(al).astype(np.float32) / 255.0
    al = np.clip((al - 0.15) / 0.7, 0, 1)
    # défrange : les pixels de bord prennent la couleur du voisin intérieur
    rgb = c.astype(np.float32)
    inner = ndi.binary_erosion(alpha > 0.5, iterations=2)
    idx = ndi.distance_transform_edt(~inner, return_distances=False, return_indices=True)
    rgb = rgb[idx[0], idx[1]]
    rgb = np.where(inner[:, :, None], c, rgb)
    ys, xs = np.where(al > 0.3)
    bb = (xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)
    rgba = np.dstack([np.clip(rgb, 0, 255), al * 255]).astype(np.uint8)
    return Image.fromarray(rgba, 'RGBA').crop(bb)
chars = {k: cut(k, b) for k, b in cells.items()}
for k, c in chars.items(): print(k, c.size)
CW, CH = 340, 360
# chaque crayon est agrandi au maximum pour remplir la case (même boîte pour les 8), centré
for k, c in chars.items():
    sc = min(0.97 * CW / c.size[0], 0.97 * CH / c.size[1])
    w, h = round(c.size[0] * sc), round(c.size[1] * sc)
    print(k, 'échelle', round(sc, 2), (w, h))
    r = c.resize((w, h), Image.LANCZOS)
    canvas = Image.new('RGBA', (CW, CH), (0, 0, 0, 0))
    canvas.paste(r, ((CW - w) // 2, (CH - h) // 2), r)
    canvas.save(out + '/boss-' + k + '.webp', 'WEBP', quality=88, method=6)
