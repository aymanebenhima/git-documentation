# Fusionner et Récupérer une Branche depuis GitHub

## Récupérer une Branche depuis GitHub

Nous allons continuer à travailler sur notre nouvelle branche en local. Avant cela, nous devons nous assurer que notre code est bien à jour en récupérant les modifications depuis GitHub.

### Mise à Jour du Dépôt Local

Utilisons la commande `git pull` pour télécharger les modifications les plus récentes :

```sh
git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 851 bytes | 9.00 KiB/s, done.
From https://github.com/utilisateur/mon-repo
 * [new branch]      html-skeleton -> origin/html-skeleton
Already up to date.
```

Maintenant, notre branche principale est à jour. Nous pouvons voir qu'une nouvelle branche `html-skeleton` est disponible sur GitHub.

### Vérification de l'État du Dépôt

Effectuons une vérification rapide du statut du dépôt :

```sh
git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

Vérifions quelles sont les branches disponibles en local et sur quelle branche nous travaillons actuellement :

```sh
git branch
* master
```

Nous constatons que la nouvelle branche `html-skeleton` n'est pas encore présente en local. Cependant, nous savons qu'elle est disponible sur GitHub. Pour voir toutes les branches locales et distantes, utilisons l'option `-a` :

```sh
git branch -a
* master
  remotes/origin/html-skeleton
  remotes/origin/master
```

> Remarque : `git branch -r` permet d'afficher uniquement les branches distantes.

Nous voyons que la branche `html-skeleton` est disponible à distance mais pas encore en local. Importons-la :

```sh
git checkout html-skeleton
Switched to a new branch 'html-skeleton'
Branch 'html-skeleton' set up to track remote branch 'html-skeleton' from 'origin'.
```

### Mise à Jour de la Nouvelle Branche

Vérifions si cette branche est bien à jour :

```sh
git pull
Already up to date.
```

Vérifions maintenant les branches disponibles et notre position actuelle :

```sh
git branch
* html-skeleton
  master
```

Nous pouvons maintenant ouvrir notre éditeur de texte préféré et confirmer que les modifications de la branche GitHub ont bien été appliquées.

### Conclusion

Ainsi, nous avons appris à récupérer une branche depuis GitHub et à la mettre à jour en local !
