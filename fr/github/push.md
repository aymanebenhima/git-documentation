# Pousser des Modifications vers GitHub

Dans cette section, nous allons voir comment apporter des modifications à un dépôt Git local et les pousser sur GitHub.

## Exemple de Modification

Créons un fichier HTML simple et modifions-le.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
    <link rel="stylesheet" href="bluestyle.css">
</head>
<body>

    <h1>Hello world!</h1>
    <div>
        <img src="img_hello_world.jpg" alt="Hello World depuis l'espace" style="width:100%; max-width:960px;">
    </div>
    <p>Ceci est le premier fichier de mon nouveau dépôt Git.</p>
    <p>Ajout d'une nouvelle ligne dans notre fichier !</p>
    <div>
        <img src="img_hello_git.jpg" alt="Hello Git" style="width:100%; max-width:640px;">
    </div>

</body>
</html>
```

## Validation des Modifications
Une fois notre fichier modifié, nous devons valider les changements avec une commande git commit.

```sh
git commit -a -m "Mise à jour de index.html : redimensionnement de l'image"
```

Sortie attendue :

```sh
[master e7de78f] Mise à jour de index.html : redimensionnement de l'image
 1 file changed, 1 insertion(+), 1 deletion(-)
```

## Vérification du Statut
Avant d'envoyer nos modifications sur GitHub, nous pouvons vérifier l’état du dépôt avec :

```sh
git status
```

Sortie attendue :

```sh
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

##Envoi des Modifications vers GitHub
Nous pouvons maintenant pousser nos modifications vers le dépôt distant sur GitHub.

```sh
git push origin
```

Sortie attendue :

```sh
Enumerating objects: 9, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 16 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 578 bytes | 578.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/utilisateur/mon-projet.git
   5a04b6f..facaeae  master -> master
```

## Vérification sur GitHub
Une fois l'opération terminée, rendez-vous sur votre dépôt GitHub et vérifiez que le commit apparaît bien dans l'historique.
---
Dans la prochaine section, nous aborderons la gestion des branches sur GitHub.