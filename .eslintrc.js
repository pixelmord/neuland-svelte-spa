module.exports = {
  extends: ['eslint:recommended', "plugin:cypress/recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    "cypress/globals": true,
  },
  plugins: ['svelte3', 'cypress'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  globals: {
    module: true,
    process: true,
    mapboxgl: true,
  },
  rules: {
  },
  settings: {
    // ...
  },
};
