const moment = require('moment');


module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: '📚 Resources to get started with Cocoom',
      description: 'Setup, guide, resources, ...'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: '📚 Pour bien démarrer avec Cocoom',
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


function getSidebarLabels() {
  return {
    "none": {
      "en": "",
      "fr": ""
    },
    "introduction": {
      "en": "Introduction",
      "fr": "Présentation"
    },
    "getting-started": {
      "en": "Getting Started",
      "fr": "Premiers pas"
    },
    "guide": {
      "en": "Guide",
      "fr": "Guide"
    },
    "msteams-app": {
      "en": "Microsoft Teams App",
      "fr": "Microsoft Teams Application"
    },
    "web-app": {
      "en": "Web App",
      "fr": "Web Application"
    },
    "iframe": {
      "en": "IFrame",
      "fr": "IFrame"
    },
    "install-msteams-app": {
      "en": "Install Microsoft Teams app",
      "fr": "Installer Microsoft Teams app"
    },
    "first-connection": {
      "en": "First connection",
      "fr": "Première connexion"
    },
    "personal-app": {
      "en": "Personal App",
      "fr": "App personnelle"
    },
    "teams-tabs": {
      "en": "Teams Tabs",
      "fr": "Onglets d'équipe"
    },
    "consult": {
      "en": "Consult",
      "fr": "Consulter"
    },
    "publish": {
      "en": "Publish",
      "fr": "Publier"
    },
    "administration": {
      "en": "Administration",
      "fr": "Administration"
    },
    "slack-integration": {
      "en": "Slack",
      "fr": "Slack"
    },
    "google-integration": {
      "en": "Google SSO",
      "fr": "SSO Google"
    },
    "structure": {
      "en": "Structure",
      "fr": "Structurer"
    },
    "users": {
      "en": "Users",
      "fr": "Utilisateurs"
    },


    "settings": {
      "en": "Settings",
      "fr": "Paramètres"
    },
    "actions": {
      "en": "Actions",
      "fr": "Actions"
    },
    "interact": {
      "en": "Interactions",
      "fr": "Interactions"
    },
    "publish": {
      "en": "Publish",
      "fr": "Publier"
    },
    "notification": {
      "en": "Notifications",
      "fr": "Notifications"
    },
    "directory": {
      "en": "Directory",
      "fr": "Annuaire"
    },
    "search": {
      "en": "Search",
      "fr": "Recherche"
    },
    "administration": {
      "en": "Administration",
      "fr": "Administration"
    }
  };
};

function getLabel(id, language) {
  return getSidebarLabels()[id][!language ? 'en' : language];
}

function getSideBarItem(language, titleId, children = null, collapsable = true, depth = 2) {
  return {
    title: getLabel(titleId, language),
    collapsable: collapsable,
    sidebarDepth: depth,
    children: children
  }
}


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

  return {
    title: getLabel('web-app', language),
    collapsable: true,
    sidebarDepth: 2,
    children: [
      prefix + '/introduction',
      getSideBarItem(language, 'settings', [prefix + '/settings']),
      getSideBarItem(language, 'actions', [prefix + '/actions']),
      getSideBarItem(language, 'interact', [prefix + '/interact']),
      getSideBarItem(language, 'publish', [prefix + '/publish']),
      getSideBarItem(language, 'notification', [prefix + '/notification']),
      getSideBarItem(language, 'directory', [prefix + '/directory']),
      getSideBarItem(language, 'search', [prefix + '/search']),
      getSideBarItem(language, 'administration', [prefix + '/administration']),
    ]
  };
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
 * English version of the sidebar
 */
function getSidebar(language) {
  return [
    getSideBarItem(language, 'introduction', getIntroduction(language)),
    getSideBarItem(language, 'getting-started', getGettingStarted(language)),
    getSideBarItem(language, 'guide', getGuide(language))/* ,
    {
      title: 'Usage',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        guidePrefix + '/use/create',
        guidePrefix + '/use/organize',
        guidePrefix + '/use/setup'
      ]
    } */
  ];
}
