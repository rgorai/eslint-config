import tsEslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'

const getConfig = (extended = false) => [
  {
    ignores: ['**/node_modules/**', '**/build/**', '**/dist/**', "*.mjs"],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
  },

  prettierConfig,
  
  {
    languageOptions: {
      parser: tsEslint.parser,
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      prettier: prettierPlugin,

      ...(extended && {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        import: importPlugin
      })
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_$', argsIgnorePattern: '^_$' },
      ],
      'jsx-a11y/img-redundant-alt': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-tag-spacing': 'warn',
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/no-unescaped-entities': 'error',
      'import/order': 'warn',
      'import/no-commonjs': 'error',
      'import/newline-after-import': 'warn',
      'no-unused-vars': 'off',
      'no-throw-literal': 'off',
      'comma-dangle': [
        'warn',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'arrow-spacing': ['warn', { before: true, after: true }],
      'object-curly-spacing': ['warn', 'always'],
      'space-in-parens': ['warn', 'never'],
      'space-unary-ops': ['warn', { words: true, nonwords: false }],
      'spaced-comment': 'warn',
      'prefer-destructuring': 'warn',
      'no-multi-spaces': 'warn',
      semi: ['warn', 'never'],
      'space-infix-ops': 'warn',
      'comma-spacing': ['warn', { before: false, after: true }],
      'no-trailing-spaces': 'warn',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'export' },
      ],
    },
  }
]

export const rgoraiConfigBase = getConfig()

export const rgoraiConfig = tsEslint.config(
  tsEslint.configs.recommended,
  ...getConfig(true)
) 

export default rgoraiConfig
