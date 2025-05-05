---
id: faq
title: FAQ
---

## 1. Qu'est-ce que Fastpack ?

**Fastpack** est un outil de packaging pour les projets web qui automatise, simplifie et standardise le processus de préparation des fichiers avant déploiement. Il permet de gérer efficacement les étapes de génération de build, de nettoyage des fichiers inutiles et de structuration de l'output de manière optimale pour la production.

## 2. Pourquoi utiliser Fastpack ?

Utiliser **Fastpack** permet de gagner du temps lors du processus de déploiement. L'outil prend en charge plusieurs étapes clés, comme :

- La compilation des fichiers source (par exemple, fichiers CSS, JavaScript, images).
- Le nettoyage des fichiers obsolètes et inutiles.
- La gestion des versions du projet.

Cela garantit une distribution propre et optimisée de votre projet à chaque déploiement.

## 3. Comment installer Fastpack ?

Pour installer **Fastpack** dans ton projet, il te suffit de l'ajouter en tant que dépendance de développement via npm ou yarn :

```bash
npm install fastpack --save-dev
# ou
yarn add fastpack --dev
```

Après l'installation, tu peux initialiser ton projet avec la commande suivante :

```bash
npx fastpack init
```

Cela crée un fichier de configuration de base pour ton projet.

## 4. Quelles étapes sont automatisées par Fastpack ?

Fastpack couvre les étapes suivantes :

- Compilation : Compile ton code source (JavaScript, CSS, etc.) en une version optimisée pour la production.

- Nettoyage : Supprime les fichiers générés lors des builds précédents pour éviter les conflits et garantir que seuls les fichiers nécessaires soient inclus dans le déploiement.

- Génération du build : Crée une version prête à être déployée dans un répertoire de production (par défaut `build/`).

- Gestion des versions : Permet de définir et de gérer des versions spécifiques du projet afin de suivre les changements au fil du temps.

## 5. Comment configurer Fastpack pour nettoyer les fichiers précédents avant un build ?

Pour garantir qu'aucun fichier inutile ne reste dans le dossier de production, tu peux activer l'option de nettoyage automatique dans le fichier `fastpack.config.js` :

```js
module.exports = {
  cleanBeforeBuild: true,
};
```

Cette option supprime les fichiers générés précédemment dans le dossier de build avant d'exécuter un nouveau build.

## 6. Comment personnaliser le processus de build ?

**Fastpack** permet de personnaliser le processus de build en modifiant le fichier `fastpack.config.js`. Par exemple, tu peux spécifier des dossiers supplémentaires à inclure ou configurer des options spécifiques pour le traitement des fichiers JavaScript ou CSS.

Voici un exemple de configuration pour spécifier les options de compilation :

```js
module.exports = {
  build: {
    js: {
      minify: true,
    },
    css: {
      autoprefix: true,
    },
  },
};
```

## 7. Fastpack supporte-t-il la gestion des versions ?

Oui, **Fastpack** permet de gérer les versions de ton projet, ce qui est particulièrement utile pour suivre les changements entre différentes versions de ton projet avant le déploiement.

Tu peux définir un numéro de version spécifique dans le fichier de configuration et utiliser cette version dans le processus de build.

Exemple de configuration de version :

```js
module.exports = {
  version: '1.0.0',
};
```

## 8. Est-ce possible d'intégrer Fastpack avec d'autres outils ?

Oui, **Fastpack** peut être intégré avec d'autres outils de build comme Webpack, Babel, ou encore des outils de gestion de version comme Git. L'objectif est de centraliser et d'automatiser les tâches pour faciliter le déploiement tout en gardant la flexibilité d'intégrer des outils tiers.

## 9. Où puis-je signaler un problème avec Fastpack ?

Si tu rencontres un problème, n'hésite pas à ouvrir une issue sur le [dépôt GitHub de Fastpack](https://github.com/VictorDvs/Fastpack). La communauté et les contributeurs pourront t'aider à résoudre le problème.
