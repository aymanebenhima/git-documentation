# Git & GitHub : Pratique

## Introduction

Git et GitHub sont des outils essentiels pour la gestion de versions et la collaboration dans le développement logiciel. Ce workshop se concentre sur la gestion des workflows avec Git et GitHub dans le cadre d'un projet agile, avec un accent particulier sur la méthodologie Scrum et la livraison des scénarios dans les délais impartis.

## Objectifs

- Planifier les tâches en suivant la méthodologie Scrum.
- Finaliser les scénarios dans les délais prévus.
- Rédiger un rapport d'activités de groupe détaillé.
- Maîtriser les commandes Git essentielles.
- Explorer la plateforme GitHub pour la gestion des versions.
- Gérer le temps, le stress, et garantir la livraison des livrables.
- Participer aux réunions de fin de scénario.
- Formaliser les processus de travail pour améliorer l'efficacité.

## Contexte

- Se familiariser avec les commandes Git de base.
- Gérer le workflow Git dans un environnement collaboratif.
- Maîtriser le workflow Git/GitHub pour un développement fluide.

## Livrables

1. Un rapport d'activités détaillant les tâches effectuées.
2. Une planification des scénarios sous forme de Product Backlog.
3. Un livrable respectant les délais définis.

## Prérequis

- Git Bash
- Compte GitHub
- Tableau Trello pour la gestion des tâches
- Éditeur de texte VSCode
- P4Merge (outil pour la comparaison des fichiers)

## Mots Clés

- `git ls-files`
- `git config --global --list`
- `git log --oneline --graph --decorate --all`
- `git checkout -b "nom_branche"`
- `ssh-keygen -t rsa -C 'email'`

## Liens Utiles

- [Diff Tools and Helix Merge (P4Merge) | Perforce](https://www.perforce.com)
- [Stack Overflow](https://stackoverflow.com) – Apprenez, partagez, et développez vos compétences.
- [Initializr - Démarrez un projet HTML5 en 15 secondes !](https://initializr.com)
- [Configurer P4Merge comme outil de fusion sous Windows](https://github.com)
- [Git Explorer](https://gitexplorer.com)
- [P4Merge et Git Extensions sur GitHub](https://github.com)

## Scénarios

### Scénario #1

#### Préface
- Le Product Backlog est déjà priorisé. L'objectif est de maintenir les tâches au sein du groupe et de respecter les délais de livraison.
- Un rapport d'activités sous forme de mind mapping est exigé.
- Utilisez Git Bash et les commandes pour ce scénario.

#### Product Backlog

1. **First step: Immersion**
   - Définir Git en quelques mots.
   - Expliquer le fonctionnement du fichier caché `.git`.
   - Créer un répertoire nommé `/projects` sur le bureau.
   - Créer un repository local nommé `/demo`.
   - Expliquer l'utilité des commentaires dans Git.
   - Créer un fichier `README.md` et y ajouter la ligne `# Demo project un simple fichier`.
   - Faire le staging et le commit avec un commentaire approprié.

2. **Second step: Découverte**
   - Explorer les fichiers de configuration `.git`.
   - Taper `ls -al` pour afficher les fichiers cachés.
   - Expliquer les termes suivants : HEAD, LOGS, BRANCHES.
   - Créer un fichier `Licence.md` dans le repository et faire un commit.
   - Afficher les fichiers traqués par Git.

3. **Third step: Historique**
   - Afficher le dernier commit sur une seule ligne en ajoutant l'option pour visualiser la hiérarchie des branches.
   - Créer un alias pour cette commande sous le nom `historique`.
   - Afficher la liste des alias définis dans Git.
   - Afficher l'historique des commits du fichier `README.md` en utilisant l'alias créé.

4. **Fourth step: Exclusion des fichiers**
   - Renommer le fichier `Licence.md` en `Licence.txt`.
   - Faire le staging sans utiliser `git add .`.
   - Créer un fichier `application.log` et l'ignorer.
   - Créer un fichier `.gitignore` et y ajouter `*.log` pour ignorer les fichiers log.
   - Faire le staging et le commit, puis observer le comportement de Git.

5. **Fifth step: Branching and Merging**
   - Modifier le fichier `README.md` sans faire de commit.
   - Créer une branche `updates`, faire le staging et le commit en une seule ligne.
   - Afficher l'historique des commits avec l'alias créé.
   - Revenir à la branche `master`.
   - Effectuer un merge de la branche `updates`.

6. **Sixth step: Résolution de conflits**
   - Créer une branche `BAD`.
   - Modifier le fichier `README.md` et ajouter `Trouble`.
   - Faire le staging et le commit en une seule ligne.
   - Basculer sur la branche `master` et modifier le fichier `README.md` pour ajouter `Troubleshooting`.
   - Résoudre les conflits lors du merge et analyser les messages reçus.

7. **Seventh step: Outils de fusion**
   - Installer P4Merge.
   - Configurer P4Merge comme outil de fusion avec `git config --global`.
   - Utiliser `git mergetool` pour analyser les conflits.

8. **Eighth step: Challenge**
   - Rédiger des clauses dans `.gitignore` pour exclure les fichiers indésirables et redondants.
   - Ne conserver que les fichiers `licence.txt`, `README.md`, et `.gitignore`.

### Scénario #2

#### Préface
Vous avez terminé la phase #1 et êtes prêts à aborder des concepts plus avancés. Le Product Backlog est déjà priorisé.

#### Product Backlog

1. **First step: Tagging**
   - Se déplacer sur la branche principale.
   - Créer un tag `V1.0` avec le commentaire `RELEASE 1.0`.
   - Afficher les informations sur le tag.
   - Discuter de l'utilité des tags dans un workflow Git.

2. **Second step: Stashing et sauvegarde du travail en cours**
   - Modifier le fichier `README.md` et ajouter une ligne.
   - Mettre la tâche en pause avec `git stash`.
   - Expliquer le fonctionnement de `git stash`.
   - Utiliser `git stash list` et `git status`.
   - Ajouter `APACHE 2.0` à `Licence.txt`, faire le staging et le commit en une seule ligne.
   - Exécuter `git stash pop` pour récupérer les modifications stachées.

3. **Third step: Voyage sur GitHub**
   - Créer un compte GitHub.
   - Créer un repository GitHub public sans ajouter `README.md`.
   - Configurer un remote en HTTPS et pousser les changements avec `git push -u origin master --tags`.
   - Expliquer les options `-u` et `--tags`.

4. **Fourth step: Mini challenge (optionnel)**
   - Créer une authentification SSH entre votre repo local et GitHub.

5. **Fifth step: Création d'une copie locale**
   - Créer un repository `Monsiteweb` sur GitHub avec `.gitignore` et `licence.txt`.
   - Cloner le repository sur votre machine locale et vérifier le clone.

6. **Sixth step: Envoi du site web**
   - Télécharger un site web depuis Initializr.
   - Copier le site téléchargé dans le repository local.
   - Faire le staging et le commit en une seule ligne.
   - Pousser les changements à GitHub.

7. **Seventh step: Fetch et Pull**
   - Modifier `Index.html` sur GitHub et faire un commit.
   - Modifier `README.md` localement et effectuer un commit en une seule ligne.
   - Exécuter les commandes `git fetch`, `git status`, `git pull`, et `git push`.
   - Vérifier les commits sur GitHub.
