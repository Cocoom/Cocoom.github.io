/**
 * All i18n sidebar labels
 * Every sidebar title menu items must be referenced here
 */
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
    },
    "advanced": {
      "en": "Advanced info",
      "fr": "Info complémentaires"
    },
    "authentication": {
      "en": "Authentication",
      "fr": "Authentification"
    },
    "data-hosting": {
      "en": "Data hosting",
      "fr": "Stockage des données"
    },
    "privacy": {
      "en": "Privacy",
      "fr": "Protection des données"
    },
    "requirements": {
      "en": "Usage requirements",
      "fr": "Pré-requis"
    },
    "security": {
      "en": "Security",
      "fr": "Sécurité"
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
  return getSidebarLabels()[id][!language ? 'en' : language];
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
function getSideBarItem(language, titleId, children = null, collapsable = true, depth = 2) {
  return {
    title: getLabel(titleId, language),
    collapsable: collapsable,
    sidebarDepth: depth,
    children: children
  }
}


module.exports = {
  getSideBarItem
};
