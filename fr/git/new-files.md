# 📂 Ajouter de nouveaux fichiers avec Git

## 📝 Ajout de fichiers dans un dépôt Git

Félicitations ! 🎉 Vous avez créé votre premier dépôt Git local.  
Mais pour l’instant, il est **vide**.  

Ajoutons des fichiers dans ce dépôt. Vous pouvez :

- **Créer un nouveau fichier** avec votre éditeur de texte préféré.
- **Déplacer un fichier existant** dans votre dossier de projet.

---

## ✍️ Exemple : Création d’un fichier HTML

Nous allons créer un fichier **index.html** simple :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git docs</title>
</head>
<body>

    <h1>Hello World!</h1>
    <p>Ceci est le premier fichier de mon dépôt Git.</p>

</body>
</html>
```
Enregistrez ce fichier sous le nom index.html dans votre dossier de projet.

---

## 📂 Vérifier les fichiers dans le dossier
Revenons maintenant au terminal et listons les fichiers présents dans le répertoire de travail :

```sh
ls
```

Vous devriez voir un fichier index.html apparaître dans la liste.

```sh
index.html
```

Vous pouvez également utiliser la commande `ls -a` pour afficher les fichiers cachés (qui commencent par un point).

La commande **ls** (ou **dir** sous Windows) affiche les fichiers du dossier courant.
Nous voyons bien que **index.html** est présent. ✅

---

🔎 Vérifier l’état du dépôt Git
Vérifions maintenant si ce fichier est suivi par Git :

```sh
git status
```

Résultat :

```sh
On branch master

No commits yet

Untracked files:
  (use "git add ..." to include in what will be committed)
    index.html

nothing added to commit but untracked files present (use "git add" to track)
```

**💡 Explication :**

- Git nous indique que nous sommes sur la branche **master**.
- Il n'y a **aucun commit** pour le moment.
- Le fichier **index.html** est **"Untracked"** (non suivi par Git).

---

## 🔍 Comprendre les états des fichiers dans Git

Un fichier dans un dépôt Git peut être dans **deux états** :

1️⃣ 📌 **Tracked (suivi)**
- Fichiers qui sont suivis par Git et inclus dans l’historique du dépôt.

2️⃣ 🛑 **Untracked (non suivi)**
-Fichiers présents dans le dossier mais que Git **ne suit pas encore**.

Quand vous ajoutez un fichier dans un dépôt vide, il est par défaut **"Untracked"**.
Nous devons donc demander à Git de commencer à le suivre, ce qui se fait en **l’ajoutant à l’environnement de staging**.

📌 **Dans la prochaine section, nous verrons comment ajouter des fichiers à la zone de staging.**