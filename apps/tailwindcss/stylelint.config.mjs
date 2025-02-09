export default {
  extends: ['@acme/stylelint-config'],
  rules: {
    'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
  },
};
