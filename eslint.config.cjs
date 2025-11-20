// eslint.config.cjs
const globals = require("globals");

module.exports = [
  {
    // aplica em todos os .js (ajuste se quiser)
    files: ["**/*.js"],

    // aqui substituímos "env" pelo languageOptions
    languageOptions: {
      // traz as globals padrão do node + jest (readonly por padrão)
      globals: {
        ...globals.node,
        ...globals.jest
      },

      // parserOptions agora dentro de languageOptions
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "script"
      }
    },

    // regras base (mesma ideia do "extends": "eslint:recommended")
    // para usar presets você pode importar/usar preset functions, mas
    // a forma simples para regras é conforme abaixo:
    rules: {}
  }
];
