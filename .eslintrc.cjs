module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh','prettier'],
    rules: {
      'react-refresh/only-export-components': 
      [
        'warn',
        { allowConstantExport: true },
      ],
      'intent':['error',2],
      'prettier/prettier':[
        'error',
        {
          endOfLine:'auto',
          arrowParens:'avoid',
          bracketSpacing:true,
          printWith:80,
          quoteProps:'as-needed',
          semi:false,
          singleQuote:true,
          tabWidth:2,
          trailingComma:'none',
          jsxSingleQuote:true,
  
        }
      ]
    },
  }
  