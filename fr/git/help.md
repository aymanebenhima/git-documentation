# 📌 Aide Git

Git propose une commande d'aide intégrée pour vous aider à retrouver les options et les commandes disponibles.

Il existe plusieurs façons d'accéder à l'aide Git via la ligne de commande :

- `git commande -help` : Affiche toutes les options disponibles pour une commande spécifique.
- `git help --all` : Affiche toutes les commandes Git possibles.

Explorons ces options en détail. 🚀

## 🛠️ Afficher les options d'une commande spécifique

Si vous avez besoin d'aide pour une commande particulière, utilisez :

```sh
git commit -help
```

Cela affichera toutes les options disponibles pour la commande `commit` :

```sh
usage: git commit [] [--] ...

    -q, --quiet           Suppression du résumé après un commit réussi
    -v, --verbose         Affiche les différences dans le modèle de message de commit
```

### 📄 Options pour les messages de commit

```sh
    -F, --file <fichier>  Lire le message depuis un fichier
    --author <auteur>     Définir un auteur spécifique pour le commit
    --date <date>         Définir une date spécifique pour le commit
    -m, --message <msg>   Ajouter un message de commit
    -c, --reedit-message  Réutiliser et modifier un message de commit précédent
    -C, --reuse-message   Réutiliser un message de commit précédent
    --fixup <commit>      Formater un message pour corriger un commit existant
    --squash <commit>     Formater un message pour fusionner avec un commit existant
    --reset-author        Définir l’auteur comme l'utilisateur actuel
    -s, --signoff         Ajouter une signature au commit
    -t, --template <fichier>  Utiliser un fichier de modèle de commit
    -e, --edit            Forcer l’édition du message de commit
    --cleanup <mode>      Définir comment nettoyer les espaces et les commentaires
    --status              Inclure l’état dans le modèle de message de commit
    -S, --gpg-sign[=<clé>]  Signer le commit avec GPG
```

### 🏗️ Options relatives au contenu du commit

```sh
    -a, --all             Ajouter tous les fichiers modifiés
    -i, --include         Ajouter uniquement les fichiers spécifiés à l’index
    --interactive         Ajouter les fichiers de manière interactive
    -p, --patch           Ajouter les modifications par patchs interactifs
    -o, --only            Commiter uniquement les fichiers spécifiés
    -n, --no-verify       Ignorer les hooks `pre-commit` et `commit-msg`
    --dry-run             Afficher ce qui serait committé sans effectuer l’opération
    --short               Afficher l’état de manière concise
    --branch              Afficher les informations de branche
    --ahead-behind        Calculer l’avance/retard de la branche
    --porcelain           Formatage machine-readable
    --long                Afficher l’état en format long (par défaut)
    -z, --null            Terminer les entrées par NUL
    --amend               Modifier le dernier commit
    --no-post-rewrite     Ignorer le hook `post-rewrite`
    -u, --untracked-files[=<mode>]  Afficher les fichiers non suivis (all, normal, no)
    --pathspec-from-file <fichier>  Lire les fichiers à inclure depuis un fichier
    --pathspec-file-nul   Séparer les fichiers par un caractère NUL avec `--pathspec-from-file`
```

### ℹ️ Remarque

Vous pouvez également utiliser `--help` à la place de `-help` pour ouvrir la documentation officielle de Git.

Exemple :
```sh
git help commit
```
Cela affichera la documentation Git pour la commande `commit` dans votre terminal.

---

🔎 **Besoin d’autres commandes Git ?** Explorez la documentation officielle en exécutant :
```sh
git help --all
```
Cela vous donnera une liste complète de toutes les commandes Git disponibles. 🎯

---

✅ **Conclusion**

L'utilisation de `git help` est essentielle pour apprendre et maîtriser Git efficacement. Vous avez toujours accès à une documentation détaillée directement depuis votre terminal. N’hésitez pas à l’utiliser régulièrement pour gagner en productivité ! 🚀
