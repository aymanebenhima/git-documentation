import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Git & GitHub Essentials",
  description: "Master version control and collaboration with our comprehensive guide on Git and GitHub.",
  base: '/git-and-github-essentials/',
  themeConfig: {
    nav: [
      { text: 'Français', link: '/fr/introduction' },
    ],
    sidebar: {
      '/fr/': [
        { text: 'Introduction', link: '/fr/introduction' },
        { text: 'Git Basics', items: [
            { text: 'Démarrer avec Git', link: '/fr/git/get-started' },
            { text: 'Gérer les nouveaux fichiers', link: '/fr/git/new-files' },
            { text: 'Zone de staging', link: '/fr/git/staging' },
            { text: 'Git Commit', link: '/fr/git/commit' },
            { text: 'Aide Git', link: '/fr/git/help' },
            { text: 'Gestion des branches', link: '/fr/git/branch' },
            { text: 'Fusionner des branches', link: '/fr/git/merge' }
          ] 
        },
        { text: 'Git & GitHub', items: [
            { text: 'Démarrer avec GitHub', link: '/fr/github/get-started' },
            { text: 'Modifier du code', link: '/fr/github/edit-code' },
            { text: 'Récupérer du code', link: '/fr/github/pull' },
            { text: 'Envoyer du code', link: '/fr/github/push' },
            { text: 'Gérer les branches GitHub', link: '/fr/github/branch' },
            { text: 'Récupérer une branche', link: '/fr/github/pull-branch' },
            { text: 'Envoyer une branche', link: '/fr/github/push-branch' },
            { text: 'Workflow GitHub', link: '/fr/github/github-flow' },
            { text: 'Héberger avec GitHub Pages', link: '/fr/github/github-pages' }
          ] 
        },
        { text: 'Contribuer à GitHub', items: [
            { text: 'Forker un projet', link: '/fr/contribute/fork' },
            { text: 'Cloner un projet', link: '/fr/contribute/clone' },
            { text: 'Envoyer une Pull Request', link: '/fr/contribute/pull-request' }
          ] 
        },
        { text: 'Git Avancé', items: [
            { text: 'Fichier .gitignore', link: '/fr/advanced/gitignore' },
            // { text: 'Sécurité SSH', link: '/fr/advanced/ssh-security' },
            // { text: 'Ajouter une clé SSH', link: '/fr/advanced/add-ssh' }
          ] 
        },
        { text: 'Annuler des actions', items: [
            { text: 'Revert', link: '/fr/undo/revert' },
            { text: 'Reset', link: '/fr/undo/reset' },
            { text: 'Amend', link: '/fr/undo/amend' }
          ] 
        },
        { text: 'Bonne pratique et recommandations', items: [
            { text: 'Git & GitHub - Stratégie de branches', link: '/fr/recommandations/branching-strategy' },
            { text: 'Bonnes pratiques et intégration dans un projet Agile', link: '/fr/recommandations/projet-agile' },
            { text: 'Intégration et Automatisation de Jira et GitHub', link: '/fr/recommandations/github-jira' },
          ] 
        },
        { text: 'Exercices pratiques', items: [
            { text: 'Exercices & Cas pratiques', link: '/fr/pratique/exercices' }
          ] 
        }
      ]
    }    
  }
})
