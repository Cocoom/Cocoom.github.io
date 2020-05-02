const moment = require('moment');


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
    logo: '/logo.png',

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
        sidebar: {
          '/fr/guide/': getSidebarFR() // require('./sidebar/guide/fr')
        }
      }
    },

    nav: require('./nav/en'),

    smoothScroll: true,

    displayAllHeaders: true,
    sidebar: 'auto',
    sidebarDepth: 2
  },

  /* configureWebpack: {
    resolve: {
      alias: {
        '@media': './media'
      }
    }
  }, */

  plugins: [
    'check-md',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/active-header-links',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-130889610-1' // UA-00000000-0
      }
    ]
  ]
}

function getSidebarEN() {
  const prefix = '/guide';

  return [
    {
      title: 'Setup',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/setup/create',
        prefix + '/setup/test'
      ]
    },
    {
      title: 'Configure',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/configure/structure'
      ]
    },
    {
      title: 'Use',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/use/create',
        prefix + '/use/organize',
        prefix + '/use/setup'
      ]
    }
  ];
}


function getSidebarFR() {
  const prefix = '/fr/guide';

  return [
    {
      title: 'Mettre en place',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/setup/create',
        prefix + '/setup/setup'
      ]
    },
    {
      title: 'Configurer',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/configure/create',
        prefix + '/configure/structure'
      ]
    },
    {
      title: 'Utiliser',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        prefix + '/use/integration'
      ]
    }
  ];
}
