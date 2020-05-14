const moment = require('moment');
const {getSideBarItem} = require('./sidebar/sidebar');


module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: '📚 Help center',
      description: 'Setup, guide, resources, ...'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: '📚 Help center',
      description: 'Premiers pas, guide d\'utilisation, ressources...'
    }
  },

  themeConfig: {
    logo: '/logo.png',

    locales: {
      '/': {
        lastUpdated: 'Last Updated', // string | boolean
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
          '/': getSidebar()
        }
      },
      '/fr/': {
        lastUpdated: 'Dernière mise à jour', // string | boolean
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
          '/fr/': getSidebar('fr')
        }
      }
    },

    nav: require('./nav/en'),

    smoothScroll: true,

    displayAllHeaders: true,
    sidebar: 'auto',
    sidebarDepth: 2
  },

  plugins: [
    'check-md',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
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


// *********************************************************
//       SIDEBAR
// *********************************************************


/**
 * Getting Started sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getGettingStarted(language) {
  const prefix = (language ? '/' + language : '') + '/getting-started';

  return [
    getSideBarItem(language, 'structure', [prefix + '/structure']),
    getSideBarItem(language, 'install-msteams-app', [prefix + '/install-msteams-app']),
    getSideBarItem(language, 'slack-integration', [prefix + '/slack']),
    getSideBarItem(language, 'google-integration', [prefix + '/google']),
    getSideBarItem(language, 'users', [prefix + '/users']),
    getSideBarItem(language, 'iframe', [prefix + '/iframe'])
  ];
}

/**
 * Introduction sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getIntroduction(language) {
  const prefix = (language ? '/' + language : '') + '/introduction';

  return [
    prefix + '/presentation',
    prefix + '/access'
  ];
}


function getGuideMSTeamsApp_Subdirectory(parentPath, language) {
  const prefix = parentPath + '/msteams-app';

  return getSideBarItem(language, 'msteams-app', [
    prefix + '/introduction',
    getSideBarItem(language, 'first-connection', [prefix + '/first-connection']),
    getSideBarItem(language, 'personal-app', [prefix + '/personal-app']),
    getSideBarItem(language, 'teams-tabs', [prefix + '/teams-tabs']),
    getSideBarItem(language, 'consult', [prefix + '/consult']),
    getSideBarItem(language, 'publish', [prefix + '/publish']),
    getSideBarItem(language, 'administration', [prefix + '/administration']),
  ]);
}

function getGuideWebApp_Subdirectory(parentPath, language) {
  const prefix = parentPath + '/web-app';

  return getSideBarItem(language, 'web-app', [
    prefix + '/introduction',
    getSideBarItem(language, 'settings', [prefix + '/settings']),
    getSideBarItem(language, 'actions', [prefix + '/actions']),
    getSideBarItem(language, 'interact', [prefix + '/interact']),
    getSideBarItem(language, 'publish', [prefix + '/publish']),
    getSideBarItem(language, 'notification', [prefix + '/notification']),
    getSideBarItem(language, 'directory', [prefix + '/directory']),
    getSideBarItem(language, 'search', [prefix + '/search']),
    getSideBarItem(language, 'administration', [prefix + '/administration']),
  ]);
}

/**
 * Guide part of the sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getGuide(language) {
  const prefix = (language ? '/' + language : '') + '/guide';

  return [
    getGuideMSTeamsApp_Subdirectory(prefix, language),
    getGuideWebApp_Subdirectory(prefix, language)
  ];
}

/**
 * Advanced part of the sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getAvancedUsage(language) {
  const prefix = (language ? '/' + language : '') + '/advanced';

  return [
    getSideBarItem(language, 'requirements', [prefix + '/requirements']),
    getSideBarItem(language, 'authentication', [prefix + '/authentication']),
    getSideBarItem(language, 'data-hosting', [prefix + '/data-hosting']),
    getSideBarItem(language, 'privacy', [prefix + '/privacy']),
    getSideBarItem(language, 'security', [prefix + '/security'])
  ];
}


/**
 * Complete sidebar
 */
function getSidebar(language) {
  return [
    getSideBarItem(language, 'introduction', getIntroduction(language)),
    getSideBarItem(language, 'getting-started', getGettingStarted(language)),
    getSideBarItem(language, 'guide', getGuide(language)),
    getSideBarItem(language, 'advanced', getAvancedUsage(language))
  ];
}
