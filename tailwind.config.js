const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const primary = "#e74550";
const primaryLight = "#f97c85";
const lightGray = "#c7d3bf";
const mediumGray = "#455a64";
const analyticsColor = "#c15e08";
const facebookColor = "#1977f3";
const hubspotColor = "#ff5930";
const chromeColor = "#df2717";
const iexplorerColor = "#0086c8";
const firefoxColor = "#d67d00";
const safariColor = "#727277";
const operaColor = "#a60c12";

module.exports = {
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {
        "body": "#F6F6F6",
        primary,
        "primary-light": primaryLight,
        "light-gray": lightGray,
        "medium-gray": mediumGray
      },
      colors: {
        "body": "#485158",
        primary,
        "light-gray": lightGray,
        "medium-gray": mediumGray,
        "analytics-color": analyticsColor,
        "facebook-color": facebookColor,
        "hubspot-color": hubspotColor,
        "chrome-color": chromeColor,
        "iexplorer-color": iexplorerColor,
        "firefox-color": firefoxColor,
        "safari-color": safariColor,
        "opera-color": operaColor
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: theme("backgroundColor.body"),
          fontFamily: theme("fontFamily.sans"),
          color: theme("colors.body")
        }
      });
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
