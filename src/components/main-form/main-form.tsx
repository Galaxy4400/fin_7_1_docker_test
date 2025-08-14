'use client';

import 'intl-tel-input/styles';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useActionState, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Loader } from '@/shared/ui/loader';

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
	const showErrors = isFormSubmited && !isDirty;
	const showPhoneError = isFormSubmited && !phoneIsValid;

	return (
		<form className="relative grid gap-4" action={formAction}>
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
					/>
				</div>
			</div>
			<Button type="submit" disabled={formState?.success}>
				Sign up
			</Button>
			<div className="text-sm text-white leading-[140%]">
				By entering your personal information and clicking the button, you agree to the website’s Privacy
				Policy and Terms & Conditions.
			</div>
			{pending && (
				<div className="absolute -inset-4 bg-slate-200/50 z-10 rounded-xl">
					<Loader />
				</div>
			)}
		</form>
	);
};
