module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-uses-react": ["warn"],
    "react/jsx-uses-vars": ["error"],
    "react/jsx-first-prop-new-line": ["error", "never"],
    "react/jsx-indent-props": ["error", "first"]
  }
};
