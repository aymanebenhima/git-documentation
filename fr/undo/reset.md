# Git Reset

La commande `git reset` est utilisée lorsque nous voulons revenir à un commit précédent, en supprimant toutes les modifications effectuées après ce commit.

## Étape 1 : Trouver le commit précédent

![Trouver le commit précédent](https://www.w3schools.com/git/img_reset_part1.gif)

## Étape 2 : Revenir à ce commit

![Revenir à ce commit](https://www.w3schools.com/git/img_reset_part2.gif)

Après le chapitre précédent, nous avons une partie de notre historique de commits à laquelle nous pourrions revenir. Essayons cela avec la commande `reset`.

## Trouver un commit dans le log

La première chose à faire est de trouver le point auquel nous voulons revenir. Pour cela, nous devons parcourir le log.

Pour éviter une liste de logs trop longue, nous allons utiliser l'option `--oneline`, qui affiche une seule ligne par commit, montrant :

- Les sept premiers caractères du hash du commit — c'est ce que nous devons utiliser dans notre commande `reset`.
- Le message du commit.

Ainsi, nous allons trouver le commit auquel nous voulons revenir :

### Exemple de log

```bash
git log --oneline
e56ba1f (HEAD -> master) Revert "Just a regular update, definitely no accidents here..."
52418f7 Just a regular update, definitely no accidents here...
9a9add8 (origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
836e5bf (origin/update-readme, update-readme) Updated readme for GitHub Branches
daf4f7c (origin/html-skeleton, html-skeleton) Updated index.html with basic meta
facaeae (gh-page/master) Merge branch 'master' of https://github.com/w3schools-test/hello-world
e7de78f Updated index.html. Resized image
5a04b6f Updated README.md with a line about focus
d29d69f Updated README.md with a line about GitHub
e0b6038 merged with hello-world-images after fixing conflicts
1f1584e added new image
dfa79db updated index.html with emergency fix
0312c55 Added image to Hello World
09f4acd Updated index.html with a new line
221ec6e First release of Hello World!
```

Nous souhaitons revenir au commit : `9a9add8` (origin/master) `Added .gitignore`, le dernier avant que nous commencions à modifier les choses.

## Utiliser Git Reset

Nous réinitialisons notre dépôt au commit spécifique en utilisant la commande `git reset` suivie du hash du commit (les sept premiers caractères du commit que nous avons trouvé dans le log) :

### Exemple

```bash
git reset 9a9add8
```

Maintenant, vérifions à nouveau le log :

### Exemple de log après reset

```bash
git log --oneline
9a9add8 (HEAD -> master, origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
836e5bf (origin/update-readme, update-readme) Updated readme for GitHub Branches
daf4f7c (origin/html-skeleton, html-skeleton) Updated index.html with basic meta
facaeae (gh-page/master) Merge branch 'master' of https://github.com/w3schools-test/hello-world
e7de78f Updated index.html. Resized image
5a04b6f Updated README.md with a line about focus
d29d69f Updated README.md with a line about GitHub
e0b6038 merged with hello-world-images after fixing conflicts
1f1584e added new image
dfa79db updated index.html with emergency fix
0312c55 Added image to Hello World
09f4acd Updated index.html with a new line
221ec6e First release of Hello World!
```

## Attention

Modifier l'historique des commits d'un dépôt peut être dangereux. Il est généralement sûr de faire ce genre de modifications sur votre propre dépôt local. Cependant, il est recommandé d'éviter de réécrire l'historique des dépôts distants, surtout si d'autres personnes travaillent avec eux.

## Annuler un reset

Bien que les commits ne s'affichent plus dans le log, ils ne sont pas réellement supprimés de Git.

Si vous connaissez le hash du commit, vous pouvez revenir à celui-ci en réinitialisant à ce commit :

### Exemple

```bash
git reset e56ba1f
```

Maintenant, vérifions à nouveau le log :

### Exemple de log après un reset supplémentaire

```bash
git log --oneline
e56ba1f (HEAD -> master) Revert "Just a regular update, definitely no accidents here..."
52418f7 Just a regular update, definitely no accidents here...
9a9add8 (origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
836e5bf (origin/update-readme, update-readme) Updated readme for GitHub Branches
daf4f7c (origin/html-skeleton, html-skeleton) Updated index.html with basic meta
facaeae (gh-page/master) Merge branch 'master' of https://github.com/w3schools-test/hello-world
e7de78f Updated index.html. Resized image
5a04b6f Updated README.md with a line about focus
d29d69f Updated README.md with a line about GitHub
e0b6038 merged with hello-world-images after fixing conflicts
1f1584e added new image
dfa79db updated index.html with emergency fix
0312c55 Added image to Hello World
09f4acd Updated index.html with a new line
221ec6e First release of Hello World!
```

Cela vous permet de revenir à un commit précédent, même après avoir effectué un reset.
