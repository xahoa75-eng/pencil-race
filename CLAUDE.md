# Pencil Race — consignes du projet

Jeu mobile de course au crayon (cour de récré), créé avec Mika (Mikaël). Une seule page HTML/JS, sans serveur pour l'instant.

## Façon de travailler (consignes permanentes de Mika)
- Répondre en français, ton chaleureux et simple. Ne pas gaspiller de tokens : faire, tester, résumer en quelques phrases.
- Faire exactement ce que montrent ses dessins et images : regarder l'image avant de coder. Ne jamais accuser son téléphone en cas de bug : vérifier d'abord.
- À CHAQUE modification : garder la version précédente (commit git + tag `vNNN`) et ajouter une entrée dans `journal/journal-des-versions.md`. Ne jamais supprimer d'ancienne version.
- Ne jamais expliquer le fonctionnement des bots dans les règles du jeu. Ne jamais afficher le nombre de coups parfaits d'un circuit.
- Les némésis de la campagne sont choisis par Mika, jamais par Claude.
- Les sons doivent être réalistes (vrais fichiers, pas du 8 bits). Les sons définitifs viennent d'Envato Elements (licence de Mika).
- Les 8 voitures : Classique, Bille, Plume, Gomme, Porte-mine, Compas, Correcteur, Colle. Les 8 circuits : Zigzag, Serpentin, Canyon, Escalier, Maelström, Usine, Jardin, Grotte.
- Objectifs : multi en ligne (2 joueurs, puis 3 et 4, un joueur héberge, amis via un simple lien), puis campagne (style Mega Man), puis sortie sur les stores (dossier propriété intellectuelle).

## Organisation du dépôt
- `src/template.html` : la page (balises `{{CSS}}` et `{{JS}}`, et `@@A:nom@@` pour les images).
- `src/style.css`, `src/game.js` : le CSS et le JS du jeu.
- `assets/images/`, `assets/sounds/` : les images et les sons (fichiers normaux).
- `tools/build.py` : assemble tout en `index.html` (page unique, publiée sur GitHub Pages et dans l'Artifact).
- `tools/build_test.py` : fabrique une copie avec le crochet de test `window.__T` ; les `tools/*.js` sont des tests Playwright.
- `journal/journal-des-versions.md` : l'historique des versions (aussi copié dans le Project claude.ai « course de crayons »).
- `index.html` : version assemblée, à regénérer avec `python3 tools/build.py` après chaque modification de `src/` ou `assets/`.

## Cycle d'une modification
1. Modifier `src/` ou `assets/` (jamais `index.html` à la main).
2. `python3 tools/build.py` puis tester (Playwright + Chromium : `/opt/pw-browsers/chromium`, `NODE_PATH=$(npm root -g)`).
3. Journal : ajouter l'entrée `## vNNN — titre`.
4. `git commit` (message `vNNN — titre`), `git tag vNNN`, `git push --tags`.
5. Publier l'Artifact (même URL) avec `index.html`, et copier le journal dans le Project.

## Pièges connus
- Publication Artifact : seul le PREMIER bloc `<style>` après le `<title>`/skeleton survit ; le CSS du jeu doit rester dans le bloc principal.
- Un Artifact ne permet ni WebRTC ni connexion réseau externe : le multi en ligne se teste sur le site GitHub Pages, pas dans l'Artifact.
- Ne jamais utiliser `pkill -f` ou `ps | grep | kill` avec un motif présent dans la ligne de commande : ça tue le shell.
- La couche fixe d'un circuit est mise en cache (`drawStatic`) : sa clé doit tenir compte de tout ce qui est tiré au hasard (tunnels de la Grotte, portes du Jardin).
