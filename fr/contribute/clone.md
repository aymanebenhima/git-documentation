# Cloner un dépôt depuis GitHub

## Cloner un Fork depuis GitHub

Nous avons maintenant notre propre fork, mais il est uniquement sur GitHub. Nous voulons également avoir une copie locale pour continuer à travailler dessus.

### Qu'est-ce qu'un clone ?

Un clone est une copie complète d'un dépôt, y compris tous les journaux et versions des fichiers.

1. **Retourner au dépôt d'origine** et cliquez sur le bouton vert "Code" pour obtenir l'URL pour le clonage :

   ![URL de clonage GitHub](https://example.com/clone-url.png)

2. **Ouvrir votre terminal Git** (par exemple Git Bash) et exécuter la commande pour cloner le dépôt :

   ```bash
   git clone https://github.com/w3schools-test/w3schools-test.github.io.git
   ```

   Exemple de sortie :

   ```bash
   Cloning into 'w3schools-test.github.io'...
   remote: Enumerating objects: 33, done.
   remote: Counting objects: 100% (33/33), done.
   remote: Compressing objects: 100% (15/15), done.
   remote: Total 33 (delta 18), reused 33 (delta 18), pack-reused 0
   Receiving objects: 100% (33/33), 94.79 KiB | 3.16 MiB/s, done.
   Resolving deltas: 100% (18/18), done.
   ```

3. Allez dans votre système de fichiers et vous verrez un nouveau répertoire portant le nom du projet cloné :

   ```bash
   ls
   w3schools-test.github.io/
   ```

### Cloner dans un dossier spécifique

Si vous souhaitez spécifier un dossier particulier pour le clonage, vous pouvez ajouter le nom du dossier après l'URL du dépôt, comme ceci :

```bash
git clone https://github.com/w3schools-test/w3schools-test.github.io.git monDossier
```

4. **Naviguez vers le nouveau répertoire cloné** et vérifiez son état avec la commande suivante :

   ```bash
   cd w3schools-test.github.io
   git status
   ```

   Exemple de sortie :

   ```bash
   Sur la branche master
   Votre branche est à jour avec 'origin/master'.
   
   Rien à valider, répertoire de travail propre
   ```

5. **Vérifiez l'historique des commits** pour confirmer que nous avons bien récupéré toutes les données du dépôt complet :

   ```bash
   git log
   ```

   Exemple de sortie :

   ```bash
   commit facaeae8fd87dcb63629f108f401aa9c3614d4e6 (HEAD -> master, origin/master, origin/HEAD)
   Merge: e7de78f 5a04b6f
   Auteur: w3schools-test
   Date:   Fri Mar 26 15:44:10 2021 +0100
   
       Merge branch 'master' of https://github.com/w3schools-test/hello-world
   ```

Nous avons maintenant une copie complète du dépôt original.

## Configurer les Remotes

Nous avons maintenant une copie complète du dépôt, mais l'origine (le dépôt d'origine) ne nous permet pas de faire des modifications.

Voyons comment les remotes sont configurées dans ce Git.

### Vérification des remotes

Exécutez la commande suivante pour voir les remotes actuelles :

```bash
git remote -v
```

Exemple de sortie :

```bash
origin  https://github.com/w3schools-test/w3schools-test.github.io.git (fetch)
origin  https://github.com/w3schools-test/w3schools-test.github.io.git (push)
```

L'origine est configurée pour pointer vers le dépôt "w3schools-test" d'origine. Nous allons maintenant ajouter notre propre fork comme remote.

### Renommer l'original remote

Renommer l'origine pour éviter toute confusion :

```bash
git remote rename origin upstream
```

Vérifiez les remotes après le changement :

```bash
git remote -v
```

Exemple de sortie :

```bash
upstream        https://github.com/w3schools-test/w3schools-test.github.io.git (fetch)
upstream        https://github.com/w3schools-test/w3schools-test.github.io.git (push)
```

### Ajouter notre propre Fork

1. Allez sur GitHub et copiez l'URL de votre fork. Ensuite, ajoutez-la en tant que remote `origin` :

   ```bash
   git remote add origin https://github.com/kaijim/w3schools-test.github.io.git
   ```

2. Vérifiez les remotes après ajout de notre fork :

   ```bash
   git remote -v
   ```

   Exemple de sortie :

   ```bash
   origin  https://github.com/kaijim/w3schools-test.github.io.git (fetch)
   origin  https://github.com/kaijim/w3schools-test.github.io.git (push)
   upstream        https://github.com/w3schools-test/w3schools-test.github.io.git (fetch)
   upstream        https://github.com/w3schools-test/w3schools-test.github.io.git (push)
   ```

### Rappel des conventions de nommage des remotes

Selon les conventions de Git, il est recommandé de nommer votre propre dépôt `origin`, et le dépôt que vous avez forké doit être nommé `upstream`.

### Récapitulatif des remotes

Maintenant, nous avons deux remotes :

- **origin** : notre propre fork, où nous avons un accès en lecture-écriture.
- **upstream** : le dépôt original, où nous avons un accès en lecture seule.

Dans le prochain chapitre, nous verrons comment soumettre des changements au dépôt original.