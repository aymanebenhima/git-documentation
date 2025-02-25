# Git GitHub Flow

## Travailler avec GitHub Flow

Dans cette section, vous apprendrez comment tirer le meilleur parti de l'utilisation de GitHub.

Le **GitHub Flow** est un flux de travail conçu pour bien fonctionner avec Git et GitHub. Il met l'accent sur la gestion des branches et permet aux équipes de tester librement leurs idées et de déployer régulièrement leurs projets.

Le processus du GitHub Flow se déroule comme suit :

1. Créer une nouvelle branche
2. Apporter des modifications et ajouter des commits
3. Ouvrir une Pull Request
4. Effectuer une revue des modifications
5. Déployer les modifications
6. Fusionner les changements dans la branche principale

Vous devez déjà avoir une bonne compréhension de ce fonctionnement grâce aux chapitres précédents. Ce chapitre se concentre sur la façon dont le flux de travail facilite la collaboration.

## Démonstration de git workflow

![git workflow](https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/784839/565740_955421.png)

## Créer une nouvelle branche

Les **branches** sont un concept clé de Git. Elles fonctionnent selon la règle suivante : la branche principale (souvent appelée `master` ou `main`) doit toujours être **déployable**.

Cela signifie que si vous souhaitez tester une nouvelle fonctionnalité ou effectuer une expérience, vous créez une nouvelle branche ! La création de branches vous offre un environnement sécurisé pour apporter des modifications sans affecter la branche principale.

### Bonne pratique :
Lorsque vous créez une nouvelle branche, il est préférable de partir de la branche principale (`master` ou `main`). Assurez-vous que le nom de la branche soit descriptif, afin que toute l'équipe comprenne facilement l'objectif de la branche.

Exemple de nommage de branche :
- `feature/ajout-nouvelle-fonctionnalite`
- `bugfix/correction-texte-erreur`

## Apporter des modifications et ajouter des commits

Une fois la branche créée, vous pouvez commencer à travailler. Ajoutez, modifiez ou supprimez des fichiers. À chaque petite étape importante, vous devez enregistrer vos changements en ajoutant un **commit**.

Les **commits** permettent de suivre l'évolution de votre travail. Chaque commit doit inclure un message clair expliquant ce qui a été modifié et pourquoi.

### Pourquoi les messages de commit sont importants ?
Ils permettent à tous les membres de l'équipe de suivre les changements effectués, et de revenir à un point antérieur si nécessaire.

Exemple de message de commit :
- `Ajout de la fonctionnalité d'authentification utilisateur`
- `Correction du bug lié au calcul du total des commandes`

## Ouvrir une Pull Request

Les **Pull Requests** (PR) sont au cœur de l'utilisation de GitHub. Elles permettent de signaler aux autres membres de l'équipe que vous avez des modifications prêtes à être examinées ou fusionnées dans la branche principale.

Une fois votre branche prête, vous ouvrez une PR. Cela permet aux autres de revoir votre code et de proposer des améliorations, ou de l’accepter pour qu'il soit fusionné avec la branche principale.

### Processus de Pull Request :
1. Ouvrir une PR pour signaler que des changements sont prêts à être examinés.
2. Inclure une description détaillée de ce qui a été fait.
3. Demander à d'autres personnes de vérifier et de donner leur avis.

## Revue des modifications

Lorsque vous ouvrez une PR, il est temps pour les membres ayant accès au projet de réviser les modifications apportées.

Les **Pull Requests** favorisent la collaboration et permettent d’améliorer la qualité du code. C’est à ce moment que des discussions peuvent avoir lieu pour comprendre les choix effectués et proposer des améliorations.

### Amélioration continue :
Si vous recevez des retours sur votre PR, vous pouvez apporter des modifications supplémentaires en ajoutant de nouveaux commits. Ces nouveaux commits seront automatiquement intégrés à la PR pour une nouvelle revue.

Note : GitHub propose une vue unifiée de la PR qui montre les commits et les commentaires associés.

## Déploiement

Une fois la PR revue et approuvée, il est temps de procéder au **déploiement**. Avant de fusionner définitivement dans la branche principale, GitHub permet de déployer à partir de la branche pour effectuer des tests en production.

Cela permet de s'assurer que tout fonctionne correctement avant de finaliser l'intégration des changements dans la branche principale.

### Bonnes pratiques :
- Utiliser des environnements de test dédiés pour déployer les branches avant la fusion.
- Tester minutieusement toutes les fonctionnalités en production avant de valider la fusion.

## Fusionner

Une fois les tests effectués et que tout semble en ordre, vous pouvez fusionner votre branche dans la branche principale.

Les **Pull Requests** permettent de garder une trace de toutes les modifications apportées au code. Grâce à des commentaires et des noms de commits clairs, vous pouvez toujours comprendre les raisons des changements effectués, même après coup.

### Astuce pour la recherche :
Vous pouvez ajouter des mots-clés à votre PR pour faciliter la recherche de changements spécifiques plus tard.

---

### Récapitulatif du processus GitHub Flow :

1. **Créez une branche** pour chaque nouvelle fonctionnalité ou bug.
2. **Faites des commits** régulièrement pour enregistrer vos progrès.
3. **Ouvrez une Pull Request** pour permettre à d’autres de revoir vos modifications.
4. **Revoyez et discutez** des changements avec votre équipe.
5. **Déployez** la branche pour tester les modifications en production.
6. **Fusionnez** la branche dans la branche principale après les tests.

En suivant ces étapes, vous pouvez travailler efficacement avec Git et GitHub tout en garantissant la qualité et la sécurité du code.