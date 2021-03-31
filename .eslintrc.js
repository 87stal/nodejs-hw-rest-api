module.exports = {
  env: {
    parser: '@babel/eslint-parser',
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
  //   'comma-dangle': 'off',
  //   'space-before-function-paren': 'off',
  }
}
