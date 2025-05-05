---
id: options
title: Options
---

Fastpack offre plusieurs options configurables pour personnaliser son comportement. Ces options sont définies dans le fichier de configuration `fastpack.config.js`. Ce fichier permet de définir des paramètres globaux qui influenceront le processus de génération des fichiers.

## Options disponibles

### `inputDir`

- **Type** : `string`
- **Valeur par défaut** : `docs`
- **Description** : Spécifie le dossier où sont stockés les fichiers source. Par défaut, il s'agit du dossier `docs`.

### `outputDir`

- **Type** : `string`
- **Valeur par défaut** : `build`
- **Description** : Spécifie le dossier où les fichiers générés seront placés. Par défaut, ce dossier est nommé `build`.

### `cleanBeforeBuild`

- **Type** : `boolean`
- **Valeur par défaut** : `false`
- **Description** : Si activé, cette option supprime le dossier de sortie avant chaque génération des fichiers. Cela permet de s'assurer qu'aucun ancien fichier n'interfère avec la nouvelle génération.

### `plugins`

- **Type** : `array`
- **Valeur par défaut** : `[]`
- **Description** : Liste des plugins à utiliser. Chaque plugin peut avoir ses propres options spécifiques. Utilisé pour étendre les fonctionnalités de Fastpack.

### `theme`

- **Type** : `string`
- **Valeur par défaut** : `light`
- **Description** : Permet de choisir le thème d'affichage pour la documentation générée. Les options valides sont `light` et `dark`.

### `mermaid`

- **Type** : `boolean`
- **Valeur par défaut** : `false`
- **Description** : Active le support de **Mermaid** pour générer des diagrammes dans les fichiers Markdown.

## Exemple de configuration

Voici un exemple de configuration qui inclut toutes les options mentionnées :

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
  ],
  theme: 'dark',
  mermaid: true,
};
