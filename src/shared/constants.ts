import { Page } from './types';

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME as string;
export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE as string;
export const AVAILABLE_LANGUAGES = process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES?.split(',') as string[];

export const PAGES: Page[] = [
	{ name: 'Product', href: '#' },
	{ name: 'Offer', href: '#' },
	{ name: 'FAQ', href: '#' },
	{ name: 'Blog', href: '#' },
	{ name: 'Contacts', href: '#' },
];

export const SUB_PAGES: Page[] = [
	{ name: 'Privacy Policy', href: '#' },
	{ name: 'Conditions of Use', href: '#' },
];
