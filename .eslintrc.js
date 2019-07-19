module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-uses-react": ["warn"],
    "react/jsx-uses-vars": ["error"],
    "react/jsx-first-prop-new-line": ["error", "never"],
    "react/jsx-indent-props": ["error", "first"],
  }
};
