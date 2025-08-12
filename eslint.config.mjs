import { FlatCompat } from '@eslint/eslintrc';
import { globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	globalIgnores(['.next', 'dist']),

	...compat.extends('next/core-web-vitals', 'next/typescript'),

	{
		plugins: {
			prettier,
			import: importPlugin,
			'simple-import-sort': simpleImportSortPlugin,
		},
		rules: {
			quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'prettier/prettier': ['error', { printWidth: 110 }],
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',
			'import/no-cycle': 'warn',
			'import/no-duplicates': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
		},
	},
];

export default eslintConfig;
