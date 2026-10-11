# Pencil Race — journal des versions

Chaque version publiée est consignée ici, avec une archive de la version précédente dans le projet.

## v90 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v89_avant-tac.html` (v89 ; archive non rangée dans le projet, plein)

**Ajouté**
- Son « tac » à chaque rebond de la Bille (seule voiture qui rebondit) : petit choc dur et sec, fabriqué dans le jeu (bruit très bref filtré + petit toc sourd), pas un fichier. Test : 36 rebonds, 36 « tac » ; aucun son pour la Classique contre les murs.

**Connu / à surveiller**
- Son de synthèse, pas écouté par Claude : à remplacer par un vrai fichier si Mika en a un.

## v89 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v88_avant-clic.html` (v88 ; archive non rangée dans le projet, plein)

**Corrigé**
- Petit clic dans le son du tir : le fichier avait un petit bruit isolé 0,26 s après la fin du frottement (après un silence). Le fichier est coupé juste après le frottement (0,235 s) avec une fin en fondu ; le frottement lui-même n'est pas modifié.

## v88 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v87_avant-volume-tir.html` (v87 ; archive non rangée dans le projet, plein)

**Modifié**
- Son du tir (crayon) moins fort : volume divisé par 2,4 environ (2,2 → 0,9).

**Connu / à surveiller**
- Il n'y a aucun son de rebond dans le jeu pour l'instant (supprimés avec les sons synthétiques) : le rebond de la Bille attend un fichier audio de Mika.

## v87 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v86_avant-stries.html` (v86 ; archive non rangée dans le projet, plein)

**Modifié**
- Trace de pinceau du Correcteur : les lignes pointillées (poils) à l'intérieur sont retirées ; il reste le blanc crème avec les bords irréguliers.
- La traînée de la Colle a maintenant le même modèle (bords irréguliers, épaisseur qui varie, départ arrondi, fin effilée), en jaune orangé avec un liseré brun. Sa largeur, sa longueur et son effet ne changent pas.

## v86 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v85_avant-pinceau.html` (v86 ; archive non rangée dans le projet, plein)

**Modifié**
- Le visuel du pouvoir du Correcteur (la traînée blanche laissée sur son dernier tir) est redessiné en trace de pinceau : bords irréguliers, épaisseur qui varie, départ arrondi, fin effilée, fines stries de poils à l'intérieur, blanc crème avec un liseré brun clair. Le tracé est calculé une fois par traînée (pas à chaque image). Le pouvoir ne change pas (largeur, longueur et effet identiques). La traînée de la Colle et les flaques ne changent pas.

## v85 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v84_avant-couleurs-solo.html` (v84 ; archive non rangée dans le projet, plein)

**Modifié**
- En solo, chaque voiture trace son trait dans sa couleur : Classique rouge (elle était noire), Bille turquoise, Gomme rose, Porte-mine violet, Compas gris, Colle orange, Plume noire (encre). Le Correcteur trace en blanc crème, avec un fin liseré brun clair pour qu'il se voie sur le papier blanc.
- Multi et contre un bot : couleurs inchangées.

## v84 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v83_avant-sortie-toleree.html` (v83 ; archive non rangée dans le projet, plein)

**Retiré**
- L'option « Pilotage : sortie de piste » (tolérée / pénalisée) : c'est toujours « tolérée » (la voiture repart du bord où elle est sortie, le coup est compté). Un ancien réglage « pénalisée » enregistré sur un téléphone est ignoré. Les records ne changent pas (ils étaient déjà en « tolérée »).
- Le message « Sorti de la piste ! » quand une voiture touche le bord de la piste. Les messages spéciaux restent : « Plouf ! », « Chute mortelle ! », « Toc ! ».
- Les rappels « sortie tolérée » dans les menus et sous le record ; la règle de la page Règles est raccourcie.

## v83 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v82_avant-plouf.html` (v82 ; archive non rangée dans le projet, plein)

**Ajouté**
- Son « Plouf » (fichier de Mika, « FREE Plouf Sound Effect », 1,2 s), joué quand une voiture tombe à l'eau : Maelström et fontaines du Jardin, pour toutes les voitures. Pas de plouf dans les gouffres du Canyon ni contre la roche.
- Le fichier d'origine n'avait du son que sur le canal droit (le gauche était vide) : il est converti en vrai stéréo (même son à gauche et à droite).

**Connu / à surveiller**
- Le son du crayon est toujours l'extrait d'aperçu Envato (à remplacer par le fichier téléchargé sous licence).

## v82 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v81_avant-son-crayon.html` (v81 ; archive non rangée dans le projet, plein)

**Ajouté**
- Premier son, un vrai fichier : le crayon sur le papier (Envato Elements), intégré dans la page (15 Ko), joué au départ de chaque tir. Joueur 1 = hauteur normale relevée, puis de plus en plus grave jusqu'au joueur 4 (vitesse de lecture 1,30 / 1,08 / 0,90 / 0,76). En solo, il a la hauteur du joueur 1.
- Option « Sons : oui / non » dans Options et dans le menu pause (mémorisée) ; le son se coupe quand l'appli passe en arrière-plan ; il démarre au premier toucher de l'écran.

**Connu / à surveiller**
- Le fichier envoyé est l'extrait d'aperçu d'Envato (0,44 s, pas la version téléchargée sous licence) : à remplacer par le fichier téléchargé avec la licence du projet avant toute diffusion.
- Un seul son pour l'instant ; les autres sont à ajouter un par un, à partir des fichiers de Mika.

## v81 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v80_avant-colle-premiere.html` (v80 ; archive non rangée dans le projet, plein)

**Modifié**
- Idée de Mika pour la Colle et le Correcteur : en solo contre un bot, la Colle et le Correcteur jouent toujours en premier. Si c'est le bot qui a l'une de ces voitures (et pas le joueur), il joue avant le joueur ; sinon l'ordre ne change pas (le joueur est déjà en premier). Le texte d'aide précise « elle joue en premier » et la dernière chance du joueur est bien conservée si le bot arrive le premier.
- Pas de changement en multi (chacun son tour) ni sur les coups parfaits. La campagne n'existe pas encore : la règle sera à reprendre quand on la fera.

**Connu / à surveiller**
- Effet sur l'équilibrage pas encore mesuré (pas de tournoi refait). Parties de bots terminées sans blocage avec le bot Colle ou Correcteur en premier.

## v80 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v79_avant-fontaines.html` (v79 ; archive non rangée dans le projet, plein)

**Modifié**
- Fontaines du Jardin : toute voiture qui entre dans une fontaine tombe à l'eau (« Plouf ! »), plus seulement la Gomme ; la Bille ne rebondit plus dessus. Les bords du Jardin (haies, murs) restent « Sorti de la piste ! ». Test : de 91 à 100 % des tirs lancés vers une fontaine finissent en « Plouf ! » selon la voiture (les autres s'arrêtent avant).
- Coups parfaits du Jardin inchangés (mesures dans le bruit).

## v79 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v78_sans-sons.html` (v78 : sans aucun son ; archive non rangée dans le projet, plein)

**Modifié**
- Le Maelström : plus de « Sorti de la piste ! ». Toute voiture qui quitte la piste tombe à l'eau (« Plouf ! »), comme la Gomme jusqu'ici. La Bille ne rebondit plus sur le bord de l'eau : elle tombe aussi. Test : 40 sorties sur 40 avec « Plouf ! » pour la Classique, la Bille, la Gomme et la Plume (Compas 27 sur 27).
- Coups parfaits de la Bille sur le Maelström légèrement relevés (16 au lieu de 15 ; bot Bille 25 au lieu de 23) puisqu'elle ne rebondit plus sur l'eau. Les autres voitures sont inchangées (écart de mesure dans le bruit).

## v78 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v77_avec-sons.html` (v77 : avec les effets sonores ; archive non rangée dans le projet, plein)

**Retiré**
- Tous les sons supprimés (retour à la version sans aucun code audio, c'est-à-dire la v72 : Zigzag d'après le dessin, décor réparti, bâton de colle). L'option « Sons » et le bouton du menu pause disparaissent aussi. À refaire de zéro plus tard.

## v77 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v76_avant-plouf.html` (v76 ; archive non rangée dans le projet, plein)

**Corrigé**
- Le « plouf » et le son de « Chute mortelle ! » ne se jouaient pas (le son attendait un moment de l'animation qui n'arrivait jamais). Ils se jouent maintenant à la fin du tir.

**Modifié**
- Le « plouf » se joue pour toutes les voitures qui sortent dans l'eau (Le Maelström), pas seulement pour la Gomme. Test : 16 sorties sur 16 avec la Classique et la Gomme ; « Chute mortelle ! » 40 sur 40 dans les gouffres du Canyon avec la Classique, la Gomme et la Plume.

## v76 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v75_avant-cloche.html` (v75 : crayon « fffit », bips de départ ; archive non rangée dans le projet, plein)

**Retiré**
- Plus aucun son de tir (crayon, Colle, Correcteur).
- Plus de son quand une voiture touche un mur (rebond, roche).

