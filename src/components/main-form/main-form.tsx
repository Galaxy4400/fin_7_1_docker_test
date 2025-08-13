'use client';

import { useActionState, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import { mainAction, State } from './action';
import { PhoneSelector } from './phone-selector';

export const MainForm = () => {
	const initialState: State = { message: null };
	const [state, formAction, pending] = useActionState(mainAction, initialState);
	const [countryCode, setCountryCode] = useState('');

	return (
		<form className="grid gap-4" action={formAction}>
			<input type="hidden" name="id" value="m1" />
			<input type="hidden" name="country" value="country" />
			<input type="hidden" name="subid" value="subid" />
			<input type="hidden" name="sitename" value="sitename" />
			<input type="hidden" name="language" value="lang" />
			<input type="hidden" name="countrycode" value={countryCode} />

			<div className="grid gap-2">
				<div className="grid grid-cols-2 gap-2">
					<Input name="first_name" type="text" placeholder="First Name" />
					<Input name="last_name" type="text" placeholder="Last Name" />
				</div>
				<div>
					<Input name="email" type="email" placeholder="Your email" />
				</div>
				<div>
					<PhoneSelector onCountryChange={(country) => setCountryCode(country)} />
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
