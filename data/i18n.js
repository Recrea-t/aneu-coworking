// Only one item MUST have the "default: true" key

module.exports = {
  ca: {
    default: true,
    path: `ca`,
    locale: `ca-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `ca`,
    ogLanguage: `ca_ES`,
    defaultTitle: "Àneu Coworking",
    defaultDescription: "El teu espai de treball compartit al Pallars Sobirà",
  },
  es: {
    path: `es`,
    locale: `es-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    ogLanguage: `es_ES`,
    defaultTitle: "Àneu Coworking",
    defaultDescription:
      " Tu espacio de trabajo compartido en el Pirineo leridano",
  },
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `MM/DD/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: "Àneu Coworking",
    defaultDescription: "Your coworking space in the Pyrenees",
  },
}
