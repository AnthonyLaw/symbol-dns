module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['apply'],
            },
        ],
        indentation: [4],
        'no-descending-specificity': null,
        'comment-empty-line-before': null,
        'no-empty-source': null,
    },
};
