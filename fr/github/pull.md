# Git Pull depuis GitHub

## Se synchroniser avec les modifications à jour

Lorsqu'on travaille en équipe sur un projet, il est essentiel que chacun reste à jour avec les dernières modifications.

À chaque fois que vous commencez à travailler sur un projet, vous devez récupérer les changements les plus récents sur votre copie locale.

Avec Git, vous pouvez faire cela grâce à la commande `git pull`.

La commande `pull` est une combinaison de deux autres commandes :

- `fetch`
- `merge`

Voyons plus en détail comment fonctionnent `fetch`, `merge` et `pull`.

---

## Git Fetch

La commande `fetch` permet de récupérer tout l'historique des modifications d'une branche ou d'un dépôt suivi, sans les fusionner avec votre branche locale.

Ainsi, sur votre dépôt Git local, exécutez `fetch` pour voir ce qui a changé sur GitHub :

### Exemple

```sh
git fetch origin
```

Sortie :

```
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 733 bytes | 3.00 KiB/s, done.
From https://github.com/w3schools-test/hello-world
   e0b6038..d29d69f  master     -> origin/master
```

Maintenant que nous avons récupéré les modifications récentes, vérifions notre statut Git :

### Exemple

```sh
git status
```

Sortie :

```
On branch master
Your branch is behind 'origin/master' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean
```

Notre branche locale est en retard d'un commit par rapport à `origin/master`. Vérifions les changements apportés avec `git log` :

### Exemple

```sh
git log origin/master
```

Sortie :

```
commit d29d69ffe2ee9e6df6fa0d313bb0592b50f3b853 (origin/master)
Author: w3schools-test <77673807+w3schools-test@users.noreply.github.com>
Date:   Fri Mar 26 14:59:14 2021 +0100

    Updated README.md with a line about GitHub
```

Nous pouvons également comparer notre branche locale avec `origin/master` :

### Exemple

```sh
git diff origin/master
```

Sortie :

```
diff --git a/README.md b/README.md
index 23a0122..a980c39 100644
--- a/README.md
+++ b/README.md
@@ -2,6 +2,4 @@
 Hello World repository for Git tutorial
 This is an example repository for the Git tutorial on https://www.w3schools.com

-This repository is built step by step in the tutorial.
-
-It now includes steps for GitHub
+This repository is built step by step in the tutorial.
\ No newline at end of file
```

Les changements sont bien ceux attendus ! Nous pouvons maintenant fusionner les modifications.

---

## Git Merge

La commande `merge` permet de combiner la branche actuelle avec une autre branche spécifique.

Nous avons confirmé que les mises à jour sont correctes. Nous pouvons maintenant fusionner notre branche locale `master` avec `origin/master` :

### Exemple

```sh
git merge origin/master
```

Sortie :

```
Updating e0b6038..d29d69f
Fast-forward
 README.md | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)
```

Vérifions à nouveau notre statut :

### Exemple

```sh
git status
```

Sortie :

```
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

Notre dépôt local est maintenant à jour !

---

## Git Pull

Mais que faire si vous voulez simplement mettre à jour votre dépôt local sans passer par toutes ces étapes ?

La commande `pull` est une combinaison de `fetch` et `merge`. Elle permet de récupérer toutes les modifications d'un dépôt distant et de les fusionner automatiquement dans votre branche en cours.

Ajoutez une nouvelle modification au fichier `README.md` sur GitHub.

Puis, utilisez `pull` pour mettre à jour votre Git local :

### Exemple

```sh
git pull origin
```

Sortie :

```
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 794 bytes | 1024 bytes/s, done.
From https://github.com/w3schools-test/hello-world
   a7cdd4b..ab6b4ed  master       -> origin/master
Updating a7cdd4b..ab6b4ed
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
```

C'est ainsi que vous pouvez garder votre dépôt Git local synchronisé avec un dépôt distant ! 🚀

Dans le prochain chapitre, nous verrons en détail comment utiliser `git push` pour envoyer vos modifications sur GitHub.

