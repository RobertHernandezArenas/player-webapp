module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "rules": {
    
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "next"
      }
    ]
  },
  
  "no-console": "warn",
  "no-use-before-define": "warn",
  "spaced-comment": "warn"
}