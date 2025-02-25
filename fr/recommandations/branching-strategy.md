---
title: Git & GitHub - Stratégie de branches
lang: fr
---

# Git & GitHub - Stratégie de branches

## Introduction
Git est un système de contrôle de version distribué qui permet de suivre les modifications du code source. GitHub est une plateforme qui facilite la collaboration et l'hébergement des dépôts Git à distance.

L'adoption d'une stratégie de branches bien définie est essentielle pour une gestion efficace du code source, en particulier dans un environnement collaboratif.

## Concepts de base de Git
- **Dépôt (Repository)** : Un projet Git contenant l'historique des versions.
- **Commit** : Un enregistrement d'une modification avec un message explicatif.
- **Branch (Branche)** : Une version parallèle du code permettant de travailler sur différentes fonctionnalités.
- **Merge** : Fusionner une branche dans une autre.
- **Pull Request (PR)** : Proposition de fusion d'une branche dans une autre sur GitHub.

## Stratégies de branches
Il existe plusieurs stratégies de gestion des branches. Voici les plus courantes :

### 1. Git Flow
Git Flow est une stratégie qui sépare le développement en plusieurs branches principales :

- `main` : Contient le code stable et en production.
- `develop` : Contient le code en développement avant sa stabilisation.
- `feature/*` : Branches utilisées pour le développement de nouvelles fonctionnalités.
- `release/*` : Préparation d'une nouvelle version stable.
- `hotfix/*` : Corrections urgentes appliquées directement à `main`.

**Workflow typique :**
1. Création d'une branche `feature/nom-feature` à partir de `develop`.
2. Développement et commits sur cette branche.
3. Fusion de la branche `feature/nom-feature` dans `develop`.
4. Lorsqu'une version est prête, une branche `release/x.y.z` est créée à partir de `develop`.
5. Après tests et corrections, la branche `release/x.y.z` est fusionnée dans `main` et `develop`.
6. En cas de bug en production, une branche `hotfix/x.y.z+1` est créée à partir de `main`, corrigée et fusionnée dans `main` et `develop`.

![git flow](https://goo-gy.github.io/static/5e2b0ac473ed6ea7282bb1188dcfea43/90823/git-flow.png)

### 2. GitHub Flow
GitHub Flow est une approche plus simple, basée sur l'intégration continue :

- `main` : Contient toujours le code prêt pour la production.
- `feature/*` : Branches créées pour chaque nouvelle fonctionnalité ou correction de bug.

**Workflow typique :**
1. Création d'une branche `feature/nom-feature` à partir de `main`.
2. Développement et commits sur cette branche.
3. Ouverture d'une Pull Request (PR) pour examiner le code.
4. Une fois validée, la PR est fusionnée dans `main`.
5. Déploiement automatique ou manuel du code fusionné.

### 3. Trunk-Based Development
Approche où les développeurs intègrent fréquemment leurs modifications dans une branche principale (`main` ou `trunk`). Les branches de courte durée sont privilégiées pour éviter la dérive du code.

**Avantages :**
- Déploiement fréquent.
- Moins de complexité dans la gestion des branches.
- Favorise l'intégration continue.

## Bonnes pratiques
- Toujours utiliser des noms de branches clairs (`feature/ajout-login`, `hotfix/correction-bug-123`).
- Effectuer des commits atomiques avec des messages explicites.
- Faire des Pull Requests et demander une revue de code.
- Maintenir `main` toujours stable et prêt pour la production.
- Éviter les branches longues pour faciliter l'intégration continue.

## Conclusion
Adopter une stratégie de branches adaptée à votre projet permet d'améliorer la collaboration et la qualité du code. Selon la taille et les besoins de votre équipe, vous pouvez opter pour **Git Flow** pour des cycles de développement structurés, **GitHub Flow** pour plus de flexibilité, ou **Trunk-Based Development** pour un développement rapide et agile.

---

### Ressources supplémentaires
- [Documentation officielle Git](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Présentation de Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Trunk-Based Development](https://trunkbaseddevelopment.com/)