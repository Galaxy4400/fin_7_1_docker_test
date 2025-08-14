'use client';

import 'intl-tel-input/styles';

import clsx from 'clsx';
import { IntlTelInputRef } from 'intl-tel-input/react';
import dynamic from 'next/dynamic';
import { useActionState, useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import { FormState, mainFormAction, MainFormData } from './main-form-action';

const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

const initState: FormState = {};
const initFormData = {
	firstName: '',
	lastName: '',
	email: '',
};

export const MainForm = () => {
	const itiRef = useRef<IntlTelInputRef | null>(null);
	const [phoneIsValid, setPhoneIsValid] = useState(false);
	const [countryCode, setCountryCode] = useState('');

	const [formState, formAction, pending] = useActionState(mainFormAction, initState);

	const [userFormData, setUserFormData] =
		useState<Partial<Omit<MainFormData, 'phoneIsValid' | 'countryCode'>>>(initFormData);

	const formData = {
		...formState?.values,
		...userFormData,
	};

	const isDirty = Object.entries(formData).some(([key, value]) => formState?.values?.[key] !== value);

	const isFormSubmited = !!formState?.values;
	const showErrors = (isFormSubmited && !isDirty) || !phoneIsValid;
	const showPhoneError = isFormSubmited && !phoneIsValid;

	return (
		<form className="grid gap-4" action={formAction}>
			<input type="hidden" name="countryCode" value={countryCode} />
			<input type="hidden" name="phoneIsValid" value={+phoneIsValid} />

			<div className="grid gap-2">
				<div className="grid sm:grid-cols-2 gap-2">
					<Input
						name="firstName"
						type="text"
						value={formData.firstName}
						onChange={(e) => setUserFormData((prev) => ({ ...prev, firstName: e.target.value }))}
						placeholder="First Name"
						error={!!formState?.errors?.firstName && showErrors}
					/>
					<Input
						name="lastName"
						type="text"
						value={formData.lastName}
						onChange={(e) => setUserFormData((prev) => ({ ...prev, lastName: e.target.value }))}
						placeholder="Last Name"
						error={!!formState?.errors?.lastName && showErrors}
					/>
				</div>
				<div>
					<Input
						name="email"
						type="email"
						value={formData.email}
						onChange={(e) => setUserFormData((prev) => ({ ...prev, email: e.target.value }))}
						placeholder="Your email"
						error={!!formState?.errors?.email && showErrors}
					/>
				</div>
				<div>
					<IntlTelInput
						inputProps={{
							name: 'phone',
							className: clsx('iti__tel-input', showPhoneError && 'error'),
						}}
						onChangeValidity={(isValid) => setPhoneIsValid(isValid)}
						onChangeCountry={(country) => setCountryCode(country)}
						initOptions={{
							initialCountry: 'ru',
							strictMode: true,
							separateDialCode: true,
						}}
						ref={itiRef}
					/>
				</div>
			</div>
			<Button type="submit" disabled={showErrors && isFormSubmited}>
				Sign up
			</Button>
			<div className="text-sm text-white leading-[140%]">
				By entering your personal information and clicking the button, you agree to the website’s Privacy
				Policy and Terms & Conditions.
			</div>
		</form>
	);
};
