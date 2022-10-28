module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true
  // },
  // extends: 'standard-with-typescript',
  // overrides: [],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  //   project: './tsconfig.json'
  // },
  // rules: {
  //   indent: 'off'
  // }
  parser: '@typescript-eslint/parser',
  extends: ['@open-wc', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'class-methods-use-this': ['error', { enforceForClassFields: false }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     ignorePackages: true
    //   }
    // ]
  },
}
