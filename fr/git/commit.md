# 📌 Git Commit

## 🚀 Qu'est-ce qu'un commit dans Git ?

Maintenant que nous avons terminé notre travail, nous sommes prêts à passer de l'étape de **staging** à celle du **commit** dans notre dépôt.

### 🔹 Pourquoi utiliser les commits ?

Un commit est une **capture d'état de votre projet** à un moment donné. Il enregistre les modifications apportées aux fichiers et constitue un point de sauvegarde auquel vous pouvez revenir si vous trouvez un bug ou souhaitez annuler des changements.

Chaque commit doit être accompagné d'un **message clair et descriptif**. Cela facilite la compréhension de l'historique des modifications, aussi bien pour vous que pour d'autres développeurs collaborant sur le projet.

---

## 📝 Créer un commit

Nous allons maintenant créer notre premier commit :

```sh
git commit -m "Première version de Hello World !"
```

Résultat attendu :

```sh
[master (root-commit) 221ec6e] Première version de Hello World !
 3 files changed, 26 insertions(+)
 create mode 100644 README.md
 create mode 100644 bluestyle.css
 create mode 100644 index.html
```

### 💡 Explication
- `git commit` : Enregistre les modifications dans l'historique du dépôt.
- `-m "message"` : Ajoute un message explicatif pour décrire les changements.
- Le commit sauvegarde tous les fichiers qui étaient en **staging** (ajoutés avec `git add`).

Notre environnement de staging a maintenant été **validé (committed) dans le dépôt**, avec le message :

> "Première version de Hello World !"

---

## ⏩ Git Commit sans passer par le Staging

Parfois, lorsqu'on effectue des petites modifications, l'étape du **staging** peut sembler inutile. Il est possible de **committer directement** sans passer par cette étape en utilisant l'option `-a`, qui **ajoute automatiquement tous les fichiers modifiés (suivis)**.

### 🔹 Exemple : modification de `index.html`

Ajoutons une ligne supplémentaire dans `index.html` :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World !</title>
    <link rel="stylesheet" href="bluestyle.css">
</head>
<body>
    <h1>Hello World !</h1>
    <p>Ceci est le premier fichier dans mon nouveau dépôt Git.</p>
    <p>Une nouvelle ligne ajoutée dans notre fichier !</p>
</body>
</html>
```

Vérifions les changements avec une version plus compacte de `git status` :

```sh
git status --short
```

Résultat :

```sh
 M index.html
```

### 📌 Signification des codes de `git status --short`
- `??` - Fichiers non suivis
- `A` - Fichiers ajoutés au staging
- `M` - Fichiers modifiés
- `D` - Fichiers supprimés

Comme prévu, `index.html` est modifié. Commettons directement cette modification **sans passer par le staging** :

```sh
git commit -a -m "Mise à jour de index.html avec une nouvelle ligne"
```

Résultat attendu :

```sh
[master 09f4acd] Mise à jour de index.html avec une nouvelle ligne
 1 file changed, 1 insertion(+)
```

⚠️ **Attention** : Sauter l'étape du staging **n'est pas recommandé** en général, car cela peut inclure des modifications non souhaitées dans un commit.

---

## 📜 Afficher l'historique des commits

Pour voir l'historique des commits dans un dépôt, utilisez la commande :

```sh
git log
```

Exemple de sortie :

```sh
commit 09f4acd3f8836b7f6fc44ad9e012f82faf861803 (HEAD -> master)
Author: utilisateur <email@example.com>
Date:   Fri Mar 26 09:35:54 2021 +0100

    Mise à jour de index.html avec une nouvelle ligne

commit 221ec6e10aeedbfd02b85264087cd9adc18e4b26
Author: utilisateur <email@example.com>
Date:   Fri Mar 26 09:13:07 2021 +0100

    Première version de Hello World !
```

### 🔍 Explication de `git log`
- Chaque commit a un **identifiant unique (hash)**.
- `HEAD -> master` indique que nous sommes sur la branche principale (`master`).
- La date et l'auteur du commit sont affichés.
- Le **message du commit** est indiqué en dessous.

✅ **Astuce** : Pour un affichage plus compact, utilisez :

```sh
git log --oneline
```

Cela affichera uniquement l'ID du commit et son message :

```sh
09f4acd Mise à jour de index.html avec une nouvelle ligne
221ec6e Première version de Hello World !
```

---

## 🎯 Récapitulatif

| Commande | Description |
|----------|------------|
| `git commit -m "message"` | Crée un commit avec un message |
| `git commit -a -m "message"` | Commit directement les fichiers modifiés sans passer par le staging |
| `git log` | Affiche l'historique des commits |
| `git log --oneline` | Affiche l'historique des commits sous une forme compacte |
