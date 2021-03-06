module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'globals': {
        '$': true,
        '$$': true,
        'browser': true,
        'describe': true,
        'before': true,
        'after': true,
        'beforeEach': true,
        'afterEach': true,
        'it': true
    },
    'extends': [
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'semi': [
            2,
            'always'
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'indent': [
            2,
            4,
            {
                'SwitchCase': 1
            }
        ],
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true
            }
        ],
        'no-empty': 2,
        'no-implicit-globals': 2,
        'no-unused-expressions': 1,
        'no-unused-labels': 1,
        'no-shadow': 1,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 1,
        'no-use-before-define': [
            2,
            {
                'functions': false,
                'classes': true
            }
        ],
        'no-var': 1,
        'block-spacing': 2,
        'func-call-spacing': 2,
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'return'
            }
        ],
        'function-paren-newline': [
            'error',
            'never'
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'operator-assignment': 'error',
        'operator-linebreak': [
            'error',
            'before'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-return': 'error',
        'no-whitespace-before-property': 'error',
        'require-await': 'error',
        'rest-spread-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'warn',
        'switch-colon-spacing': 'error',
        'wrap-iife': 'error'
    }
};
