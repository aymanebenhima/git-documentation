# Git Ignore et .gitignore

## Git Ignore

Lorsque vous partagez votre code avec d'autres, il y a souvent des fichiers ou des parties de votre projet que vous ne souhaitez pas partager.

### Exemples :
- Fichiers de log
- Fichiers temporaires
- Fichiers cachés
- Fichiers personnels
- Etc.

Git vous permet de spécifier quels fichiers ou parties de votre projet doivent être ignorés à l'aide d'un fichier `.gitignore`. 

Les fichiers et dossiers spécifiés dans le fichier `.gitignore` ne seront pas suivis par Git. Cependant, le fichier `.gitignore` lui-même **est suivi par Git**.

## Créer un fichier .gitignore

Pour créer un fichier `.gitignore`, allez dans le répertoire racine de votre projet local Git, puis créez le fichier :

### Exemple :
```bash
touch .gitignore
```

Ouvrez ensuite le fichier avec un éditeur de texte.

Ajoutons simplement deux règles :

1. Ignorer tous les fichiers avec l'extension `.log`.
2. Ignorer tous les fichiers dans n'importe quel dossier nommé `temp`.

### Exemple de contenu pour `.gitignore` :
```bash
# ignorer tous les fichiers .log
*.log

# ignorer tous les fichiers dans un dossier nommé temp
temp/
```

Ainsi, tous les fichiers `.log` et tout le contenu des dossiers `temp` seront ignorés par Git.

**Note :** Dans ce cas, nous utilisons un seul fichier `.gitignore` qui s'applique à l'ensemble du dépôt.

Il est également possible d'avoir des fichiers `.gitignore` supplémentaires dans des sous-répertoires. Ceux-ci ne s'appliquent qu'aux fichiers ou dossiers de ce répertoire particulier.

## Règles pour le fichier .gitignore

Voici les règles générales pour les modèles dans les fichiers `.gitignore` :

| Modèle                         | Explication/Correspondance                                                                                                                                                             | Exemples                                                                                                                                              |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| ` `                             | Les lignes vides sont ignorées                                                                                                                                                         |                                                                                                                                                      |
| `# commentaire texte`           | Les lignes commençant par `#` sont ignorées                                                                                                                                              | `# Fichiers temporaires`                                                                                                                              |
| `nom`                           | Correspond à tous les fichiers, dossiers ou fichiers/dossiers dans un dossier nommé `nom`                                                                                               | `/nom.log`, `/nom/fichier.txt`, `/lib/nom.log`                                                                                                       |
| `nom/`                          | Se termine par `/`, spécifie que le modèle correspond à un dossier. Cela correspond à tous les fichiers et dossiers dans n'importe quel dossier nommé `nom`.                           | `/nom/fichier.txt`, `/nom/log/nom.log`                                                                                                                |
| `nom.fichier`                   | Correspond à tous les fichiers avec le nom `nom.fichier`                                                                                                                                 | `/nom.fichier`, `/lib/nom.fichier`                                                                                                                   |
| `/nom.fichier`                  | Commencer par `/` spécifie que le modèle ne correspond qu'aux fichiers dans le dossier racine                                                                                           | `/nom.fichier`, mais pas `/lib/nom.fichier`                                                                                                         |
| `lib/nom.fichier`               | Les modèles spécifiant des fichiers dans des dossiers spécifiques sont toujours relatifs à la racine                                                                                  | `/lib/nom.fichier` mais pas `nom.fichier`, ni `/test/lib/nom.fichier`                                                                                |
| `**/lib/nom.fichier`            | Commencer par `**` avant `/` spécifie que le modèle correspond à n'importe quel dossier du dépôt, pas seulement à la racine                                                          | `/lib/nom.fichier`, `/test/lib/nom.fichier`                                                                                                          |
| `name[a-z].file`                | `[range]` correspond à un seul caractère dans la plage spécifiée (dans ce cas, un caractère entre a et z, ou un chiffre)                                                               | `/namea.file`, `/nameb.file`                                                                                                                         |
| `name[abc].file`                | `[set]` correspond à un seul caractère dans un ensemble spécifié (dans ce cas, a, b ou c)                                                                                             | `/namea.file`, `/nameb.file`                                                                                                                         |
| `name[!abc].file`               | `[!set]` correspond à un caractère unique, sauf ceux spécifiés dans l'ensemble (dans ce cas, a, b ou c)                                                                                | `/namex.file`, mais pas `/names.file`, `/namea.file`, `/nameb.file`                                                                                 |
| `*.file`                        | Correspond à tous les fichiers avec l'extension `.file`                                                                                                                                  | `/nom.file`, `/lib/nom.file`                                                                                                                         |
| `name/`                         | Correspond à tous les dossiers se terminant par `name`                                                                                                                                  | `/lastname/log.file`, `/firstname/log.file`                                                                                                         |
| `!name/secret.log`              | `!` spécifie une négation ou une exception. Cela correspond à tous les fichiers et dossiers dans n'importe quel dossier `name`, sauf `name/secret.log`                                | `/nom/file.txt`, `/nom/log/nom.log`, mais pas `/nom/secret.log`                                                                                     |
| `junk.*`                        | Ajouter de nouveaux modèles après une négation ré-ignorera un fichier précédemment exclu. Cela correspond à tous les fichiers avec l'extension `.file`, sauf ceux dans le dossier `name`, sauf si le fichier s'appelle `junk` | `/log.file`, `/name/log.file`, mais pas `/name/junk.file`                                                                                           |

## Ignorer des fichiers locaux et personnels

Il est également possible d'ignorer des fichiers ou des dossiers sans qu'ils soient visibles dans le fichier `.gitignore` distribué.

Ces types d'ignorances sont spécifiés dans le fichier `.git/info/exclude`. Il fonctionne de la même manière que `.gitignore`, mais ces exclusions ne sont visibles par personne d'autre.
