import { Page, Partner } from './types';

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

import partnerSrc1 from '@/shared/images/partners/1.svg';
import partnerSrc2 from '@/shared/images/partners/2.svg';
import partnerSrc3 from '@/shared/images/partners/3.svg';
import partnerSrc4 from '@/shared/images/partners/4.svg';
import partnerSrc5 from '@/shared/images/partners/5.svg';
import partnerSrc6 from '@/shared/images/partners/6.svg';
import partnerSrc7 from '@/shared/images/partners/7.svg';
import partnerSrc8 from '@/shared/images/partners/8.svg';

export const PARTNERS: Partner[] = [
	{ src: partnerSrc1, name: 'partner1' },
	{ src: partnerSrc2, name: 'partner2' },
	{ src: partnerSrc3, name: 'partner3' },
	{ src: partnerSrc4, name: 'partner4' },
	{ src: partnerSrc5, name: 'partner5' },
	{ src: partnerSrc6, name: 'partner6' },
	{ src: partnerSrc7, name: 'partner7' },
	{ src: partnerSrc8, name: 'partner8' },
];
