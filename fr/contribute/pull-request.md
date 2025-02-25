# Git et GitHub : Envoyer une Pull Request

## Pousser les modifications vers notre fork GitHub

Nous avons effectué plusieurs modifications dans notre dépôt Git local. Maintenant, nous allons les pousser vers notre fork GitHub.

### 1. **Commiter les modifications**

Tout d'abord, commitez les changements :

```bash
git push origin
```

Exemple de sortie :

```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 16 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 393.96 KiB | 32.83 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/kaijim/w3schools-test.github.io.git
   facaeae..ebb1a5c  master -> master
```

Une fois les modifications poussées vers votre fork GitHub, vous pourrez constater que le dépôt a un nouveau commit.

### 2. **Envoyer une Pull Request**

Rendez-vous sur GitHub et vous verrez l'option pour créer une Pull Request vers le dépôt d'origine :

- **Cliquez sur "Pull Request" pour créer une Pull Request**.

N'oubliez pas d'ajouter une explication dans le commentaire pour les administrateurs du dépôt d'origine.

#### Exemple de commentaire :

> "Ajout de nouvelles fonctionnalités et corrections de bugs dans le projet."

### 3. **Approuver les Pull Requests**

Une fois la Pull Request envoyée, les membres ayant accès au dépôt d'origine pourront la voir.

Ils pourront examiner les changements proposés, commenter dessus et décider de la fusionner.

#### Comment fusionner une Pull Request :

1. **Voir la Pull Request** dans le dépôt d'origine :

   - **Voir les détails de la Pull Request** sur GitHub.

2. **Commenter et fusionner** les modifications :

   - L'administrateur peut laisser un commentaire, puis cliquer sur le bouton **"Merge"** pour intégrer les modifications.

3. **Confirmer la fusion** :

   - Une fois la fusion confirmée, les changements sont intégrés à la branche `master` du dépôt d'origine.

#### Pull Request fusionnée :

> Les changements ont été fusionnés avec la branche `master`.

### À vous de jouer !