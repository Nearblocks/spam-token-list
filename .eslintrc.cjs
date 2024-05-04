module.exports = {
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  overrides: [
    {
      files: ['**/*.json'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['**/*.gitignore', '**/.husky/*', '**/yarn.lock'],
      parser: 'jsonc-eslint-parser',
    },
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'jsonc/rule-name': 'error'
  },
};
