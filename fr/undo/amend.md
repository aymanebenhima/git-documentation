# Git Commit --amend

La commande `git commit --amend` est utilisée pour modifier le commit le plus récent. Elle permet de combiner les changements dans l'environnement de staging avec le dernier commit et de créer un nouveau commit. Ce dernier remplace complètement le commit précédent.

## Modifier le Message du Commit

L'une des choses les plus simples que vous pouvez faire avec `--amend` est de modifier le message du commit. Par exemple, si vous avez fait une erreur dans le message de commit, vous pouvez facilement le corriger.

### Exemple :

Disons que vous avez mis à jour le fichier `README.md` et que vous avez commis vos changements avec un message erroné :

```bash
git commit -m "Adding plines to reddme"
```

Cela génère un commit comme suit :

```
[master 07c5bc5] Adding plines to reddme
 1 file changed, 3 insertions(+), 1 deletion(-)
```

Ensuite, vous pouvez vérifier l'historique des commits avec la commande suivante :

```bash
git log --oneline
```

Cela pourrait donner quelque chose comme :

```
07c5bc5 (HEAD -> master) Adding plines to reddme
9a9add8 (origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
...
```

### Correction du Message de Commit

Oh non ! Le message du commit contient des erreurs de frappe. Pas de panique, nous allons le corriger en utilisant la commande `--amend` :

```bash
git commit --amend -m "Added lines to README.md"
```

Le commit est alors modifié :

```
[master eaa69ce] Added lines to README.md
 Date: Thu Apr 22 12:18:52 2021 +0200
 1 file changed, 3 insertions(+), 1 deletion(-)
```

Vérifiez à nouveau l'historique des commits :

```bash
git log --oneline
```

Cela pourrait ressembler à ceci :

```
eaa69ce (HEAD -> master) Added lines to README.md
9a9add8 (origin/master) Added .gitignore
81912ba Corrected spelling error
3fdaa5b Merge pull request #1 from w3schools-test/update-readme
...
```

Vous remarquerez que le commit précédent a été remplacé par notre nouveau commit corrigé !

## Avertissement

Attention : Modifier l'historique des commits d'un dépôt peut être dangereux. Il est généralement acceptable de faire ce genre de modification dans votre propre dépôt local. Cependant, vous devez éviter de réécrire l'historique des dépôts distants, surtout si d'autres personnes travaillent avec eux.

## Ajouter des Fichiers avec `--amend`

Ajouter des fichiers avec `--amend` fonctionne de la même manière que les exemples précédents. Il vous suffit d'ajouter les fichiers à l'environnement de staging avant de les commettre.

### Exemple d'ajout de fichiers avant de faire un amendement :

1. Ajoutez un fichier modifié à l'index de staging :

```bash
git add fichier_modifie.txt
```

2. Amendez ensuite le commit :

```bash
git commit --amend
```

Cela ajoutera les modifications du fichier `fichier_modifie.txt` au commit précédent.

```
[master abc1234] Updated README.md and added new file
 2 files changed, 10 insertions(+), 1 deletion(-)
```
```

N'oubliez pas de prendre des précautions lorsque vous modifiez l'historique des commits, surtout si vous travaillez avec un dépôt partagé.