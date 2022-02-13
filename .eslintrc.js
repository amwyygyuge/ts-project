const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  root: true,
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
      typescript: {},
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: false },
    ],
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/no-extraneous-dependencies": [ERROR, { devDependencies: true }],
    "import/extensions": OFF,
    "import/prefer-default-export": OFF,
    "import/no-unresolved": [
      OFF,
      {
        caseSensitive: false,
      },
    ],
  },
};
