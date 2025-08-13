'use server';

import z from 'zod';

const mainFormSchema = z.object({
	id: z.string().min(1, { message: 'id required' }),
	country: z.string().min(1, { message: 'country required' }),
	subid: z.string().min(1, { message: 'subid required' }),
	siteName: z.string().min(1, { message: 'siteName required' }),
	language: z.string().min(1, { message: 'language required' }),
	countryCode: z.string().min(1, { message: 'countryCode required' }),
	phoneIsValid: z.coerce.number().gt(0, { message: 'Phone not valid' }),
	firstName: z.string().min(1, { message: 'firstName required' }),
	lastName: z.string().min(1, { message: 'lastName required' }),
	email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email wrong'),
	phone: z
		.string()
		.min(1, { message: 'phone required' })
		.transform((val) => val.replace(/\D/g, '')),
});

type FullErrors = ReturnType<typeof z.treeifyError<z.infer<typeof mainFormSchema>>>;

export type State = {
	errors?: FullErrors['properties'];
	message?: string | null;
};

export const mainAction = async (_: State, formData: FormData) => {
	const rawFormData = Object.fromEntries(formData);

	const validateFormData = mainFormSchema.safeParse(rawFormData);

	console.log(validateFormData.error);

	if (!validateFormData.success) {
		const errorsTree = z.treeifyError(validateFormData.error);

		return { success: false, errors: errorsTree.properties };
	}

	return { success: true };
};
