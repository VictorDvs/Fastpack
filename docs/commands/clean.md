---
id: clean
title: Supprimer les fichiers
---

## `fastpack clean`

La commande `fastpack clean` permet de supprimer les fichiers générés dans le dossier `build/`. Cela est particulièrement utile pour repartir de zéro ou pour libérer de l'espace après une série de builds.

## Utilisation

```bash
fastpack clean
```

:::warning
Cela supprimera le dossier `build/` et tous ses fichiers.
:::

## Comportement

- Suppression du dossier `build/` : Tous les fichiers générés lors de la commande `fastpack build` seront supprimés.
- Cette commande ne touche pas aux fichiers source, comme ceux dans le dossier `docs/`.

## Utilisation recommandée

- Après plusieurs builds pour s'assurer que les fichiers obsolètes ou temporaires sont supprimés.

- Lors de l'intégration de nouvelles modifications dans la structure des fichiers ou des configurations.

- Avant de lancer un nouveau build pour garantir que les anciens fichiers ne perturbent pas le processus.
