'use server';

export type State = {
	message: string | null;
};

export const mainAction = async (_: State, formData: FormData) => {
	const rawFormData = Object.fromEntries(formData);

	console.log('rawFormData', rawFormData);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return { message: 'Успешно сохранено!' };
};
