module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript'
  ].map(require.resolve),
  parserOptions: {
    project: '**/tsconfig.json',
    sourceType: 'module'
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '**/tsconfig.json',
        sourceType: 'module'
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/no-relative-packages': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['packages/*'],
            message: "Please use '@tekmetric/*' imports instead"
          }
        ]
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'unknown',
          ['parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'unknown',
            position: 'after'
          }
        ]
      }
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
        "@typescript-eslint/no-invalid-void-type": "off",
        "react/jsx-no-leaked-render": "off",
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
          }
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false
          }
        ]
      }
    }
  ]
}
