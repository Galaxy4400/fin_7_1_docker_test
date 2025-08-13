'use client';

import 'intl-tel-input/styles';

import { IntlTelInputRef } from 'intl-tel-input/react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { isValid } from 'zod/v3';

const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export const PhoneSelector = ({
	onChangeCountry,
	onChangeValidity,
}: {
	onChangeCountry: (country: string) => void;
	onChangeValidity: (isValid: boolean) => void;
}) => {
	const itiRef = useRef<IntlTelInputRef | null>(null);

	const countryChangeHandler = () => {
		const countryCode = itiRef.current?.getInstance()?.getSelectedCountryData();

		onChangeCountry(countryCode?.dialCode || '');
	};

	return (
		<IntlTelInput
			inputProps={{ name: 'phone' }}
			onChangeCountry={countryChangeHandler}
			onChangeValidity={onChangeValidity}
			initOptions={{
				initialCountry: 'ru',
				strictMode: true,
				separateDialCode: true,
			}}
			ref={itiRef}
		/>
	);
};
