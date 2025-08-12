export const COUNTRY_CURRENCY = {
	AU: 'AUD', // Australia
	BG: 'BGN', // Bulgaria
	BR: 'BRL', // Brazil
	CA: 'CAD', // Canada
	CH: 'CHF', // Switzerland
	CN: 'CNY', // China
	CZ: 'CZK', // Czech Republic
	DK: 'DKK', // Denmark
	DE: 'EUR', // Germany
	FR: 'EUR', // France
	IT: 'EUR', // Italy
	ES: 'EUR', // Spain
	IE: 'EUR', // Ireland
	AT: 'EUR', // Austria
	BE: 'EUR', // Belgium
	PT: 'EUR', // Portugal
	NL: 'EUR', // Netherlands
	GR: 'EUR', // Greece
	FI: 'EUR', // Finland
	EE: 'EUR', // Estonia
	LV: 'EUR', // Latvia
	LT: 'EUR', // Lithuania
	SK: 'EUR', // Slovakia
	SI: 'EUR', // Slovenia
	CY: 'EUR', // Cyprus
	LU: 'EUR', // Luxembourg
	MT: 'EUR', // Malta
	GB: 'GBP', // United Kingdom
	HK: 'HKD', // Hong Kong
	HR: 'HRK', // Croatia
	HU: 'HUF', // Hungary
	ID: 'IDR', // Indonesia
	IL: 'ILS', // Israel
	IN: 'INR', // India
	IS: 'ISK', // Iceland
	JP: 'JPY', // Japan
	KR: 'KRW', // South Korea
	MX: 'MXN', // Mexico
	MY: 'MYR', // Malaysia
	NO: 'NOK', // Norway
	NZ: 'NZD', // New Zealand
	PH: 'PHP', // Philippines
	PL: 'PLN', // Poland
	RO: 'RON', // Romania
	SE: 'SEK', // Sweden
	SG: 'SGD', // Singapore
	TH: 'THB', // Thailand
	TR: 'TRY', // Turkey
	US: 'USD', // United States
	ZA: 'ZAR', // South Africa
} as const;

export const CURRENCY_SYMBOL = {
	AUD: 'A$',
	BGN: 'лв',
	BRL: 'R$',
	CAD: 'CA$',
	CHF: 'CHF',
	CNY: '¥',
	CZK: 'Kč',
	DKK: 'kr',
	EUR: '€',
	GBP: '£',
	HKD: 'HK$',
	HRK: 'kn',
	HUF: 'Ft',
	IDR: 'Rp',
	ILS: '₪',
	INR: '₹',
	ISK: 'kr',
	JPY: '¥',
	KRW: '₩',
	MXN: 'MX$',
	MYR: 'RM',
	NOK: 'kr',
	NZD: 'NZ$',
	PHP: '₱',
	PLN: 'zł',
	RON: 'lei',
	SEK: 'kr',
	SGD: 'S$',
	THB: '฿',
	TRY: '₺',
	USD: '$',
	ZAR: 'R',
} as const;

export type CountryCode = keyof typeof COUNTRY_CURRENCY;
export type CurrencyCode = keyof typeof CURRENCY_SYMBOL;
export type CurrencySymbol = (typeof CURRENCY_SYMBOL)[keyof typeof CURRENCY_SYMBOL];
