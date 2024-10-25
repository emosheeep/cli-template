import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'antfu/consistent-list-newline': 'off',
    'no-console': 'off',
    'style/semi': ['error', 'always'],
    'style/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
        },
      },
    ],
    'style/arrow-parens': ['error', 'always'],
    'style/comma-dangle': ['error', 'always-multiline'],
    'node/no-callback-literal': 'off',
    'ts/no-var-requires': 'off',
    'ts/no-explicit-any': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/no-non-null-assertion': 'off',
    'style/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
});
