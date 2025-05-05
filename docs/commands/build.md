---
id: build
title: Générer les fichiers du site
---

## `fastpack build`

La commande `fastpack build` compile le projet et génère les fichiers statiques dans le dossier `dist`.

## Utilisation

```bash
fastpack build
```

Les fichiers du site sont désormais disponibles dans `./dist` et peuvent être déployés sur un serveur web.

## Comportement

- Compile les fichiers sources (Markdown, composants, styles).
- Optimise les assets (minification, bundling).
- Génère une version statique prête pour la production dans le dossier `dist`.
