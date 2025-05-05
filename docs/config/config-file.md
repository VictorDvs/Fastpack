---
id: config-file
title: Configuration
---

La configuration de Fastpack permet d'adapter le comportement de l'outil en fonction de tes besoins. Ce fichier permet de spécifier les options liées à la construction du projet, telles que la gestion des fichiers, le dossier de sortie, et bien d'autres.

## Fichier de configuration

```js
module.exports = {
  inputDir: 'docs', // Dossier des fichiers source
  outputDir: 'build', // Dossier de sortie
  cleanBeforeBuild: true, // Supprime le dossier de sortie avant chaque build
  plugins: [
    // Liste des plugins à utiliser
  ]
};
```

### Options principales

- `inputDir` : Définie le dossier contenant les fichiers source (par défaut : docs).

- `outputDir` : Définie le dossier de sortie pour les fichiers générés (par défaut : build).

- `cleanBeforeBuild` : Si activé, supprime le dossier de sortie avant chaque génération (par défaut : false).

- `plugins` : Liste des plugins à utiliser pour enrichir les fonctionnalités de Fastpack.

### Autres options

Fastpack peut être configuré avec d'autres paramètres pour répondre à des besoins spécifiques. Consulte la documentation complète pour plus de détails sur toutes les options disponibles.

### Exemple de configuration avancée

Voici un exemple de configuration avancée :

```js
module.exports = {
  inputDir: 'docs',
  outputDir: 'dist',
  cleanBeforeBuild: true,
  plugins: [
    {
      name: 'plugin-name',
      options: {
        // Options spécifiques du plugin
      }
    }
  ]
};
```

Cette configuration spécifie que les fichiers source se trouvent dans docs, et les fichiers générés seront stockés dans dist. De plus, un plugin spécifique est ajouté.