**Modifié**
- Départ : 3 coups de cloche (« ding ding ding »), comme au début d'un combat de boxe, à la place des 3 bips.

## v75 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v74_avant-fffit.html` (v74 : crayon en frottement granuleux ; archive non rangée dans le projet, plein)

**Modifié**
- Son du tir du crayon, d'après la description de Mika (« Fffffit ») : un « ffffff » doux et continu (souffle filtré, sans grain) pendant le trajet, qui finit par un « it » bref et sec. Toujours plus aigu pour le joueur 1 et de plus en plus grave jusqu'au joueur 4.

## v74 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v73_avant-sons-realistes.html` (v73 : sons type « 8 bits » ; archive non rangée dans le projet, plein)

**Modifié**
- Tous les sons refaits pour être réalistes (plus d'oscillateurs carrés ou en dents de scie) : bruits granuleux et filtrés, résonances, vraies bulles, petite réverbération de pièce. Crayon : frottement granuleux de mine sur le papier, plus aigu pour le joueur 1 et de plus en plus grave jusqu'au joueur 4. Colle : « squish » collant sur une seule tonalité. Correcteur : bruit visqueux mouillé avec bulles. Flaque : goutte. Plouf : éclaboussure et bulles. Gouffre : souffle qui descend puis choc sourd. Rebond : choc de bois. Arrêt : petit clic. Sortie de piste : dérapage puis retombée. Tunnel : souffle qui résonne.
- Bips de départ plus lents : 3 bips espacés d'une seconde, puis un bip plus long et plus haut.
- Fin de partie : plus de fanfare, 2 notes de petite trompette (qui montent si on gagne, qui descendent si le bot gagne). Clochette quand un joueur passe l'arrivée avant la fin.

**Connu / à surveiller**
- Toujours pas écoutés à l'oreille par Claude : niveaux mesurés (aucun muet, aucun saturé). À régler avec Mika.

## v73 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v72_avant-sons.html` (v72 : stick de colle, décor réparti ; archive non rangée dans le projet, plein)

**Ajouté**
- Effets sonores, tous synthétisés dans le jeu (WebAudio, aucun fichier) : trait de crayon sur le papier pour chaque tir (note aiguë pour le joueur 1, puis de plus en plus grave jusqu'au joueur 4, volume qui suit la vitesse de la voiture) ; bruit de colle (une seule tonalité) pour le tir de la Colle ; bruit de mucus pour le tir du Correcteur ; « bloup » liquide quand une flaque est posée ; « plouf » dans l'eau ; sifflement puis « pof » pour « Chute mortelle ! » ; « toc » (rebond, roche) ; « tic » à l'arrêt ; « boing » en sortie de piste ; whoosh de tunnel (montant à l'entrée, descendant à la sortie) ; petits sons pour la traversée de mur de la Gomme, la tache d'encre et une voiture touchée par la colle ou le correcteur ; bips au départ, petit « bip » au GO, « ding » quand un joueur franchit l'arrivée, petite fanfare à la victoire (notes tristes si le bot gagne).
- Option « Sons : oui / non » dans Options et dans le menu pause (réglage mémorisé). Le son se coupe quand l'appli passe en arrière-plan.

**Connu / à surveiller**
- Les sons ont été vérifiés sans erreur et au niveau sonore (aucun à zéro, aucun saturé), mais pas écoutés à l'oreille : à régler avec Mika (volumes, hauteurs).
- Sur téléphone le son démarre au premier toucher de l'écran (règle des navigateurs).

## v72 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v71_avant-colle-stic.html` (v71 : bâton de colle jaune à capuchon rouge ; archive non rangée dans le projet, plein)

**Modifié**
- Décor « Colle » redessiné d'après la photo de Mika : bâton de colle haut et fin, capuchon blanc, corps jaune avec étiquette (texte en traits, pastille verte, sans marque), pied blanc à facettes.
- Décor du Zigzag moins aligné : positions décalées et objets légèrement inclinés, toujours 1 de chaque dans le haut à gauche et dans le bas à droite.

## v71 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v70_avant-baton-colle.html` (v70 : décor Colle en petit tube)

**Modifié**
- Décor « Colle » redessiné en bâton de colle (type bâton de colle de bureau, sans marque) : bâton blanc-bleuté qui dépasse, bague rouge, corps jaune avec une étiquette blanche, capuchon rouge posé à côté.

## v70 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v69_avant-decor-zigzag.html` (v69 : Zigzag refait d'après le dessin)

**Ajouté**
- Décor « Colle » (tube jaune à bande rouge avec une flaque) : il manquait parmi les objets du décor.

**Modifié**
- Décor du Zigzag : 2 exemplaires de chaque objet (crayon, bille, plume, gomme, porte-mine, compas, correcteur, colle), 1 de chaque dans l'espace en haut à gauche et 1 de chaque dans l'espace en bas à droite.

## v69 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v68_avant-zigzag-dessin.html` (v68 : Zigzag allongé, mais pas comme dessiné)

**Modifié**
- Zigzag refait exactement d'après le dessin de Mika : deux zigzags l'un derrière l'autre, le premier à gauche (départ en bas à gauche, 4 diagonales), un petit raccord qui descend vers la droite, puis le second zigzag (4 diagonales) qui monte vers l'arrivée en haut à droite. Monde 630 × 1044.
- Décor replacé dans les zones vides (en haut à gauche, en bas à droite).
- Coups parfaits recalculés (non affichés) : Classique 13, Bille 10, Plume 13, Gomme 6, Porte-mine 25, Compas 10, Correcteur 13, Colle 13 ; bot Bille 14. Valeurs ajustées au prorata des anciennes.

**Connu / à surveiller**
- Huit parties de bots terminées sans blocage ; pas de tournoi sur ce nouveau Zigzag.
- La v68 était un zigzag simplement rallongé : je n'avais pas bien lu le dessin.

## v68 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v67_avant-zigzag-long.html` (v67 : Compas évite les gouffres)

**Modifié**
- Zigzag deux fois plus long (simple rallongement : 9 diagonales dans une seule colonne, monde 360 × 1040). Remplacé dès la v69.
- Nouvelle clé de record (`pr-best-z2-`) : les anciens records du Zigzag ne s'appliquent plus.

## v67 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v66_avant-compas-gouffres.html` (v66 : gouffres en relief)

**Modifié**
- Le Compas évite les gouffres du Canyon : il se guide sur le plus court chemin réel (même champ de guidage que sur le Jardin, qui préfère le milieu des couloirs) et, si son cap mène quand même dans un trou, il prend le cap libre le plus proche (virage plus serré autorisé dans ce cas). Test : sur des tirs le long de la piste près des gouffres, les chutes passent de 486 à 138 sur 936 ; ce qui reste, ce sont des départs à moins de 35 unités d'un trou (trop près pour tourner).
- Coup parfait du Compas sur le Canyon : 20 (22 avant).

## v66 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v65_avant-gouffres-3d.html` (v65 : gouffres en aplat noir)

**Modifié**
- Gouffres du Canyon redessinés en relief : paroi de pierre appareillée côté nord qui plonge dans le noir, lumière d'en haut à gauche, fond très sombre avec une faible lueur violette lointaine, ombre intérieure et lèvre claire sur le bord sud. Dessinés une fois dans un canevas à part.
- Message : « Chute mortelle ! » (au lieu de « Sorti de la piste ! » ou « Chute ! ») pour une voiture qui tombe dans un gouffre, Gomme comprise.

## v65 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v64_avant-gouffres.html` (v64 : design A des tunnels)

**Ajouté**
- Le Canyon a maintenant 11 gouffres : les formes noires dessinées par Mika sur la piste (trous, chute mortelle). Ils ne font plus partie de la piste : une voiture qui les touche sort de piste comme au bord, et la Gomme, qui traverse les murs, ne peut pas les traverser ; elle s'arrête avec « Chute ! ». Dessinés en noir avec un liseré clair du côté éclairé.

**Modifié**
- Coups parfaits du Canyon recalculés (les gouffres allongent les trajets) : Classique, Plume, Correcteur, Colle 27 (avant 16) ; Bille 16 (14) ; Gomme 9 (7) ; Porte-mine 48 (44) ; Compas 22 (15) ; bot Bille 27 (24). Valeurs ajustées au prorata des anciennes (la nouvelle méthode de calcul donne des valeurs plus hautes que l'ancienne, p. ex. 20 au lieu de 16 pour la Classique sans gouffres).

**Connu / à surveiller**
- Pas de tournoi refait sur le Canyon avec les gouffres ; huit parties de bots terminées sans blocage.

## v64 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v63_avant-design.html` (v63 : emplacements dessinés par Mika, design provisoire)

**Modifié**
- Design des tunnels de la Grotte (proposition A de Mika, « pierres taillées ») : bloc de pierres appareillées brunes entre les deux bords de piste ; grande arche noire à la sortie avec un halo jaune qui déborde dans le couloir et une lueur dans la bouche ; petite arche à l'entrée avec une lanterne suspendue.
- Le bloc de roche est un peu plus large (13 côté entrée, 20 côté sortie) ; il reste infranchissable pour la Gomme.
- Le corps du tunnel est dessiné une seule fois dans un canevas à part (pas de recalcul à chaque image).

## v63 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v62_avant-emplacements.html` (v62 : tunnels en roche hachurée, 54 emplacements calculés)

**Modifié**
- Emplacements des tunnels de la Grotte : ceux dessinés par Mika (flèches rouges), 25 retenus sur 26 (la flèche à droite du grand virage ne tombe pas sur un mur propre : laissée de côté). Les tunnels suivent l'angle des flèches.
- 8 à 10 tunnels par partie (au lieu de 12), tirés au hasard ; deux tunnels ne sont jamais proches (bouches à au moins 110 unités l'une de l'autre).

**Connu / à surveiller**
- Certaines flèches relient des endroits très éloignés le long de la piste (jusqu'à environ 3 500 unités, plus d'un tiers du circuit, près du départ) : un tunnel peut faire gagner ou perdre énormément. À valider avec Mika.
- Pas de nouveau tournoi sur ces versions.

## v62 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v61_avant-roche.html` (v61 : bouches au bord de la piste, trait pointillé entre les deux)

**Modifié**
- Tunnels de la Grotte refaits d'après le dessin de Mika : un bloc de roche hachurée traverse le mur entre deux bords de piste, avec une arche noire à chaque bout (petite = entrée, grande = sortie). Le bloc s'élargit un peu de la petite à la grande arche.
- La roche du tunnel est infranchissable pour la Gomme : elle s'arrête avec « Toc ! » (test : 60 tirs sur 60 bloqués).
- Les tunnels relient maintenant deux couloirs qui se font face à travers un mur (54 emplacements possibles, 12 tirés au hasard par partie, au moins 70 unités entre deux bouches). Sauts de 250 à 1 600 unités le long de la piste.
- Mécanique inchangée : deux sens, petite arche = on gagne du terrain, grande = on en perd, pas de record sur la Grotte.

**Connu / à surveiller**
- Les emplacements se concentrent sur les couloirs qui se longent (droite de la carte, grande diagonale, bas) : d'une partie à l'autre, certains tunnels reviendront souvent.
- Pas de nouveau tournoi sur cette version.
- Idée de Mika pour renforcer la Colle et le Correcteur : toujours à lui redemander.

## v61 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v60_tunnels-colores.html` (v60 : première version des tunnels, avec numéros et couleurs, bouches au milieu de la piste)

**Modifié**
- Tunnels de la Grotte : les bouches sont au bord de la piste (moitié dans la roche), du côté qui regarde l'autre bouche ; plus de couleurs ni de numéros ; un trait pointillé dans la roche relie l'entrée à la sortie (il passe sous la piste, donc visible seulement dans la roche).

## v60 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v59_avant-tunnels.html`

**Ajouté**
- Tunnels de la Grotte : 12 paires de bouches tirées au hasard à chaque partie parmi 50 emplacements prévus d'avance (sauts de 250 à 1 100 unités le long de la piste). Petite bouche (rayon 8) = entrée : on ressort devant la grande, donc on gagne du terrain. Grande bouche (rayon 15) = sortie : on est renvoyé après la petite, donc on perd du terrain. Les deux se prennent dans les deux sens. On ressort un peu à côté de la bouche et on ne retombe pas dedans tout de suite. Pas de record sur la Grotte (le circuit change à chaque partie). Les bots visent les petites bouches à portée ; ils évitent les grandes tout seuls.
- Message au départ : tunnels tirés au hasard.

**Modifié**
- Tracé de la Grotte redressé : 36 segments droits, coins arrondis (comme Zigzag ou L'Escalier), longueur environ 9 400 unités ; décor replacé.
- Coups parfaits de la Grotte (sans tunnels) : Classique, Plume, Colle, Correcteur 56 ; Bille et Gomme 41 ; Compas 37 ; Porte-mine 116. Avec les tunnels, l'objectif des bots est ramené à 95 % de ces valeurs.

**Connu / à surveiller**
- Les bots prennent en moyenne 2 à 4 entrées et 0 à 1 sortie par partie ; leur nombre de coups ne baisse presque pas (ils règlent leur allure sur l'objectif).
- Tournoi de la Grotte avec tunnels (6 parties par duel et par ordre) : Porte-mine 89, Compas 89, Gomme 64, Bille 62, Plume 44, Correcteur 20, Classique 14, Colle 18 (% de victoires). Aucun pouvoir n'a été modifié.
- Idée de Mika pour renforcer la Colle et le Correcteur : à lui redemander après les tunnels.

## v59 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v58_avant-grotte.html`

**Ajouté**
- La Grotte (8e circuit, 8 sur 8) : tracé repris du dessin de Mika (un seul couloir, départ en bas à gauche, arrivée en haut à droite), largeur de piste 44 (comme L'Escalier), fond lilas pâle, décor de grotte (stalagmites, stalactite, cristaux, champignons, chauves-souris, torches, chariot de mine, pioche).
- Coups parfaits sur la Grotte : Classique 66, Bille 43, Plume 66, Gomme 43, Porte-mine 118, Compas 54, Correcteur 66, Colle 66.

**Connu / à surveiller**
- La Grotte est très longue (environ 9 500 unités de piste, soit 2 fois le Serpentin : environ 66 coups pour la Classique).
- Banc de test refait en navigateur sans écran (l'ancien avait été perdu) ; la méthode de calcul des coups parfaits donne les mêmes valeurs que les anciennes pour la plupart des voitures, mais un peu plus hautes pour Gomme, Bille et Porte-mine sur Zigzag et L'Escalier.

**Tournoi de bots (niveau Hard, 8 voitures, 10 parties par duel et par ordre ; 4 à 6 sur le Canyon ; Jardin exclu ; Serpentin non terminé, trop lent)**
Taux de victoire moyen par voiture (%) : Porte-mine 85, Plume 68, Gomme 65, Compas 61, Colle 40, Correcteur 30, Bille 28, Classique 22.
- Meilleure voiture par circuit : Zigzag, Escalier, Usine et Grotte = Porte-mine ; Canyon = Gomme ; Maelström = Plume.
- Grotte : Porte-mine 89, Bille 75, Gomme 75, Plume 70, Compas 43, Colle 26, Correcteur 14, Classique 6.
- La Colle et le Correcteur restent faibles : sur la Grotte, un coup touché par une traînée ne coûte qu'un demi-coup, soit peu sur 66 coups. Changer la longueur ou la largeur des traînées (330 / 3 tirs / plus larges) ne change presque rien (40 % contre 39 %). Aucun pouvoir n'a été modifié.
- Le Porte-mine domine presque partout (85 % en moyenne) ; la Bille est battue sauf sur la Grotte et L'Escalier (bot Bille imparfait, accepté).

## v58 — 8 octobre 2026
Archive de la version d'avant : `pencil-race_v57_avant-colle.html` (version 1791417248-aff0)

**Ajouté**
- La Colle (8e voiture, jaune orangé UHU) : traînée fine sur ses 2 derniers tirs (230 unités max) ; la voiture qui la traverse a son tir suivant réduit de moitié (goutte jaune au-dessus de sa voiture).
- Flaque de Colle : quand elle est derrière, un tour sur 2, elle pose une flaque moyenne (environ 60 % de celle de la Plume) devant la voiture de tête, avec le même effet que sa traînée. Elle n'arrête pas la voiture.

**Modifié**
- Le Correcteur : ancien pouvoir supprimé (pouvoir effacé un tour sur 2 / recul de moitié). Nouveau pouvoir : traînée blanche sur son dernier tir (90 unités max), 2 fois plus large que celle de la Colle ; la voiture qui la traverse a son pouvoir annulé au tour suivant. Même flaque que la Colle quand il est derrière, un tour sur 2, avec l'effet du blanc.
- Une traînée ou une flaque disparaît dès qu'elle est traversée.

**Connu / à surveiller**
- Les bots n'évitent pas encore les traînées.
- Équilibrage : la voiture qui suit la même ligne que la Colle traverse sa traînée très souvent (environ un tour sur 2 face à la Plume en test) ; à ajuster si trop fort (traînée plus courte ou 1 seul tir).
- Circuit de la Colle pas encore créé (7 circuits sur 8).

## Avant la v58
Historique antérieur : voir l'historique des versions de l'artifact Pencil Race et la fiche du projet (mémoire). Pas de journal détaillé avant cette date.


## Grand tournoi v90 (8 octobre) — bots Hard, 8 voitures, 8 circuits
Parties : 10 par duel et par ordre (Serpentin 4, Grotte 6). Taux = victoires / parties (les égalités comptent comme non-victoire). Aucune modification du jeu.

| Voiture | Zigzag | Serpentin | Canyon | Escalier | Maelström | Usine | Jardin | Grotte | Moy. |
|---|---|---|---|---|---|---|---|---|---|
| Classique | 13 % | 20 % | 21 % | 1 % | 20 % | 19 % | 23 % | 8 % | 16 % |
| Bille | 0 % | 0 % | 39 % | 56 % | 0 % | 28 % | 38 % | 61 % | 28 % |
| Plume | 59 % | 68 % | 41 % | 15 % | 69 % | 77 % | 49 % | 49 % | 53 % |
| Gomme | 99 % | 100 % | 84 % | 71 % | 25 % | 26 % | 26 % | 63 % | 62 % |
| Porte-mine | 66 % | 62 % | 93 % | 88 % | 75 % | 90 % | 60 % | 80 % | 77 % |
| Compas | 54 % | 48 % | 72 % | 85 % | 61 % | 47 % | 69 % | 86 % | 65 % |
| Correcteur | 19 % | 25 % | 18 % | 4 % | 32 % | 27 % | 24 % | 18 % | 21 % |
| Colle | 32 % | 46 % | 13 % | 4 % | 69 % | 30 % | 41 % | 23 % | 32 % |
Zigzag Gomme 99 > Porte-mine 66 > Plume 59 > Compas 54 > Colle 32 > Correcteur 19 > Classique 13 > Bille 0
Serpentin Gomme 100 > Plume 68 > Porte-mine 62 > Compas 48 > Colle 46 > Correcteur 25 > Classique 20 > Bille 0
Canyon Porte-mine 93 > Gomme 84 > Compas 72 > Plume 41 > Bille 39 > Classique 21 > Correcteur 18 > Colle 13
Escalier Porte-mine 88 > Compas 85 > Gomme 71 > Bille 56 > Plume 15 > Correcteur 4 > Colle 4 > Classique 1
Maelström Porte-mine 75 > Plume 69 > Colle 69 > Compas 61 > Correcteur 32 > Gomme 25 > Classique 20 > Bille 0
Usine Porte-mine 90 > Plume 77 > Compas 47 > Colle 30 > Bille 28 > Correcteur 27 > Gomme 26 > Classique 19
Jardin Compas 69 > Porte-mine 60 > Plume 49 > Colle 41 > Bille 38 > Gomme 26 > Correcteur 24 > Classique 23
Grotte Compas 86 > Porte-mine 80 > Gomme 63 > Bille 61 > Plume 49 > Colle 23 > Correcteur 18 > Classique 8

## v91 — Bots et tunnels de la Grotte
- Facile : le bot ne vise jamais un tunnel (tout tir qui y entre est écarté).
- Normal : il prend toujours le tunnel le plus proche devant lui (et seulement celui-là).
- Hard : il calcule le chemin le plus court en enchaînant les tunnels et vise les petites bouches utiles.
- L'objectif de coups du bot tient compte du raccourci réel de la partie (remplace l'ancien facteur fixe 0,95).
- Mesure (6 parties × 3 voitures) : facile ≈ 60 coups (rares entrées accidentelles), normal ≈ 12-30, hard ≈ 11-27.
- Archive : pencil-race_v90_avant-bots-tunnels.html

## v92 — Nouvelles règles de difficulté des bots
- Coups de plus que le parfait pour finir un circuit : facile +75 %, normal +45 %, hard +20 % (avant : +50 %, +25 %, et +1 à +5 coups).
- Au minimum 1 coup de plus que le parfait.
- Archive : pencil-race_v91_avant-niveaux.html

## v94 — Bot de la Gomme : traversées et niveaux
- Constat : la Gomme bot refusait les gros raccourcis (traversées) dès qu'ils dépassaient son allure prévue, et certains « coups parfaits » de la Gomme (Zigzag 6, Serpentin 9, Canyon 9) étaient hors de portée d'un bot qui tire avec le hasard d'une vraie pichenette.
- Changement 1 : la Gomme bot accepte désormais d'avancer plus vite que prévu grâce à une traversée (elle ralentit ensuite pour finir pile dans son quota de coups, comme les autres voitures).
- Changement 2 : coups parfaits retenus pour le bot Gomme : Zigzag 7, Serpentin 11, Canyon 17 (les autres circuits inchangés).
- Essais abandonnés (moins bons que l'existant) : grille d'angles plus fine, affinage autour des meilleurs tirs, anticipation du tir suivant, carte du « nombre de coups minimal » par case (le calcul sans hasard promet 7 coups au Canyon, mais avec le hasard des tirs c'est ~20).
- Mesures (Gomme bot, parties seule, cible = niveau × coups parfaits) : Hard dans le quota (±1) : Zigzag 8/8, Canyon 5/8 (cible 20), Escalier 7/8, Jardin 6/8, Maelström 8/8, Serpentin 6/6, Usine 7/10 ; Normal et Facile : dans le quota presque partout.
- Archive : pencil-race_v92_avant-gomme-bot.html

## v95 — Menu Règles en 3 onglets
- Règles : 3 sous-menus, Pilotage (le texte des règles d'avant), Voitures, Circuits.
- Voitures : 8 cartes, avec une illustration de la voiture en 3/4 face (dessinée dans le jeu, une par voiture avec son accessoire : bille sur le toit, plume dressée, gomme sur le toit, mine à l'avant, compas, correcteur et sa traînée, tube de colle et sa flaque). Un toucher retourne la carte : au dos, le nom et une courte description du pouvoir.
- Circuits : 8 cartes avec le tracé ; au dos, le thème du décor et les règles du circuit (gouffres du Canyon, eau du Maelström, portes de l'Usine, tunnels de la Grotte, fontaines du Jardin).
- Les cartes se referment quand on change d'onglet. Rien n'est dit sur les bots dans ces textes.
- Archive : pencil-race_v94_avant-menu-regles.html

## v96 — Menu Règles : vrai menu de sélection
- Les 3 boutons d'onglets en haut de l'écran Règles (v95) sont supprimés.
- « Règles » ouvre maintenant un menu de sélection avec 3 gros boutons, comme le menu principal : Pilotage, Voitures, Circuits. Chacun ouvre son propre écran (avec Retour vers le menu Règles).
- Pilotage = texte des règles d'avant ; Voitures et Circuits = les cartes qui se retournent (inchangées). Les cartes sont refermées à chaque ouverture de l'écran.
- Archive : pencil-race_v95_avant-sous-menus.html

## v97 — Cartes qui se retournent (Voitures et Circuits)
- Le retournement des cartes est refait sans 3D imbriquée (qui ne marchait pas sur tous les téléphones) : la carte pivote jusqu'à la tranche, change de face, puis revient à plat (environ 0,4 s).
- Toucher la carte la retourne ; toucher à nouveau la remet côté illustration. Petite ombre sous les cartes.
- Archive : pencil-race_v96_avant-retournement.html

## v98 — Correction : style des cartes perdu à la publication
- Bug (v95 à v97) : le style des cartes Voitures/Circuits avait été placé dans un bloc de style que la publication supprime. Résultat chez Mika (téléphone et PC) : pas de cartes, noms en double, textes toujours visibles, rien ne se retourne.
- Corrigé : le style est maintenant dans le bloc de style principal du jeu. Vérifié sur une copie sans le bloc supprimé, en mode sombre, au toucher.
- Archive : pencil-race_v97_avant-style-cartes.html

## v99 — Texte de la Plume (Règles › Voitures)
- Nouveau texte : « Après chaque tir, elle pose une flaque d'encre : la voiture qui roule dedans s'arrête net. Si elle est devant, la flaque reste derrière elle ; si elle est derrière, elle la pose devant la voiture de tête. »
- Archive : pencil-race_v98_avant-texte-plume.html

## v100 — Nouvelle illustration de la Classique (Règles › Voitures)
- D'après l'image de référence de Mika (petite voiture ronde rétro, 3/4 face) : carrosserie arrondie rouge, double bande blanche capot + toit, phares ronds chromés, calandre ovale à lamelles, pare-chocs en bourrelet, ailes bombées, vitres bleu clair avec reflets, poignée de porte, jantes grises à rayons, ombre au sol.
- Respect de la D.A. du jeu : contours noirs, couleurs en aplats légèrement dégradés (pas de rendu photo).
- Seule la Classique change ; les 7 autres voitures gardent leur dessin pour l'instant.
- Archive : pencil-race_v99_avant-classique-retro.html

## v101 — La Classique : image de Mika telle quelle
- La carte de la Classique (Règles › Voitures) affiche directement l'image fournie par Mika (voiture rouge rétro à bandes blanches, 3/4 face), en entier, sur un fond gris clair de la même teinte que l'image. Image intégrée au fichier (JPEG, environ 34 ko).
- Le dessin de la v100 est abandonné. Les 7 autres voitures gardent leur dessin pour l'instant.
- Archive : pencil-race_v100_avant-image-classique.html

## v102 — Images des 8 voitures (Règles › Voitures)
- Les 7 autres cartes utilisent maintenant les images fournies par Mika (planche des 8 voitures rondes rétro) : Bille turquoise, Plume noire, Gomme rose, Porte-mine violette, Compas grise, Correcteur blanche, Colle orange doré. Chaque voiture est découpée de la planche (sans le cadre ni le nom), agrandie et intégrée au fichier (JPEG, environ 20 ko chacune).
- La Classique garde l'image d'origine (meilleure définition).
- Les dessins faits par le jeu (v95) ne sont plus utilisés sur les cartes.
- Archive : pencil-race_v101_avant-images-voitures.html

## v103 — Nouvelles voitures en jeu (vue de dessus)
- Les voitures sur la piste utilisent maintenant les modèles vus de dessus fournis par Mika (voitures rondes rétro à bande blanche) : Classique rouge, Bille turquoise, Plume noire, Gomme rose, Porte-mine violette, Compas grise, Correcteur blanche, Colle orange doré. Détourées (fond retiré), tournées pour que l'avant regarde dans le sens du tir, intégrées au fichier (PNG transparent).
- Mode multi : les voitures bleue, verte et jaune sont recolorées à partir de la rouge (bleu, vert) et de l'orange (jaune), vitres et bande blanche conservées.
- Même taille qu'avant sur la piste (30 x 15 unités). Les vignettes du choix de voiture (Entraînement) et la bannière d'accueil utilisent aussi ces modèles.
- Archive : pencil-race_v102_avant-voitures-dessus.html

## v104 — Nouvel écran d'accueil (image du cahier)
- L'accueil est l'image fournie par Mika (cahier à carreaux, titre PENCIL RACE aux crayons de couleur, 4 voitures, drapeau, boutons Solo / Multi / Options / Règles dessinés).
- Retouches de l'image : le bloc des 4 boutons est recentré horizontalement (décalé de 3 carreaux vers la droite, grille alignée) ; la bande libérée à gauche et l'ancienne place des copeaux sont recouvertes de papier quadrillé reconstitué ; les 2 copeaux de taille-crayon sont déplacés sous les boutons (sous Options et sous Règles), un peu réduits.
- Les boutons dessinés dans l'image sont cliquables (zones invisibles posées dessus, qui suivent l'image quelle que soit la taille de l'écran ; léger assombrissement au toucher). Toute la hauteur de l'image reste visible ; sur téléphone, les bords gauche et droit sont un peu rognés, sur PC des carreaux complètent les côtés.
- Ancien titre, sous-titre et bannière animée retirés de l'accueil.
- Archive : pencil-race_v103_avant-accueil.html

## v104 — Nouvel écran d'accueil (image de Mika)
- L'écran d'accueil est l'image de Mika (cahier à carreaux, titre PENCIL RACE au crayon, 4 voitures, drapeau, boutons Solo / Multi / Options / Règles dessinés).
- Retouches de l'image : bloc des 4 boutons centré horizontalement sur la page (décalé de 78 px) ; copeaux de taille-crayon déplacés et réduits dans le coin en bas à droite ; petite flèche à droite de « Multi » retirée ; papier quadrillé recréé sous la zone retouchée (lignes et teinte raccordées).
- Les boutons dessinés sont cliquables (zones transparentes posées dessus, léger enfoncement au toucher). Image intégrée au fichier (JPEG, environ 160 ko), fond bois autour sur les écrans plus hauts que l'image.
- Le titre et la bannière animée d'avant ne sont plus affichés.
- Archive : pencil-race_v103_avant-accueil.html

## v105 — Écran d'accueil : retouche sans raccord visible
- Bug v104 : la retouche recréait tout le papier quadrillé sous les boutons ; une ligne de raccord se voyait au-dessus des boutons (signalé par Mika).
- Nouvelle méthode : le vrai papier de l'image est gardé partout. Seules les 4 cases (bouton + cadre + ombre) sont déplacées de 78 px avec leur propre papier ; rien n'est emporté au-dessus du haut des boutons. Seules les petites zones découvertes (bande à gauche du bloc, espace entre les deux colonnes) sont recréées à partir du papier de l'image, recalées sur les lignes du quadrillage et sur la teinte du papier voisin.
- Flèche à droite de « Multi » retirée, copeaux déplacés en bas à droite (inchangé).
- Archive : pencil-race_v104_avant-raccord.html

## v106 — Cartes voitures : dessins au crayon de couleur
- Les 8 cartes de Règles › Voitures utilisent la nouvelle planche de Mika (voitures dessinées au crayon de couleur sur papier quadrillé, avec drapeau à damier).
- Flèches retirées près des voitures (flèches bleues et vertes, petits traits de vitesse) : le quadrillage est reconstitué à partir du papier voisin, recalé sur les lignes.
- L'image remplit toute la zone de la carte (plus de bandes grises) ; le drapeau est un peu rogné sur le bord droit.
- Archive : pencil-race_v105_avant-cartes-crayon.html

## v107 — Cartes voitures : planche sans flèches de Mika
- Les retouches de la v106 (flèches effacées à la main) étaient ratées : remplacées par la planche fournie par Mika, déjà sans flèches. Chaque voiture est simplement découpée (sans cadre ni nom) et agrandie, sans aucune retouche.
- Archive : pencil-race_v106_avant-cartes-sans-fleches.html

## v108 — Voitures en jeu : modèles au crayon de couleur (vue de dessus)
- Les voitures sur la piste utilisent la planche « vue de dessus » de Mika (dessins au crayon de couleur, bande claire au centre). Seules les voitures sont détourées : les flèches et drapeaux de la planche ne sont pas repris.
- L'avant de la voiture regarde dans le sens du tir. Taille sur la piste : 30 x 17 unités (proportions du dessin).
- Mode multi : bleu et vert recolorés à partir de la rouge, jaune à partir de l'orange.
- Archive : pencil-race_v107_avant-voitures-crayon-jeu.html

## v109 — Traits des tirs façon crayon de couleur
- Les traits laissés par les voitures après chaque tir (et pendant le tir) sont dessinés comme au crayon de couleur : grain du papier avec petits trous clairs, hachures en biais, couleur légèrement irrégulière, 3 passages un peu décalés (comme un crayon qui repasse). Même couleur que la voiture. Correcteur : liseré brun clair conservé.
- Les tirs ratés (pointillés gris) ne changent pas.
- Archive : pencil-race_v108_avant-traits-crayon.html

## v110 — Accueil : le cahier remplit tout l'écran
- L'image du cahier est zoomée pour couvrir tout l'écran du téléphone : plus de bandes marron en haut et en bas. Les bords gauche et droit de l'image sont un peu rognés (la marge du cahier et le pli disparaissent), ainsi que le bord de page en bas.
- Les zones cliquables suivent l'image : les 4 boutons dessinés restent cliquables (testé sur deux tailles d'écran).
- Copeaux de taille-crayon un peu plus petits et remontés sous le bouton Règles pour rester visibles.
- Archive : pencil-race_v109_avant-accueil-plein-ecran.html

## v111 — Circuits au crayon de couleur (d'après la planche de Mika)
- Tout le décor fixe des circuits (fond, piste, rochers, gouffres, briques, eau, décor, tunnels, portails, départ/arrivée) est dessiné avec un rendu « crayon de couleur » : remplissages en hachures de crayon en biais avec grain du papier et petits trous clairs, contours en mine granuleuse repassée (bords irréguliers). Les dessins du jeu sont gardés (net à toutes les tailles).
- Nouvelles couleurs de fond, comme sur la planche : Zigzag papier crème, Serpentin vert, Canyon rouge-brun, Escalier beige, Maelström bleu, Usine brique rosée, Jardin vert pré, Grotte brun foncé. Plus de quadrillage sous les circuits.
- Bande plus foncée le long des bords de piste (comme sur la planche).
- Le décor fixe est maintenant dessiné une seule fois par partie (puis recopié à chaque image) : moins de calcul pendant la course ; petite attente au lancement d'une partie sur le Jardin (le plus chargé).
- Archive : pencil-race_v110_avant-style-crayon.html

## v112 — Accueil : s'adapte à toutes les tailles d'écran
- Bug v110/v111 : le zoom de l'accueil était calculé sur la largeur de la fenêtre ; selon l'écran (PC, appli, certains téléphones) le cahier était beaucoup trop zoomé.
- Le zoom est maintenant calculé sur la taille réelle de l'écran d'accueil : la feuille du cahier tient en entier en hauteur (titre et boutons toujours visibles), avec au plus 7 % rogné de chaque côté sur les téléphones étroits. Plus de bois ni de bord de page.
- S'il reste de la place autour (PC, tablette, téléphone très allongé), elle est remplie par du papier quadrillé (plus de bandes marron).
- Recalcul à chaque changement de taille ou d'orientation. Testé : 2 téléphones, une tablette, un écran de PC ; les 4 boutons ouvrent les bons menus.
- Archive : pencil-race_v111_avant-accueil-adapte.html

## v113 — Fond « feuille de cahier » pour tous les menus et l'accueil
- Tous les écrans de menu (accueil, Solo, Entraînement, Multi, Options, Règles et ses sous-menus) ont pour fond l'image de feuille à grands carreaux fournie par Mika (marge rouge à gauche), qui couvre tout l'écran. Image intégrée (JPEG, environ 150 ko).
- Accueil : l'espace libre autour de l'image du cahier est maintenant cette feuille.
- Les menus restent en couleurs claires même si le téléphone est en mode sombre (texte noir sur la feuille). Boutons et cartes des menus sur fond blanc légèrement transparent pour rester lisibles. L'écran de course ne change pas.
- Archive : pencil-race_v112_avant-fond-cahier.html

## v114 — Circuits dessinés sur une feuille à carreaux
- Les circuits ont maintenant pour fond une feuille de cahier : papier blanc + carreaux bleu-gris fins (cases de 18 unités), comme l'exemple de Mika.
- Zigzag : papier seul (les carreaux bien visibles), piste blanche avec ombre grise douce.
- Autres circuits : le fond reste colorié au crayon dans la couleur du thème, un peu plus léger, et les carreaux transparaissent par-dessus le coloriage. Plus de cadre noir autour de la feuille.
- Archive : pencil-race_v113_avant-circuits-feuille.html

## v115 — Accueil « dessiné » sur la feuille à carreaux
- Nouvelle image d'accueil de Mika (titre, 4 voitures, drapeau, 4 boutons, copeaux, sur fond blanc).
- Elle est posée sur la feuille à carreaux en mode « multiplication » : le blanc de l'image devient transparent, les carreaux et la marge rouge apparaissent à travers, comme si tout était dessiné sur la feuille.
- L'image tient en entier dans l'écran (plus rien de rogné), centrée ; s'adapte à toutes les tailles d'écran.
- Les 4 boutons dessinés sont cliquables (zones recalées sur la nouvelle image). Testé sur 2 téléphones, une tablette et un PC.
- Archive : pencil-race_v114_avant-accueil-feuille.html

## v116 — Nouvelle feuille à carreaux (sans marge)
- La feuille de fond des menus et de l'accueil est remplacée par la nouvelle image de Mika (petits carreaux réguliers, sans marge rouge ni lignes de Seyès). Image intégrée (JPEG, environ 125 ko).
- Les carreaux dessinés sous les circuits prennent la même teinte (bleu-violet un peu plus marqué) pour aller avec.
- Archive : pencil-race_v115_avant-nouvelle-feuille.html

## v117 — Accueil et menus comme la maquette de Mika
- Carreaux de la feuille plus grands (environ 28 px à l'écran, une quinzaine de carreaux sur la largeur d'un téléphone), répétés pour couvrir tout l'écran : accueil et tous les menus.
- Accueil : le dessin occupe toute la largeur de l'écran (ses marges blanches peuvent déborder), sans jamais être coupé en hauteur ; carreaux visibles à travers le blanc du dessin.
- Archive : pencil-race_v116_avant-accueil-grands-carreaux.html

## v118 — Accueil : les carreaux ne passent plus sur les voitures
- Bug v115-v117 : l'image d'accueil était posée en « multiplication », donc les carreaux transparaissaient partout, y compris sur les voitures, le titre et les boutons.
- L'image est maintenant détourée : le fond blanc est transparent (carreaux visibles), les voitures, le titre, le drapeau, les boutons et leurs ombres sont opaques. Les traits fins et les traînées de crayon restent légèrement transparents, comme dessinés sur la feuille. Image intégrée en WebP transparent (environ 220 ko).
- Archive : pencil-race_v117_avant-voitures-opaques.html

## v119 — Voitures en jeu aux couleurs plus vives
- Les dessins des voitures sur la piste ont des couleurs plus saturées (x1,75) et plus contrastées (Classique, Bille, Gomme, Porte-mine, Colle, et les voitures bleue, verte et jaune du multi). Plume (noire), Compas (grise) et Correcteur (blanche) : contraste renforcé seulement, pour qu'elles restent noire, grise et blanche.
- Archive : pencil-race_v118_avant-voitures-vives.html

## v120 — Entraînement en 2 écrans
- Écran 1 : on choisit uniquement le circuit. Un clic sur un circuit ouvre directement l'écran 2.
- Écran 2 : rappel du circuit choisi, puis « Ta voiture », « Adversaire », le niveau de pilotage, le bouton Lancer et le record. Le bouton Retour ramène au choix du circuit.
- Le menu Multi n'a pas changé (le choix du circuit y reste sur le même écran).
- Archive : pencil-race_v119_avant-entrainement-2-ecrans.html

## v121 — Choix du circuit : grille verticale à 2 par ligne
- Écran « Entraînement » (choix du circuit) : fini le défilement horizontal. Les 8 circuits sont en grille de 2 par ligne, qu'on fait défiler vers le bas comme un ascenseur. Les vignettes prennent toute la largeur de leur colonne (bien plus grandes sur un téléphone), nom en un peu plus gros.
- Testé sur 393 px et 320 px de large : pas de débordement horizontal.
- Le menu Multi garde son ancien défilement horizontal.
- Archive : pencil-race_v120_avant-circuits-ascenseur.html

## v122 — Entraînement en 3 écrans, voitures en grandes cartes
- Parcours : 1) le circuit, 2) ta voiture, 3) la voiture adverse. Un clic sur un circuit ouvre l'écran voiture ; un clic sur ta voiture ouvre l'écran adversaire. « Retour » revient à l'étape précédente.
- Voitures : grille de 2 par ligne qu'on fait défiler vers le bas. Chaque voiture a le même visuel 3/4 que dans le menu Règles (dessin + bandeau de sa couleur avec son nom), sans retournement de carte.
- Écran adversaire : option « Aucun adversaire · je joue seul » en haut, les 8 voitures, puis la phrase d'explication, le niveau de pilotage, Lancer et le record. Un rappel « Circuit · Ta voiture » est affiché en haut.
- Archive : pencil-race_v121_avant-voitures-2-ecrans.html

## v123 — Son du plouf réduit de moitié
- Le volume du « plouf » (chute dans l'eau) passe de 1,1 à 0,55, soit 50 % de moins. Les autres sons ne changent pas.
- Archive : pencil-race_v122_avant-plouf-moins-fort.html

## v124 — Son du plouf encore réduit de moitié
- Volume du « plouf » : 0,55 → 0,275 (soit 25 % du volume d'origine). Les autres sons ne changent pas.
- Archive : pencil-race_v123_avant-plouf-encore-moins-fort.html

## v125 — Entraînement en 4 écrans : pilotage et niveau du bot en dernière étape
- Parcours : 1) circuit, 2) ta voiture, 3) adversaire, 4) réglages. Un clic sur l'adversaire (ou « Aucun adversaire ») ouvre l'écran 4.
- Écran 4 : rappel Circuit · Ta voiture · Adversaire, puis « Pilotage : difficulté » (Facile / Normal / Hard) avec sa description, « Bot : niveau » (masqué quand on joue seul), le bouton Lancer et le record (en solo).
- Le menu Options garde les mêmes réglages de son côté.
- Archive : pencil-race_v124_avant-entrainement-4-ecrans.html

## v126 — Grotte : plus de tunnels invisibles
- Bug : le dessin du décor est gardé en mémoire d'une partie à l'autre, avec une clé qui ne regardait que le premier tunnel et leur nombre. Après une partie, une nouvelle partie dans la Grotte gardait souvent l'ancien dessin alors que les tunnels avaient été retirés au hasard autrement : des tunnels fonctionnaient sans être dessinés (et d'autres dessinés ne fonctionnaient pas).
- Mesure : sur 300 tirages de tunnels, 23 clés seulement pour 300 jeux différents (18 clés partagées entre plusieurs jeux de tunnels).
- Correctif : la clé tient compte de tous les tunnels (numéro et position). Le dessin est refait dès que le tirage change.
- Archive : pencil-race_v125_avant-tunnels-fantomes.html

## v127 — Nouvelles images de voitures (Règles et « Ma voiture »)
- Les 8 voitures de l'image de Mika (avec l'écusson sur la portière) remplacent les dessins dans le menu Règles > Voitures (face avant des cartes) et dans l'écran « Choisis ta voiture » de l'entraînement.
- L'écran « Choisis l'adversaire » garde les anciennes images, comme demandé. Les voitures en jeu ne changent pas.
- Images recadrées sans bandeau ni bordure (environ 23 ko chacune).
- Archive : pencil-race_v126_avant-nouvelles-voitures-cartes.html

## v128 — Images adversaire avec tête de mort
- L'écran « Choisis l'adversaire » utilise les 8 voitures de la nouvelle image de Mika (tête de mort sur le capot, écusson sur la portière).
- « Ma voiture » et le menu Règles gardent les images avec l'écusson seul (v127).
- Archive : pencil-race_v127_avant-adversaires-tetes-de-mort.html

## v129 — La Classique retrouve son ancienne image
- Menu Règles et « Ma voiture » : la Classique reprend l'image d'avant (sans écusson sur la portière). Les 7 autres voitures gardent leurs images de la v127.
- L'écran adversaire ne change pas (tête de mort, v128).
- Archive : pencil-race_v128_avant-classique-ancienne.html

## v130 — Classique adversaire : nouvelle image
- Écran « Choisis l'adversaire » : la Classique utilise la nouvelle image de Mika (tête de mort sur le capot, sans écusson sur la portière). Légèrement recadrée et complétée de quelques pixels de carreaux en haut et en bas pour remplir la carte sans déformer la voiture.
- Les 7 autres adversaires, « Ma voiture » et le menu Règles ne changent pas.
- Archive : pencil-race_v129_avant-classique-adversaire.html

## v131 — Menu Options en images
- Les réglages du menu Options deviennent des boutons-images (dessins de Mika), dans cet ordre : 1) Pilotage : volants fleuri / marron / en feu (Facile / Normal / Hard) ; 2) Bot : niveau : casques fleuri / cuir / en feu ; 3) Sons : haut-parleur / haut-parleur barré ; 4) Bouton GO en solo : drapeau GO / drapeau GO barré.
- Le choix actif est entouré d'un trait épais, les autres sont un peu atténués. Chaque image a une petite légende sous elle. Les textes d'explication sont conservés.
- Même fonctionnement qu'avant (mêmes réglages enregistrés). L'écran 4 de l'entraînement garde ses boutons texte.
- Archive : pencil-race_v130_avant-options-images.html

