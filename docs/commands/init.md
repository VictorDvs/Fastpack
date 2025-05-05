---
id: init
title: Initialiser un projet
---

## `fastpack init`

Initialise un nouveau projet Fastpack dans le répertoire courant ou spécifié.

## Utilisation

```bash
fastpack init [nom-du-dossier]
```

- Si aucun dossier n'est précisé, le projet sera créé dans le répertoire courant.  
- Si un nom de dossier est fourni, Fastpack créera ce dossier et y initialisera le projet.

## Comportement

- Crée l'arborescence de base du projet.
- Génère un fichier de configuration `fastpack.config.js`.
- Installe les dépendances de base si nécessaire.

### Exemple

```bash
fastpack init mon-projet
cd mon-projet
npm start
```
