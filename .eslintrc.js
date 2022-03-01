module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-for': 'off',
    'linebreak-style': 0,
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss']},
    ],
    'react/state-in-constructor': [0],
    'react-native/no-inline-styles': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'no-tabs': 0,
    'react/prop-types': 'off',
    'no-use-before-define': ['error', {functions: false, variables: false}],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-shadow': 'off',
    'react/destructuring-assignment': [1, 'always', {ignoreClassFields: true}],
  },
}