## v132 — Dernier écran de l'entraînement : icônes et bouton Lancer en image
- Pilotage et niveau du bot reprennent les icônes du menu Options (volants et casques). Ils sont reliés : changer un réglage ici le change aussi dans Options.
- Le bouton « Lancer » devient un bouton-image : les feux de départ et la ligne d'arrivée dessinés par Mika (version sans les marquages A1 / B2), avec « Lancer » sur un bandeau noir en dessous. Image recadrée sur la partie haute pour que le bouton reste visible sans défiler.
- Archive : pencil-race_v131_avant-ecran4-icones.html

## v133 — Bouton Lancer : texte directement sur l'image
- Plus de bandeau noir : « Lancer » est écrit en blanc, contour noir, sur le bas de l'image des feux de départ. L'image est un peu plus haute (la ligne d'arrivée est de nouveau visible).
- Archive : pencil-race_v132_avant-lancer-sur-image.html

## v134 — Menu Solo : boutons-images
- « Entraînement » devient un bouton-image avec le dessin des deux mécaniciens sur la ligne d'arrivée ; « Campagne » un bouton-image avec le dessin du podium (« bientôt », image grisée, toujours non cliquable). Le nom est écrit sur l'image (blanc, contour noir).
- Archive : pencil-race_v133_avant-menu-solo-images.html

## v135 — Multi en ligne (prototype, 2 à 4 joueurs)
- Multi → « Jouer en ligne » : un joueur crée la partie (circuit + nombre de joueurs, 2 à 4) et reçoit un code de 4 lettres ; les amis ouvrent le lien « …/pencil-race/?join=CODE » (ou tapent le code dans « Rejoindre »). Pas de compte. Chacun joue sur son téléphone, couleur attribuée dans l'ordre d'arrivée (Rouge = hôte).
- Principe : l'hôte calcule chaque tir (hasard compris) et envoie le tracé à tous ; chacun l'anime et déroule la fin du tour de la même façon. Mise en relation par PeerJS (serveur gratuit, connexion ensuite directe téléphone à téléphone ; relais TURN gratuit de PeerJS en secours). Portes du Jardin et tunnels de la Grotte tirés par l'hôte et envoyés à tous.
- En ligne : pas de chrono Hard, pause sans arrêt de la partie, « Rejouer » réservé à l'hôte, message si un joueur quitte. Les réglages forcés pour la partie ne sont jamais enregistrés.
- Ne marche que sur le site GitHub Pages (https://xahoa75-eng.github.io/pencil-race/), pas dans l'Artifact (pas de WebRTC) : l'Artifact affiche un message qui renvoie au site.
- Code : `src/online.js` (inclus par `tools/build.py`), `vendor/peerjs.min.js` (PeerJS 1.5.4, MIT), `fire` découpé en `buildShot` + `launch`. Test : `tools/online135.js` (serveur PeerJS local + 2 à 3 navigateurs : positions identiques après chaque tour sur Zigzag, Grotte à 3 joueurs, Jardin).
- À vérifier par Mika sur de vrais téléphones (4G / Wi-Fi différents).
- Archive : pencil-race_v134_avant-multi-en-ligne.html

## v136 — Multi en ligne : plus de bouton GO
- En ligne, le bouton GO disparaît : à ton tour tu glisses et relâches directement ; le texte d'aide est adapté. Le multi sur un seul téléphone et le solo ne changent pas. Test en ligne refait (2 joueurs, positions identiques, bouton GO jamais visible).
- Archive : pencil-race_v135_avant-sans-go.html

## v137 — Multi en ligne : power-ups (bulles « ? »)
- Des bulles « ? » apparaissent au hasard sur la route (3 au départ pour 2 joueurs, jamais loin de la piste ni sur le départ, les tunnels ou les flaques ; une nouvelle peut apparaître après un tir, jusqu'à n+2 bulles). La voiture qui passe dessus pendant un tir la fait éclater et gagne, au hasard, le pouvoir d'une voiture : Bille (rebonds), Plume (flaque devant l'adversaire), Gomme (traverse les murs), Porte-mine (3 petits coups), Compas (épouse la courbe), Colle (traînée qui ralentit). Le Correcteur n'est pas inclus.
- Le pouvoir sert pour le prochain tour du joueur, puis disparaît (pour le Porte-mine : ses 3 petits coups). Un seul pouvoir en réserve à la fois (une nouvelle bulle remplace l'ancien). Le nom du pouvoir en réserve s'affiche à côté du joueur en haut.
- Technique : l'hôte place les bulles et tire le pouvoir ; ils sont envoyés avec le tir, donc identiques chez tout le monde. `equipPU`/`unequipPU` prêtent les réglages d'une voiture au joueur le temps d'un tour. Test : `FORCE_PU=1`/`FORCE_BUB=1 node tools/online135.js` (14 tours Zigzag et Jardin, 6 pouvoirs, positions/pouvoirs/bulles identiques chez les deux joueurs).
- Archive : pencil-race_v136_avant-powerups.html

## v138 — Power-ups : une bulle à chaque tir, près des joueurs
- À chaque tir, une nouvelle bulle apparaît près du joueur qui va jouer, et une fois sur deux une autre près du tireur : le plus souvent devant (70 à 220 de piste), parfois derrière (50 à 110). Au départ, une bulle devant chaque joueur. Maximum de bulles sur la piste : 2 × joueurs + 1 (5 à 2 joueurs).
- Archive : pencil-race_v137_avant-bulles-proches.html

## v139 — Power-ups : les bulles oubliées loin derrière disparaissent
- À chaque début de tour, toute bulle restée à plus de 180 de piste derrière le dernier joueur est effacée (même calcul chez tous les joueurs, rien à envoyer). Test : bulle laissée au départ pendant que les voitures sont près de l'arrivée → effacée ; bulle proche → gardée.
- Archive : pencil-race_v138_avant-nettoyage-bulles.html

## v140 — Miniatures des circuits : les dessins de Mika
- Les 8 miniatures (Zigzag, Serpentin, Canyon, Escalier, Maelström, Usine, Jardin, Grotte) sont remplacées par les dessins au crayon de couleur fournis, découpés dans la planche (`assets/images/circuit-*.jpg`). Elles s'affichent partout où il y en avait : Entraînement, Multi (même téléphone), Multi en ligne et les fiches « Circuits » des Règles. Les dessins non carrés (Usine, Jardin) sont centrés sur fond papier. Le tracé « fil de fer » reste en secours si une image manque.
- Archive : pencil-race_v139_avant-miniatures-circuits.html

## v141 — Choix du nombre de joueurs en images
- Dans Multi (même téléphone) et Multi en ligne, les trois boutons « 2 / 3 / 4 joueurs » sont remplacés par les trois dessins des pilotes (le texte « 2 JOUEURS »… est déjà dans l'image). Le choix sélectionné est cerclé de noir, les autres légèrement estompés. Images : `assets/images/joueurs-2/3/4.jpg`.
- Archive : pencil-race_v140_avant-image-joueurs.html

## v142 — Bouton « Jouer en ligne » en image
- Dans Multi, le bouton « Jouer en ligne (chacun son téléphone) » est remplacé par le dessin des quatre crayons branchés (câble réseau, nuage). « JOUER EN LIGNE » est écrit dans l'encadré du haut, dans le même style que « 2 JOUEURS » (lettres capitales manuscrites gris foncé, police Patrick Hand SC dessinée dans l'image). Image : `assets/images/jouer-en-ligne.jpg`.
- Archive : pencil-race_v141_avant-icone-en-ligne.html

## v143 — Nouvel écran d'accueil
- L'image d'accueil est remplacée par la nouvelle (titre en lettres de crayon, 4 voitures, 4 gommes Solo / Multi / Options / Règles). Le fond de papier de l'image est rendu transparent (détection du papier, ombres conservées en transparence douce) : on voit les carreaux derrière. Les 4 zones de clic sont recalées sur les nouvelles gommes (testées : Solo, Multi, Options et Règles ouvrent le bon écran). `assets/images/accueil-v2.webp` ; l'ancienne `accueil.webp` reste dans le dépôt.
- Archive : pencil-race_v142_avant-accueil2.html

## v144 — Le cadre crayon sur toutes les icônes
- Le cadre dessiné (bandeau en haut avec damier en haut à gauche, damier en bas à droite) entoure maintenant TOUTES les icônes : circuits (Entraînement, Multi, Multi en ligne, Règles), voitures, nombre de joueurs, options (pilotage, bot, sons, GO), « Jouer en ligne », Entraînement / Campagne, « Lancer » et les cartes des règles. Le cadre est découpé en 9 morceaux : les coins gardent leur forme et seul le milieu s'étire, donc pas de déformation visible.
- Le titre de chaque icône est écrit dans le bandeau, dans le même style que « JOUER EN LIGNE » (police Patrick Hand SC embarquée). Les anciens petits textes sous/dans les cartes sont retirés ; la sélection est un anneau noir.
- Images recadrées pour retirer leurs anciens cadres (circuits, joueurs, jouer en ligne). Fichiers : `assets/images/cadre.png`, `patrick-hand-sc.woff2`.
- Archive : pencil-race_v143_avant-cadres.html

## v145 — Icône « Circuits » dans Règles
- Dans Règles, le bouton « Circuits » est remplacé par ton dessin des 3 circuits (boucle rouge, serpentin vert, huit bleu, drapeau START). Son ancien cadre est retiré et remplacé par le cadre crayon commun, avec « CIRCUITS » dans le bandeau. Il ouvre toujours les cartes des circuits. Image : `assets/images/regles-circuits.jpg`.
- Archive : pencil-race_v144_avant-icone-circuits.html

## v146 — Icône « Voitures » dans Règles
- Dans Règles, le bouton « Voitures » est remplacé par ton dessin des 3 voitures (rouge, verte, violette, drapeau VOITURES), dans le cadre crayon commun avec « VOITURES » dans le bandeau. Il ouvre toujours les cartes des voitures. Image : `assets/images/regles-voitures.jpg`.
- Archive : pencil-race_v145_avant-icone-voitures.html

## v147 — Cartes des Règles : recto et verso de même taille
- Dans Règles (Voitures et Circuits), le dos des cartes qui se retournent reçoit le même cadre crayon que le recto (titre dans le bandeau, damiers), au lieu d'un simple rectangle. Recto et verso ont donc exactement la même taille ; le texte est remis en page (plus petit, marges recalées) et rentre entièrement dans chaque carte.
- Archive : pencil-race_v146_avant-versos.html

## v148 — Nouvelles icônes de voitures
- Les 8 icônes de voitures (Classique, Bille, Plume, Gomme, Porte-mine, Compas, Correcteur, Colle) sont remplacées par ta nouvelle planche, découpée carte par carte et débarrassée de ses anciens cadres/titres (le cadre crayon commun les entoure). Elles s'affichent dans « Ma voiture » (Entraînement) et dans Règles › Voitures. Les cartes de l'écran « Adversaire » ne changent pas. Images : `assets/images/voiture-*.jpg`.
- Archive : pencil-race_v147_avant-voitures.html

## v149 — Voitures plus grandes dans les cadres
- Chaque image de voiture est recadrée au plus près de la voiture (marge de 3 %), et l'image utilise les marges vides gauche/droite du cadre : les voitures sont nettement plus grandes, sans toucher ni cacher le cadre (le damier en bas à droite reste visible). Valable dans « Ma voiture » et Règles › Voitures.
- Archive : pencil-race_v148_avant-voitures-grandes.html

## v150 — Nouvelles voitures adversaires (tête de mort)
- L'écran « Choisis l'adversaire » utilise maintenant les nouvelles voitures (même dessin, même taille agrandie que « Ma voiture »), avec une tête de mort blanche cerclée de gris dessinée sur le capot de chacune, au même endroit et inclinée comme le capot. Les anciennes images adversaire restent dans le dépôt. Images : `assets/images/voiture-*-adversaire.jpg`.
- Archive : pencil-race_v149_avant-adversaires.html

## v151 — Tête de mort alignée sur la bande du capot
- Sur les 8 voitures adversaires, la tête de mort est maintenant centrée sur la bande du capot et posée « à plat » sur le capot (orientée dans le sens de la bande, déformée en perspective comme le capot). La bande dépasse devant et derrière, dans le prolongement.
- Archive : pencil-race_v150_avant-tete-de-mort-alignee.html

## v152 — Règles : menu « Pilotage » retiré
- L'écran Règles n'affiche plus que les deux icônes Voitures et Circuits. Le bouton « Pilotage » est retiré (sa page reste dans le code, inaccessible, au cas où).
- Archive : pencil-race_v151_avant-sans-pilotage.html

## v153 — Multi en 4 écrans
- Écran 1 (Multi) : choix du mode, deux grandes icônes encadrées « JOUER EN LIGNE » (crayons branchés) et « JOUER EN LOCAL » (nouveau dessin : main qui tient le téléphone avec les 4 crayons). Image : `assets/images/jouer-en-local.jpg`.
- Jouer en local → écran 2 : nombre de joueurs (2/3/4) ; toucher une icône passe à l'écran suivant.
- Écran 3 : choix du circuit, mêmes grandes cartes qu'en Solo › Entraînement ; toucher un circuit passe à l'écran suivant.
- Écran 4 : pilotage (Facile / Normal / Hard, comme en Entraînement) et le bouton « Lancer » de l'Entraînement, qui démarre la course.
- Le rappel des options et l'ancien bouton texte « Lancer la course » sont retirés. Jouer en ligne ne change pas.
- Archive : pencil-race_v152_avant-multi-ecrans.html

## v154 — Nouvelle icône « Jouer en local »
- L'icône « Jouer en local » (Multi, écran 1) est remplacée par ton nouveau dessin sans cadre (main qui tient le téléphone avec les 4 crayons), placé dans le cadre crayon commun avec « JOUER EN LOCAL » dans le bandeau.
- Archive : pencil-race_v153_avant-icone-local2.html

## v155 — Bouton « Valider » au choix du nombre de joueurs
- Jouer en local, écran du nombre de joueurs : toucher 2/3/4 sélectionne seulement (les pastilles de couleur des joueurs se mettent à jour) ; un bouton noir « Valider » en dessous passe au choix du circuit.
- Archive : pencil-race_v154_avant-valider.html

## v156 — Option « Bouton GO en multi »
- Jouer en local, écran du nombre de joueurs : nouvelle option « Bouton GO en multi » avec les deux drapeaux (GO activé / Sans GO), au-dessus de « Valider ». Le choix est mémorisé.
- Sans GO, chaque joueur vise directement à son tour, sans appuyer sur GO. En Hard, le GO reste toujours là (il lance le chrono). Par défaut : GO activé (comme avant).
- Options : la note sous « Bouton GO en solo » est mise à jour. Le multi en ligne ne change pas (toujours sans GO).
- Archive : pencil-race_v155_avant-go-multi.html

## v157 — Icônes « Créer » et « Rejoindre » (en ligne)
- Écran En ligne : les boutons texte « Créer une partie » et « Rejoindre une partie » sont remplacés par deux icônes encadrées côte à côte. CRÉER = la voiture rouge en réseau avec les câbles de couleur ; REJOINDRE = la main qui dessine le circuit sur le téléphone. Elles ouvrent les mêmes écrans qu'avant. Images : `assets/images/creer-partie.jpg`, `rejoindre-partie.jpg`.
- Archive : pencil-race_v156_avant-creer-rejoindre.html

## v158 — Créer / Rejoindre : dessins plus grands, l'un sous l'autre
- Les deux images sont recadrées au plus près du dessin (marges blanches retirées en haut) : elles sont nettement plus grandes dans leur cadre.
- Les boutons CRÉER et REJOINDRE passent côte à côte → l'un sous l'autre, dans la même disposition que l'écran « En ligne / En local ».
- Archive : pencil-race_v157_avant-creer-rejoindre-grand.html

## v159 — Créer / Rejoindre : images échangées
- Les deux dessins étaient inversés : « Créer » montre maintenant la main qui dessine le circuit, « Rejoindre » montre la voiture en réseau avec les câbles.
- Archive : pencil-race_v158_avant-inversion.html

## v160 — Créer / Rejoindre : image collée aux bords du cadre
- Les deux images remplissent maintenant tout l'intérieur du cadre, sans aucune bande vide sur les côtés (l'image peut s'étirer légèrement plutôt que garder ses proportions d'origine).
- Archive : pencil-race_v159_avant-image-pleine.html

## v161 — Créer / Rejoindre : l'image touche vraiment le trait du cadre
- Le cadre dessiné garde une marge crème entre son trait et le début du contenu : les deux images débordent maintenant sur cette marge (gauche, droite et bas) pour venir au contact du trait. Le damier en bas à droite et le bandeau du titre restent visibles.
- Archive : pencil-race_v160_avant-bord-a-bord.html

## v162 — Retour à l'affichage de la v160 (Créer / Rejoindre)
- Annulation de la v161 : les images de « Créer » et « Rejoindre » ne débordent plus sur la marge crème du cadre. On revient exactement à l'affichage de la v160. La v161 reste dans le dépôt (tag v161).
- Archive : pencil-race_v161_avant-retour.html

## v163 — Créer / Rejoindre : les deux icônes à la même taille
- Les deux cadres ont maintenant exactement la même taille (mesuré : 286 × 333 px sur un écran de 393 px) : les images s'étirent légèrement pour remplir la même boîte.
- Archive : pencil-race_v162_avant-meme-taille.html
