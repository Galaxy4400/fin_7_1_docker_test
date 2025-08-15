import { defineRouting } from 'next-intl/routing';

const defaultLanguage = process.env.DEFAULT_LANGUAGE as string;
const availableLocales = process.env.AVAILABLE_LANGUAGES?.split(',') as string[];

export const routing = defineRouting({
	locales: availableLocales,
	defaultLocale: defaultLanguage,
	localePrefix: 'as-needed',
});
