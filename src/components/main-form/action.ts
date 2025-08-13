'use server';

export type State = {
	success: boolean;
};

export const mainAction = async (prevState: State, formData: FormData) => {
	const rawFormData = Object.fromEntries(formData);

	console.log(rawFormData);

	return { success: true };
};
