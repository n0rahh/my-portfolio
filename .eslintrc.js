module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': ['error'],
    'vue/multi-word-component-names': 0,
    'vue/no-restricted-component-options': [
      'error',
      {
        name: 'component',
        message: 'Use "components" instead.',
      },
    ],
  },
};
