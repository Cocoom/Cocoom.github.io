/**
 * All i18n sidebar labels
 * Every sidebar title menu items must be referenced here
 */
function getSidebarLabels() {
  return {
    "overview": {
      "en": "Overview",
      "fr": "Présentation"
    },
    "getting-started": {
      "en": "✨ Getting Started",
      "fr": "✨ Premiers pas"
    },
    "guide": {
      "en": "🎓 Guide",
      "fr": "🎓 Guide"
    },
    "msteams-app": {
      "en": "Microsoft Teams App",
      "fr": "Microsoft Teams Application"
    },
    "web-app": {
      "en": "Web App",
      "fr": "Web Application"
    },
    "integration": {
      "en": "Integrations",
      "fr": "Intégrations"
    },
    "advanced": {
      "en": "⚙️ Advanced resources",
      "fr": "⚙️ Usages avancés"
    },
    "faq": {
      "en": "🪄 FAQ",
      "fr": "🪄 FAQ"
    },
    "first-connection": {
      "en": "🪄 First connection",
      "fr": "🪄 Première connexion"
    },
    "personal-app": {
      "en": "Personal App",
      "fr": "App personnelle"
    },
    "teams-tabs": {
      "en": "Tabs in Teams",
      "fr": "Onglets d’équipe"
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
    "notifications": {
      "en": "Notifier",
      "fr": "Notify"
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
      "en": "Interact",
      "fr": "Interagir"
    },
    "directory": {
      "en": "Directory",
      "fr": "Annuaire"
    },
    "search": {
      "en": "Search",
      "fr": "Rechercher"
    }
  };
};


/**
 * Get a sidebar menu item i18n label
 *
 * @param {string} id i18n label id found in getSidebarLabels function
 * @param {string} language ('en', 'fr', ...)
 */
function getLabel(id, language) {
  return getSidebarLabels()[id] ? getSidebarLabels()[id][!language ? 'en' : language] : null;
}


/**
 * Get a sidebar menu item containing children leaf items or other sidebar menu items
 *
 * @param {string} language ('en', 'fr', ...)
 * @param {string} titleId I18n label id for this item
 * @param {[SidebarMenuItem or Path]} children Could b other menu items or item leafs (only path to file) (default: null; no child)
 * @param {boolean} collapsable true means we can collapse the menu item (default: true)
 * @param {integer} depth Display page titles in sidebar (0 means title1 only, 1 includes title 1 + title 2, ...) (default: 2 which includes title 1 + 2 + 3)
 */
function getSideBarItem(language, titleId, children = null, collapsable = true, depth = 1) {
  return {
    title: getLabel(titleId, language) ? getLabel(titleId, language): null,
    collapsable: collapsable,
    sidebarDepth: depth,
    children: children
  }
}


module.exports = {
  getLabel,
  getSideBarItem
};
