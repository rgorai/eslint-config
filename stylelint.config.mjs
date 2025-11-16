/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': [
      true,
      {
        severity: 'warning',
      },
    ],
    'selector-class-pattern': '',
    'color-function-notation': 'modern',
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['base', 'apply', 'theme'],
      },
    ],
  },
}
