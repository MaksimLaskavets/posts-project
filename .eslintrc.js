module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
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
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.scss']}],
    'react/state-in-constructor': [0],
    'react-native/no-inline-styles': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-tabs': 0,
    'react/prop-types': 'off',
    'no-use-before-define': ['error', {variables: false}],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-shadow': 'off',
    'react/destructuring-assignment': [1, 'always', {ignoreClassFields: true}],
  },
}
