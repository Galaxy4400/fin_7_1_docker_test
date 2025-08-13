'use client';

import { useActionState, useState } from 'react';
import { isValid } from 'zod/v3';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import { mainAction } from './action';
import { PhoneSelector } from './phone-selector';

export const MainForm = ({ formId }: { formId: string }) => {
	const [phoneIsValid, setPhoneIsValid] = useState(false);
	const [countryCode, setCountryCode] = useState('');
	const [state, formAction, pending] = useActionState(mainAction, { success: false });

	return (
		<form className="grid gap-4" action={formAction}>
			<input type="hidden" name="id" value={formId} />
			<input type="hidden" name="country" value="country" />
			<input type="hidden" name="subid" value="subid" />
			<input type="hidden" name="siteName" value="sitename" />
			<input type="hidden" name="language" value="lang" />
			<input type="hidden" name="countryСode" value={countryCode} />
			<input type="hidden" name="phoneIsValid" value={+phoneIsValid} />

			<div className="grid gap-2">
				<div className="grid sm:grid-cols-2 gap-2">
					<Input name="first_name" type="text" placeholder="First Name" />
					<Input name="last_name" type="text" placeholder="Last Name" />
				</div>
				<div>
					<Input name="email" type="email" placeholder="Your email" />
				</div>
				<div>
					<PhoneSelector
						onChangeValidity={(isValid) => setPhoneIsValid(isValid)}
						onChangeCountry={(country) => setCountryCode(country)}
					/>
				</div>
			</div>
			<Button type="submit">Sign up</Button>
			<div className="text-sm text-white leading-[140%]">
				By entering your personal information and clicking the button, you agree to the website’s Privacy
				Policy and Terms & Conditions.
			</div>
		</form>
	);
};
