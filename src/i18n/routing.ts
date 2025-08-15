import { defineRouting } from 'next-intl/routing';

const defaultLanguage = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as string;
const availableLocales = process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES?.split(',') as string[];

export const routing = defineRouting({
	locales: availableLocales,
	defaultLocale: defaultLanguage,
	localePrefix: 'as-needed',
});
