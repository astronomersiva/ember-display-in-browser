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
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': 'off'
  }
};
