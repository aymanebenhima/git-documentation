# Git Revert

La commande `git revert` est utilisée lorsque vous souhaitez revenir à un commit précédent en l'ajoutant comme un nouveau commit, tout en préservant l'historique du journal des commits.

## Étape 1 : Trouver le commit précédent

![Trouver le commit précédent](https://www.w3schools.com/git/img_revert_part1.gif)

Avant d'effectuer un revert, nous devons identifier le commit auquel nous voulons revenir.

## Étape 2 : Créer un nouveau commit

![Créer un nouveau commit](https://www.w3schools.com/git/img_revert_part2.gif)

Une fois le commit trouvé, nous l'utilisons pour effectuer un revert et créer un nouveau commit.

### Exemple

Imaginons que nous ayons effectué un commit où nous avons "accidentellement" supprimé un fichier. Voici l'exemple de commit effectué :

```bash
git commit -m "Juste une mise à jour régulière, aucun accident ici..."
```

Cela produit le résultat suivant :

```
[master 16a6f19] Juste une mise à jour régulière, aucun accident ici...
1 fichier modifié, 0 insertions(+), 0 suppressions(-)
mode de suppression 100644 img_hello_git.jpg
```

Nous avons maintenant un commit dans l'historique que nous souhaitons annuler. Utilisons `git revert` pour revenir à ce commit.

## Trouver le commit dans le journal

La première étape consiste à trouver le commit auquel nous voulons revenir. Pour cela, nous devons examiner l'historique des commits en utilisant la commande `git log`.

Pour éviter un affichage trop long du journal, nous pouvons utiliser l'option `--oneline`, qui affiche chaque commit sur une seule ligne, avec :

- Les sept premiers caractères du hash du commit
- Le message du commit

Exemple :

```bash
git log --oneline
```

Cela renvoie un résultat similaire à ceci :

```
52418f7 (HEAD -> master) Juste une mise à jour régulière, aucun accident ici...
9a9add8 (origin/master) Ajout du fichier .gitignore
81912ba Correction d'une faute de frappe
3fdaa5b Fusionner la demande de tirage #1 depuis w3schools-test/update-readme
836e5bf (origin/update-readme, update-readme) Mise à jour du README pour GitHub Branches
...
```

Nous voulons revenir au commit `52418f7`, le dernier commit dans cet exemple.

## Utiliser `git revert` pour annuler le dernier commit

Pour annuler le dernier commit, nous utilisons la commande suivante :

```bash
git revert HEAD --no-edit
```

Cela effectuera un revert du dernier commit et l'ajoutera en tant que nouveau commit sans modifier le message du commit, en utilisant le message par défaut de `revert`.

### Exemple de sortie :

```
[master e56ba1f] Revert "Juste une mise à jour régulière, aucun accident ici..."
Date : Thu Apr 22 10:50:13 2021 +0200
1 fichier modifié, 0 insertions(+), 0 suppressions(-)
mode de création 100644 img_hello_git.jpg
```

### Vérification du journal des commits

Si nous vérifions à nouveau l'historique des commits avec `git log --oneline`, nous voyons maintenant que le revert a bien été effectué :

```bash
git log --oneline
```

Sortie :

```
e56ba1f (HEAD -> master) Revert "Juste une mise à jour régulière, aucun accident ici..."
52418f7 Juste une mise à jour régulière, aucun accident ici...
9a9add8 (origin/master) Ajout du fichier .gitignore
...
```

## Revenir à un commit antérieur

Pour revenir à un commit plus ancien, utilisez la commande suivante :

```bash
git revert HEAD~x
```

Où `x` est le nombre de commits à remonter dans l'historique. Par exemple, `HEAD~1` revient au commit précédent, `HEAD~2` revient à deux commits avant, etc.

---

Dans la page suivante, nous aborderons la commande `git reset`, qui permet de ramener le dépôt à un état antérieur sans créer un nouveau commit.