# Héberger votre page sur GitHub avec GitHub Pages

GitHub Pages vous permet d'héberger une page web directement depuis votre dépôt GitHub. Dans ce guide, nous allons apprendre à utiliser GitHub Pages pour héberger votre propre dépôt.

## 1. Créer un Nouveau Dépôt

Commencez par vous connecter à votre compte GitHub. Pour que GitHub Pages fonctionne, le dépôt doit suivre une structure de nommage et de configuration spécifiques. Nous commencerons par créer un nouveau dépôt :

![Créer un nouveau dépôt GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Nom de votre Dépôt GitHub Pages

Le nom de votre dépôt doit être spécifique pour que GitHub Pages fonctionne correctement. Le nom du dépôt doit être votre nom d'utilisateur GitHub, suivi de `.github.io`. Par exemple, si votre nom d'utilisateur GitHub est `monutilisateur`, le nom du dépôt doit être `monutilisateur.github.io`.

## 2. Ajouter le Dépôt Local à GitHub Pages

Ajoutez ce nouveau dépôt comme un dépôt distant pour votre dépôt local. Nous allons l'appeler `gh-page` (pour GitHub Pages).

1. Copiez l'URL de votre dépôt GitHub :

   ![Copier l'URL du dépôt GitHub](https://help.github.com/assets/images/help/repository/repo-url.png)

2. Ajoutez-le comme un nouveau dépôt distant :

```bash
git remote add gh-page https://github.com/monutilisateur/monutilisateur.github.io.git
```

Assurez-vous que vous êtes sur la branche `master`, puis poussez la branche `master` vers ce nouveau dépôt distant :

```bash
git push gh-page master
```

Vous verrez des messages indiquant que les objets sont compressés et envoyés sur le dépôt distant.

**Exemple de sortie :**

```bash
Enumerating objects: 33, done.
Counting objects: 100% (33/33), done.
Delta compression using up to 16 threads
Compressing objects: 100% (33/33), done.
Writing objects: 100% (33/33), 94.79 KiB | 15.80 MiB/s, done.
Total 33 (delta 18), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (18/18), done.
To https://github.com/monutilisateur/monutilisateur.github.io.git
 * [new branch]      master -> master
```

Si c'est la première fois que vous vous connectez à GitHub, vous recevrez une notification pour authentifier cette connexion.

## 3. Vérifier que le Dépôt GitHub a Reçu Tous les Fichiers

Une fois le dépôt `gh-page` configuré et que vous avez poussé vos fichiers, vous pouvez vérifier que tout est présent en consultant votre dépôt sur GitHub.

## 4. Visualiser Votre Page GitHub

Maintenant que tout est configuré, cliquez sur le menu **Settings** (Paramètres) de votre dépôt GitHub et allez dans l'onglet **Pages**.

1. Allez dans l'onglet **Pages**.
2. Vous y trouverez l'URL de votre page GitHub, qui devrait ressembler à ceci :

```
https://monutilisateur.github.io
```

Cliquez sur cette URL pour afficher le résultat de votre page hébergée sur GitHub Pages.

**Félicitations !** Vous avez créé et hébergé avec succès votre page sur GitHub Pages.