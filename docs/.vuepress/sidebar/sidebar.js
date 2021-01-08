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
      "fr": "⚙️ Info complémentaires"
    },
    "faq": {
      "en": "🪄 FAQ",
      "fr": "🪄 FAQ"
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
function getSideBarItem(language, titleId, children = null, collapsable = true, depth = 1) {
  return {
    title: getLabel(titleId, language),
    collapsable: collapsable,
    sidebarDepth: depth,
    children: children
  }
}


module.exports = {
  getLabel,
  getSideBarItem
};
