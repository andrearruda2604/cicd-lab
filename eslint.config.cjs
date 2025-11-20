// eslint.config.cjs
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],

    languageOptions: {
      // define as globals (em vez de usar "env")
      globals: {
        ...globals.node,
        ...globals.jest
      },

      parserOptions: {
        ecmaVersion: 12,
        sourceType: "script"
      }
    },

    // regras base; adicione regras aqui se quiser
    rules: {}
  }
];
