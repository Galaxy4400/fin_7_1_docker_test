'use server';

import z, { success } from 'zod';

const formDataSchema = z.object({
	countryCode: z.string().min(1, 'Country code required'),
	phoneIsValid: z.coerce.number().refine((val) => val, { message: 'Phone not valid' }),
	firstName: z.string().min(1, 'First name required'),
	lastName: z.string().min(1, 'Last name required'),
	email: z.email({ message: 'Invalid email' }),
	phone: z.string().transform((val) => val.replace(/\D/g, '')),
});

export type MainFormData = z.infer<typeof formDataSchema>;

export type FormState = {
	values?: { [k: string]: FormDataEntryValue };
	errors?: { [K in keyof MainFormData]?: string[] };
	success?: boolean;
};

export const mainFormAction = async (_: FormState | undefined, formData: FormData) => {
	const rawFormData = Object.fromEntries(formData);

	const validatedData = formDataSchema.safeParse(rawFormData);

	if (!validatedData.success) {
		const errors = z.flattenError(validatedData.error).fieldErrors;
		return { values: rawFormData, errors: errors, success: false };
	}

	return { success: true };
};
