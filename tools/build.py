#!/usr/bin/env python3
"""Assemble le jeu en UNE seule page HTML (index.html) à partir de src/ et assets/.

  python3 tools/build.py            -> écrit index.html à la racine
  python3 tools/build.py sortie.html

src/template.html contient la page ; {{CSS}} et {{JS}} sont remplacés par src/style.css et src/game.js (qui peut inclure d'autres fichiers avec //@@INCLUDE online.js@@) ; {{PEERJS}} par vendor/peerjs.min.js ;
chaque @@A:nom@@ est remplacé par le fichier assets/images/nom (ou assets/sounds/nom) encodé en base64.
"""
import base64, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()

def asset(m):
    name = m.group(1)
    base = 'assets/' + ('' if name.startswith('sounds/') else 'images/')
    with open(os.path.join(ROOT, base + name), 'rb') as f:
        return base64.b64encode(f.read()).decode()

def build():
    page = read('src/template.html')
    js = read('src/game.js')
    # //@@INCLUDE fichier.js@@ : insère un autre fichier de src/ à cet endroit (dans la même fonction du jeu)
    js = re.sub(r'//@@INCLUDE ([A-Za-z0-9_./-]+)@@', lambda m: read('src/' + m.group(1)), js)
    page = page.replace('{{CSS}}', read('src/style.css')).replace('{{PEERJS}}', read('vendor/peerjs.min.js')).replace('{{JS}}', js)
    # le CSS et le JS contiennent eux aussi des @@A:...@@ : on remplace après l'assemblage
    return re.sub(r'@@A:([A-Za-z0-9_./-]+)@@', asset, page)

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'index.html')
    html = build()
    with open(out, 'w', encoding='utf-8') as f:
        f.write(html)
    print('écrit', out, len(html), 'octets')
