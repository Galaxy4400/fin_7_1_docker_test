'use client';

import 'intl-tel-input/styles';

import { IntlTelInputRef } from 'intl-tel-input/react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export const PhoneSelector = ({ onCountryChange }: { onCountryChange: (country: string) => void }) => {
	const itiRef = useRef<IntlTelInputRef | null>(null);

	const countryChangeHandler = () => {
		const countryCode = itiRef.current?.getInstance()?.getSelectedCountryData();

		onCountryChange(countryCode?.dialCode || '');
	};

	return (
		<IntlTelInput
			inputProps={{ name: 'phone' }}
			onChangeCountry={countryChangeHandler}
			initOptions={{
				initialCountry: 'ru',
				strictMode: true,
				separateDialCode: true,
			}}
			ref={itiRef}
		/>
	);
};
