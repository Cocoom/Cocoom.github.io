const moment = require('moment');
const {getSideBarItem, getLabel} = require('./sidebar/sidebar');


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

  head: [
    ['script', {}, `
      window.intercomSettings = {
        app_id: "a52qmjhg"
      };
    `],
    ['script', {}, `
      (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/a52qmjhg';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `],
  ],

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
        'ga': 'UA-130889610-1'
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
    prefix + '/users',
    prefix + '/structure',
    getSideBarItem(language, 'integration', [
      prefix + '/install-msteams-app',
      prefix + '/slack',
      prefix + '/google',
      prefix + '/iframe'
    ], true, 0)
  ]
};

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
};


function getGuideMSTeamsApp_Subdirectory(parentPath, language, collapsable = false, depth = 1) {
  const prefix = parentPath + '/msteams-app';

  return getSideBarItem(language, 'msteams-app',
    [
      prefix + '/introduction',
      prefix + '/first-connection',
      prefix + '/personal-app',
      prefix + '/teams-tabs',
      prefix + '/consult',
      prefix + '/publish',
      prefix + '/administration'
    ],
    collapsable, depth
  );
};

function getGuideWebApp_Subdirectory(parentPath, language, collapsable = false, depth = 1) {
  const prefix = parentPath + '/web-app';

  /*
  -------------------------------------------------------
  NOTE: If you want to apply a different item label than the title1 label of the file, use this example
  -------------------------------------------------------
  return getSideBarItem(language, 'web-app', [
    prefix + '/introduction',
    getSideBarItem(language, 'settings', [prefix + '/settings'], collapsable, depth),
    getSideBarItem(language, 'actions', [prefix + '/actions'], collapsable, depth),
    getSideBarItem(language, 'interact', [prefix + '/interact'], collapsable, depth),
    getSideBarItem(language, 'publish', [prefix + '/publish'], collapsable, depth),
    getSideBarItem(language, 'notification', [prefix + '/notification'], collapsable, depth),
    getSideBarItem(language, 'directory', [prefix + '/directory'], collapsable, depth),
    getSideBarItem(language, 'search', [prefix + '/search'], collapsable, depth),
    getSideBarItem(language, 'administration', [prefix + '/administration'], collapsable, depth)
  ]);
  */

  // NOTE: Below an example of menu using the file title1 label as menu item label
  // Describing the sidebar that way prevents us from creating a lot of internationalized (i18n) labels
  return getSideBarItem(language, 'web-app',
    [
      prefix + '/introduction',
      prefix + '/settings',
      prefix + '/actions',
      prefix + '/interact',
      prefix + '/publish',
      prefix + '/notification',
      prefix + '/directory',
      prefix + '/search',
      prefix + '/administration'
    ],
    collapsable, depth
  );
}

/**
 * Guide part of the sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getGuide(language) {
  const prefix = (language ? '/' + language : '') + '/guide';

  return [
    getGuideMSTeamsApp_Subdirectory(prefix, language, true, 0),
    getGuideWebApp_Subdirectory(prefix, language, true, 0)
  ];
};

/**
 * Advanced part of the sidebar
 *
 * @param {string} language ('fr', ...)
 */
function getAvancedUsage(language) {
  const prefix = (language ? '/' + language : '') + '/advanced';

  return [
    prefix + '/requirements',
    prefix + '/authentication',
    prefix + '/data-hosting',
    prefix + '/privacy',
    prefix + '/security'
  ];
};


/**
 * Complete sidebar
 */
function getSidebar(language) {
  return [
    getSideBarItem(language, 'introduction', getIntroduction(language), true, 1),
    getSideBarItem(language, 'getting-started', getGettingStarted(language), true, 1),
    getSideBarItem(language, 'guide', getGuide(language), true, 0),
    getSideBarItem(language, 'advanced', getAvancedUsage(language), true, 0)
  ];
};
