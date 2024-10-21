// eslint.config.js
import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginRecommended from "eslint-plugin-prettier/recommended";
import globals from 'globals';

export default [
  // Global ignore patterns
  {
    ignores: [
      'dist',
      'coverage',
      'minio',
      'vitest.config.js',
      'processes.config.js',
      'src/generated/*',
    ],
  },
  // Base JavaScript configuration
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.es2021,
        ...globals.node,
        
        fetch: 'readonly', // Add 'fetch' as a read-only global
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      pluginRecommended: pluginRecommended,
    },
    rules: {
      // Spread the recommended rules from the TypeScript plugin
      ...typescriptPlugin.configs.recommended.rules,
      // Your custom rules
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      'prettier/prettier': 'error',
    },
  },
];
