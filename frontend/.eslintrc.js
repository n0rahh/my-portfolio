export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/first-attribute-linebreak": ["error", { singleline: "beside", multiline: "below" }],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: { max: 1 },
      },
    ],
    "prettier/prettier": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
