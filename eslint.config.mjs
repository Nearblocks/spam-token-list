import eslintPluginJsonc from 'eslint-plugin-jsonc';
export default [
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    rules: {
      // override/add rules settings here, such as:
      // 'jsonc/rule-name': 'error'
    },
  },
];
