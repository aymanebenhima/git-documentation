# Fusion de Branches Git

## Fusionner des Branches

Nous avons terminé la correction d'urgence et nous allons fusionner les branches `master` et `emergency-fix`.

### Changement vers la branche master

Avant de fusionner, nous devons nous assurer que nous sommes sur la branche `master` :

```sh
git checkout master
Switched to branch 'master'
```

### Fusion de la branche `emergency-fix`

Ensuite, nous fusionnons `master` avec `emergency-fix` :

```sh
git merge emergency-fix
Updating 09f4acd..dfa79db
Fast-forward
 index.html | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Étant donné que `emergency-fix` provient directement de `master` et qu'aucune autre modification n'a été effectuée sur `master` pendant le travail, Git voit cette fusion comme une simple continuation et effectue un "Fast-forward", pointant `master` et `emergency-fix` vers le même commit.

### Suppression de la branche `emergency-fix`

Comme `master` et `emergency-fix` sont maintenant identiques, nous pouvons supprimer `emergency-fix` :

```sh
git branch -d emergency-fix
Deleted branch emergency-fix (was dfa79db).
```

## Gestion des Conflits de Fusion

Nous allons maintenant nous déplacer vers la branche `hello-world-images` et continuer à travailler en ajoutant une nouvelle image `img_hello_git.jpg` et en modifiant `index.html`.

### Changement vers la branche `hello-world-images`

```sh
git checkout hello-world-images
Switched to branch 'hello-world-images'
```

### Modification de `index.html`

```html
<!DOCTYPE html>
<html>
<head>
<title>Git docs</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>Hello world!</h1>
<div><img src="img_hello_world.jpg" alt="Hello World from Space" style="width:100%;max-width:960px"></div>
<p>Ceci est le premier fichier de mon dépôt Git.</p>
<p>Une nouvelle ligne dans notre fichier !</p>
<div><img src="img_hello_git.jpg" alt="Hello Git" style="width:100%;max-width:640px"></div>

</body>
</html>
```

### Ajout et validation des modifications

```sh
git add --all
git commit -m "ajout d'une nouvelle image"
[hello-world-images 1f1584e] ajout d'une nouvelle image
 2 files changed, 1 insertion(+)
 create mode 100644 img_hello_git.jpg
```

Maintenant, nous allons fusionner `hello-world-images` dans `master`, mais un conflit pourrait survenir.

### Fusion de `hello-world-images` dans `master`

```sh
git checkout master
git merge hello-world-images
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Un conflit est détecté dans `index.html`. Vérifions l'état du dépôt :

```sh
git status
```

Git indique que `index.html` a des conflits, mais que les fichiers d'image sont prêts à être validés.

### Résolution du conflit

En ouvrant `index.html`, nous voyons :

```html
<p>Ceci est le premier fichier de mon dépôt Git.</p>
<<<<<<< HEAD
<p>Cette ligne est ici pour montrer comment fonctionne la fusion.</p>
=======
<p>Une nouvelle ligne dans notre fichier !</p>
<div><img src="img_hello_git.jpg" alt="Hello Git" style="width:100%;max-width:640px"></div>
>>>>>>> hello-world-images
```

Nous devons choisir la version finale :

```html
<p>Ceci est le premier fichier de mon dépôt Git.</p>
<p>Cette ligne est ici pour montrer comment fonctionne la fusion.</p>
<div><img src="img_hello_git.jpg" alt="Hello Git" style="width:100%;max-width:640px"></div>
```

### Validation de la fusion

```sh
git add index.html
git commit -m "fusion avec hello-world-images après résolution des conflits"
```

### Suppression de la branche `hello-world-images`

```sh
git branch -d hello-world-images
Deleted branch hello-world-images (was 1f1584e).
```

Maintenant, vous comprenez mieux le fonctionnement des branches et de la fusion dans Git. Il est temps de commencer à travailler avec un dépôt distant !