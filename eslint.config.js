import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion:'latest',
      sourceType: 'module',
    }
  },

     pluginJs.configs.recommended,
     pluginReact.configs.flat.recommended,
     eslintPluginPrettier.configs['jsx-runtime'],
     pluginReact.configs.flat['react-hooks/recommended'],
 
  {
    rules:{
      "no-unused-vars":"warn",
      "no-undef":"warn",
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true } ],
      'indent':['error',2],
      'prettier/prettier':[
        'error',
        {
          endOfLine:'auto',
          arrowParens:'avoid',
          bracketSpacing:true,
          printWidth: 80,
          quoteProps:'as-needed',
          semi:false,
          singleQuote:true,
          tabWidth:2,
          trailingComma:'none',
          jsxSingleQuote:true
        }
      ]
   
    }
  }
];