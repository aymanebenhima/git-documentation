# Qu'est-ce que Git ?

Git est un système de gestion de versions très populaire. Il a été créé par Linus Torvalds en 2005 et est maintenu depuis par Junio Hamano.

Git est utilisé pour :

- Suivre les modifications du code
- Identifier qui a effectué des changements
- Faciliter la collaboration sur le code

## Que fait Git ?

Git permet de :

- Gérer des projets à l'aide de **dépôts (repositories)**
- **Cloner** un projet pour travailler sur une copie locale
- **Contrôler et suivre les modifications** avec la mise en scène (*staging*) et la validation (*committing*)
- **Créer des branches et fusionner** (*merge*) pour travailler sur différentes parties et versions d'un projet
- **Récupérer la dernière version** d'un projet avec *pull*
- **Envoyer des mises à jour locales** vers le projet principal avec *push*

## Travailler avec Git

1. **Initialiser un dépôt Git** dans un dossier avec `git init`
2. Git crée alors un dossier caché `.git` qui suivra les changements
3. Lorsqu'un fichier est **modifié, ajouté ou supprimé**, il est marqué comme "modifié"
4. Les fichiers modifiés peuvent être ajoutés à la zone de **mise en scène** (*staging*)
5. Une fois mis en scène, les fichiers sont **validés** (*committed*), ce qui enregistre un instantané permanent
6. Git permet d'afficher **l'historique complet** de toutes les validations
7. Il est possible de **revenir à une version précédente** grâce à l'historique des commits
8. Git ne stocke pas une copie complète de chaque fichier à chaque commit, mais enregistre uniquement les différences (*diffs*)

## Plateformes compatibles

Git peut être utilisé avec plusieurs plateformes d'hébergement de code, notamment :

- [GitHub](https://github.com/) 🔄
- [Bitbucket](https://bitbucket.org/) 🔄
- [GitLab](https://gitlab.com/) 🔄

## Pourquoi utiliser Git ?

✅ Plus de **70 % des développeurs** utilisent Git 📊
✅ Collaboration facilitée entre développeurs, **où qu'ils soient** dans le monde 🌍
✅ Historique complet des modifications 🔍
✅ Possibilité de **revenir à une version précédente** sans perte de données 🔄

---

# Qu'est-ce que GitHub ?

💡 **Git et GitHub ne sont pas la même chose !**

- GitHub fournit des outils qui utilisent Git 📂
- GitHub est la **plus grande plateforme d'hébergement de code** au monde 🌎
- GitHub appartient à **Microsoft depuis 2018** 🏢

Dans ce guide, nous nous concentrerons sur l'utilisation de Git avec GitHub 🚀

