module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['airbnb-base'],
    rules: {
        'import/prefer-default-export': 'off',
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        semi: ['error', 'always'],
    },
};
