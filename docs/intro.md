---
sidebar_position: 1
---

# Introduction

**Fastpack** est un outil de packaging conçu pour automatiser, simplifier et standardiser la préparation de projets web avant déploiement.

Il fournit une suite de commandes pour :

- Initialiser une configuration standard
- Compiler les fichiers source
- Nettoyer les artefacts de build
- Gérer différentes options de configuration

Fastpack est conçu pour être rapide, facile à utiliser, et intégré dans un workflow CI/CD moderne.

```mermaid
graph TD
  %% Utilisation
  A[fastpack init] --> B[Rédaction manuelle des fichiers]
  B --> C[Compilation avec fastpack build]
  C --> D[Nettoyage avec fastpack clean]

  %% Arborescence générée
  A --> S1[📁 docs/]
  S1 --> S2[index.md]
  S1 --> S3[guide.md]

  C --> S4[📁 build/]
  S4 --> S5[index.html]
  S4 --> S6[guide.html]

  D --> X[🗑️ Suppression du dossier build/]

  %% Groupes fonctionnels
  subgraph Étapes d'Utilisation
    A
    B
    C
    D
  end

  subgraph Arborescence des Fichiers
    S1
    S2
    S3
    S4
    S5
    S6
    X
  end
```

## Objectifs

✅ Standardiser les étapes de build  
✅ Réduire la configuration manuelle  
✅ S'adapter à différents types de projets

## Pour qui ?

Développeurs web, intégrateurs, équipes DevOps souhaitant un outil de packaging léger, transparent et scriptable.

---

👉 Commencez par [lire les prérequis](install/prerequisites).
