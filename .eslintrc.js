module.exports = {
  'env': {
    'es6': true,
    'mocha': true,
    'node': true,
  },
  'extends': 'airbnb-base',
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
      'modules': true,
    },
    'sourceType': 'module',
  },
  'rules': {
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  },
};
