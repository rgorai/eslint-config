export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/comment-no-empty': null,
    'scss/operator-no-newline-after': null,
    'scss/no-global-function-names': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'use', 'include', 'mixin'],
      },
    ],
    'selector-class-pattern': '',
    'color-function-notation': 'legacy',
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'no-empty-source': null,
    'no-invalid-position-at-import-rule': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'use', 'include', 'mixin'],
      },
    ],
  },
}
