# Intégration et Automatisation de Jira et GitHub

L'intégration de Jira et GitHub permet d'automatiser la gestion des tickets et du code source, facilitant ainsi la collaboration entre les équipes de développement et de gestion de projet.

## 1. Pré-requis

Avant de commencer, assurez-vous d'avoir :
- Un compte Jira avec les permissions d'administration
- Un compte GitHub avec accès au dépôt concerné
- Les droits nécessaires pour configurer des intégrations

## 2. Connexion de Jira à GitHub

### a. Utilisation de Jira Cloud for GitHub

Jira propose une application officielle pour connecter GitHub à Jira Cloud.

1. Accédez à **Jira Cloud for GitHub** sur la marketplace Atlassian.
2. Cliquez sur **Get it now** et suivez les instructions pour l'installation.
3. Une fois installé, allez dans **Jira Settings > Apps > GitHub**.
4. Connectez-vous à votre compte GitHub et autorisez l'accès à Jira.
5. Sélectionnez le ou les dépôts à associer.

### b. Configuration via GitHub Actions

Vous pouvez utiliser **GitHub Actions** pour automatiser l'intégration avec Jira en mettant à jour les tickets via les commits et les pull requests.

Ajoutez un fichier `.github/workflows/jira.yml` dans votre dépôt :

```yaml
name: Jira Integration

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, closed]

jobs:
  update-jira:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Update Jira Issue
        uses: atlassian/gajira-comment@v3
        with:
          issue: "PROJ-123"
          comment: "Le code a été mis à jour dans GitHub."
        env:
          JIRA_BASE_URL: ${{ secrets.JIRA_BASE_URL }}
          JIRA_USER_EMAIL: ${{ secrets.JIRA_USER_EMAIL }}
          JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
```

## 3. Automatiser la gestion des tickets Jira

### a. Liaison automatique des commits et PRs

Ajoutez un numéro de ticket Jira dans vos commits et pull requests pour lier automatiquement les mises à jour :

```bash
git commit -m "PROJ-123 Correction du bug d'affichage"
```

Jira reconnaîtra automatiquement le ticket et l'associera au commit.

### b. Utilisation des transitions d'état

Vous pouvez configurer Jira pour changer automatiquement l’état d’un ticket en fonction des événements GitHub (ex : fermer un ticket lorsqu’un PR est fusionné).

Exemple de configuration dans **Automation for Jira** :

1. Allez dans **Jira Settings > Automation**.
2. Cliquez sur **Create Rule**.
3. Ajoutez un déclencheur : **Pull request merged**.
4. Ajoutez une action : **Transition de l’état du ticket** vers "Done".
5. Sauvegardez et activez la règle.

## 4. Conclusion

L’intégration de Jira et GitHub améliore la traçabilité des développements et automatise la gestion des tickets. Grâce aux GitHub Actions et aux règles d'automatisation de Jira, les équipes peuvent gagner en efficacité et réduire les tâches manuelles.