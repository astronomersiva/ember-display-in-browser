module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    node: false,
    browser: true
  },
  plugins: [
    'ember'
  ],
  globals: {
    "require": true,
    "module": true,
    "process": true
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': 'off'
  }
};
