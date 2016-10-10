module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue comes in two build versions, which do you want to use?",
      "choices": [
        {
          "name": "Runtime-only: lighter, but no support for templates defined in .html files (.vue files are fine)",
          "value": "runtime",
          "short": "runtime"
        },
        {
          "name": "Standalone: heavier, because it includes the template parser to allow templates in .html files",
          "value": "standalone",
          "short": "standalone"
        }
      ]
    },
    "vuex": {
      "type": "confirm",
      "message": "Do you need Vuex?"
    },
    "i18n": {
      "type": "confirm",
      "message": "Do you need i18n support?"
    },
    "routing": {
      "type": "confirm",
      "message": "Do you need routing?"
    },
    "svg": {
      "type": "confirm",
      "message": "Do you need support for SVG sprites?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?",
      "default": true
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?",
      "default": false
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?",
      "default": false
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e",
    "build/utils": "svg",
    "src/assets/svg/**/*": "svg",
    "src/bourgeon/router.js": "routing",
    "src/bourgeon/Icon.vue": "svg",
    "src/bourgeon/i18n.js": "i18n",
    "src/components/Hello.vue": "routing",
    "src/locales/**/*": "i18n",
    "src/routes.js": "routing"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
