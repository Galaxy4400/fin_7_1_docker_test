import { COUNTRY_CURRENCY, CURRENCY_SYMBOL } from './constants';

export type CountryCode = keyof typeof COUNTRY_CURRENCY;
export type CurrencyCode = keyof typeof CURRENCY_SYMBOL;
export type CurrencySymbol = (typeof CURRENCY_SYMBOL)[keyof typeof CURRENCY_SYMBOL];

export type GeoDataType = {
	country: CountryCode;
	currentRate: number;
	localCurrency: CurrencyCode;
	localCurrencySymbol: CurrencySymbol;
};

export type GeoContextType = {
	data: GeoDataType;
	convertToLocalCurrency: (value: number) => number;
};
