'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { COUNTRY_CURRENCY, CURRENCY_SYMBOL } from './constants';
import { CountryCode, GeoContextType, GeoDataType } from './types';

const GeoContext = createContext<GeoContextType | null>(null);

const FROM = 'USD';

const initData: GeoDataType = {
	country: 'US',
	currentRate: 1,
	localCurrency: 'USD',
	localCurrencySymbol: '$',
};

export const GeoProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<GeoDataType>(initData);

	const convertToLocalCurrency = (value: number) => {
		return Math.ceil(value * data.currentRate);
	};

	useEffect(() => {
		const getGeoData = async () => {
			try {
				const geoResponse = await fetch('https://ipapi.co/json/');
				const geoData = (await geoResponse.json()) as { country: CountryCode };

				if (!geoData?.country) return initData;

				const country = geoData.country;
				const localCurrency = COUNTRY_CURRENCY[country];
				const localCurrencySymbol = CURRENCY_SYMBOL[localCurrency];

				const currencyResponse = await fetch(
					`https://api.frankfurter.app/latest?from=${FROM}&to=${localCurrency}`,
				);
				const currencyData = await currencyResponse.json();

				if (!currencyData.rates[localCurrency]) return initData;

				const currentRate = Number(currencyData.rates[localCurrency]);

				setData((prev) => ({ ...prev, country, currentRate, localCurrency, localCurrencySymbol }));
			} catch (error) {
				console.log(error);
			}
		};

		getGeoData();
	}, []);

	return <GeoContext.Provider value={{ data, convertToLocalCurrency }}>{children}</GeoContext.Provider>;
};

export const useGeo = () => {
	const context = useContext(GeoContext);

	if (!context) throw new Error('useGeo must be used inside GeoProvider');

	return context;
};
