'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { COUNTRY_CURRENCY, CountryCode, CURRENCY_SYMBOL, CurrencyCode, CurrencySymbol } from './constants';

type GeoDataType = {
	country: CountryCode;
	currentRate: number;
	localCurrency: CurrencyCode;
	localCurrencySymbol: CurrencySymbol;
};

type GeoContextType = {
	data: GeoDataType;
	loading: boolean;
};

const GeoContext = createContext<GeoContextType | null>(null);

const FROM = 'USD';
const initData: GeoDataType = {
	country: 'US',
	currentRate: 0,
	localCurrency: 'USD',
	localCurrencySymbol: '$',
};

export const GeoProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<GeoDataType>(initData);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const getGeoData = async () => {
			const result: GeoDataType = initData;

			const geoResponse = await fetch('https://ipapi.co/json/');
			const geoData = (await geoResponse.json()) as { country: CountryCode };

			if (geoData?.country) {
				result.country = geoData.country;
			}
			result.localCurrency = COUNTRY_CURRENCY[result.country] as CurrencyCode;
			result.localCurrencySymbol = CURRENCY_SYMBOL[result.localCurrency] as CurrencySymbol;

			const currencyResponse = await fetch(
				`https://api.frankfurter.app/latest?from=${FROM}&to=${result.localCurrency}`,
			);
			const currencyData = await currencyResponse.json();
			const rate = currencyData.rates[result.localCurrency];

			result.currentRate = +rate;

			setData(result);
		};

		getGeoData();
		setLoading(false);
	}, []);

	return <GeoContext.Provider value={{ data, loading }}>{children}</GeoContext.Provider>;
};

export const useGeo = () => {
	const context = useContext(GeoContext);

	if (!context) throw new Error('useGeo must be used inside GeoProvider');

	return context;
};
