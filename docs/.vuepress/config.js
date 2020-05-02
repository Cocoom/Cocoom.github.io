module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: '📚 Everything for a good start with Cocoom',
      description: 'Guide, resources, FAQ...'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: '📚 Tout pour démarrer avec Cocoom',
      description: 'Guide d\'utilisation, ressources, FAQ...'
    }
  },

  themeConfig: {
    displayAllHeaders: true,
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // displayAllHeaders: true,
        sidebar: {
          '/guide/': getSidebarEN() // require('./sidebar/guide/en')
        }
      },
      '/fr/': {
        selectText: 'Langues',
        label: 'Français',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Langues',
        serviceWorker: {
          updatePopup: {
            message: "Du contenu nouveau est disponible.",
            buttonText: "Rafraîchir"
          }
        },
        nav: require('./nav/fr'),
        // displayAllHeaders: true,
        sidebar: {
          '/guide/': getSidebarFR() // require('./sidebar/guide/fr')
        }
      }
    },

    logo: '/logo.png',

    nav: require('./nav/en'),

    smoothScroll: true
  },

  /* configureWebpack: {
    resolve: {
      alias: {
        '@media': './media'
      }
    }
  }, */

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/last-updated'
  ]
}

function getSidebarEN() {
  return [
    {
      title: 'Install',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['setup', 'Setup']
      ]
    },
    {
      title: 'Configure',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['configure', 'Configure !']
      ]
    },
    {
      title: 'Use',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['use/create', 'Create'],
        ['use/organize', 'Organize']
      ]
    }
  ];
}


function getSidebarFR() {
  return [
    {
      title: 'Installer',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['setup', 'Setup']
      ]
    },
    {
      title: 'Configurer',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['configure', 'Configure !']
      ]
    },
    {
      title: 'Utiliser',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['use/create', 'Créer'],
        ['use/organize', 'Structurer']
      ]
    }
  ];
}
