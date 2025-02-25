# 🚀 Démarrer avec Git

## 📥 Installer Git

Vous pouvez télécharger Git gratuitement depuis le site officiel :  
🔗 [Git - Download](https://www.git-scm.com/)

## 🖥️ Utiliser Git avec la ligne de commande

Pour commencer à utiliser Git, ouvrons un terminal :

- **Windows** : utilisez **Git Bash**, inclus dans Git pour Windows.
- **Mac & Linux** : utilisez le terminal intégré.

### 📌 Vérifier l'installation de Git

Avant de commencer, vérifions que Git est bien installé :

```sh
git --version
```

Si Git est installé, il affichera une version comme :

```sh
git version 2.37.3
```

Si Git n'est pas installé, vous pouvez l'installer en suivant les instructions ci-dessous :

- Windows : [Git - Download](https://git-scm.com/download/win)
- Mac : [Git - Download](https://git-scm.com/download/mac)
- Linux : [Git - Download](https://git-scm.com/download/linux)

<!-- ## 📂 Créer un dépôt Git

Git est un système de gestion de versions qui permet de suivre les modifications d'un projet. -->

## ⚙️ Configurer Git
Avant de commencer à utiliser Git, nous devons lui dire qui nous sommes.
Cela est important pour le suivi des modifications.

Exécutez les commandes suivantes en remplaçant les valeurs par vos informations personnelles :

```sh
git config --global user.name "VotreNom"
git config --global user.email "votre-email@example.com"
```

### Remarque :
L'option --global définit ces informations pour **tous les projets Git** sur votre ordinateur.
Si vous souhaitez définir ces informations uniquement pour un projet spécifique, utilisez :

```sh
git config user.name "VotreNom"
git config user.email "votre-email@example.com"
```

Vous pouvez vérifier la configuration actuelle avec :

```sh
git config --list
```

## 📁 Créer un dossier de projet
Créons maintenant un dossier pour notre projet Git :

```sh
mkdir mon-projet
cd mon-projet
```

- **mkdir** permet de créer un dossier.
- **cd** permet de changer de dossier.

Si vous avez déjà un projet existant, ouvrez son dossier dans votre explorateur de fichiers et **faites un clic droit > Git Bash here** (sur Windows).

## 🏗️ Initialiser Git dans un projet
Une fois dans le bon dossier, nous pouvons initialiser Git :

```sh
git init
```	

Vous devriez voir un message similaire à :

```sh
Initialized empty Git repository in /Users/utilisateur/mon-projet/.git/
```

🎉 Félicitations ! Vous venez de créer votre premier dépôt Git !
Un dossier caché **.git** a été créé dans le dossier du projet.