module.exports = {
  plugins: ['react-hooks', 'testing-library'],
  rules: {
    indent: ['error', 2],
    'nonblock-statement-body-position': 0,
    'operator-linebreak': 1,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/prop-types': 0,
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  extends: ['airbnb', 'plugin:testing-library/recommended', "plugin:testing-library/react"],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
};