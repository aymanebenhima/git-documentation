# 🗂️ L'environnement de staging dans Git

## 📌 Qu'est-ce que l'environnement de staging ?  

Une des fonctionnalités clés de Git est l’utilisation de **l’environnement de staging** et des **commits**.  

### 🚀 Pourquoi utiliser le staging ?
Lorsque vous travaillez sur un projet, vous **ajoutez, modifiez et supprimez** des fichiers.  
Cependant, avant d’enregistrer ces modifications dans le dépôt, vous devez les ajouter à un **environnement de staging**.  

Un fichier **staged** signifie qu’il est prêt à être **commit** (enregistré dans l'historique du dépôt).  
Nous verrons plus tard en détail ce qu’est un commit.

---

## 📂 Ajouter un fichier à l’environnement de staging  

Nous avons terminé de travailler sur `index.html`, nous allons donc l’ajouter à l’environnement de staging :  

```sh
git add index.html
```

Vérifions maintenant le statut du dépôt :

```sh
git status
```

```sh
On branch master

No commits yet

Changes to be committed:
  (use "git restore --staged <file>..." to unstage) or (use "git add/rm <file>...")
	new file:   index.html
```

Vous pouvez voir que le fichier **index.html** est prêt à être **commit** et est donc **staged**.

---

🔹 Ajouter plusieurs fichiers en même temps
Nous pouvons également stager plusieurs fichiers en une seule commande.

Ajoutons deux nouveaux fichiers dans notre dossier de projet :

1️⃣ Ajout d’un fichier README.md (recommandé pour tous les dépôts)
Créez un fichier README.md et ajoutez-y une description du projet :

```md
# hello-world
Hello World - Dépôt Git pour le tutoriel

Ceci est un exemple de dépôt Git pour le tutoriel.
```

2️⃣ **Ajout d’un fichier LICENSE.md et d'une feuille de style CSS styles.css**
Créez un fichier LICENSE.md et ajoutez-y une licence :

```md
MIT License

Copyright (c) 2025 Aymane Benhima
```

Créez un fichier styles.css et ajoutez-y du CSS :

```css
body {
  background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
```

Ajoutons ces deux fichiers à l’environnement de staging :

```sh
git add README.md LICENSE.md styles.css
```

Vérifions le statut du dépôt :

```sh
git status
```

```sh
On branch master

No commits yet

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   LICENSE.md

```

Vous pouvez voir que les deux fichiers **README.md** et **LICENSE.md** sont prêts à être **commit** et sont donc **staged**.

---

3️⃣ **Mise à jour de index.html pour inclure la feuille de style**
Modifiez index.html pour ajouter styles.css :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git docs</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Hello World!</h1>
    <p>Ceci est le premier fichier de mon dépôt Git.</p>

</body>
</html>
```

### 📌 Ajouter tous les fichiers d’un coup

Plutôt que d’ajouter chaque fichier un par un, nous pouvons ajouter tous les fichiers du dossier en une seule commande :

```sh
git add --all
```

**💡 Explication :**

- **git add --all** ajoute **toutes les modifications** (nouveaux fichiers, fichiers modifiés et fichiers supprimés) à l’environnement de staging.
- L’équivalent abrégé est **git add -A**.

Vérifions le statut du dépôt après cette commande :

```sh
git status
```

Resultat :

```sh
On branch master

No commits yet

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   README.md
	new file:   LICENSE.md
	new file:   styles.css
```

Vous pouvez voir que les trois fichiers **README.md**, **LICENSE.md** et **styles.css** sont prêts à être **commit** et sont donc **staged**.

---
## 📌 Supprimer un fichier de l’environnement de staging

Si vous avez ajouté un fichier à l’environnement de staging, mais que vous ne souhaitez pas le commiter, vous pouvez le supprimer en utilisant la commande `git reset`.


