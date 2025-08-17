import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number' | 'email';
	variant?: 'default' | 'special';
	error?: boolean;
}

export const Input = ({
	className,
	value,
	onChange,
	type = 'text',
	variant = 'default',
	error = false,
	...props
}: InputProps) => {
	return (
		<input
			className={clsx(
				className,
				'block h-[46px] w-full rounded-lg border px-4 py-2.5 text-xl leading-tight disabled:opacity-70',
				{
					default: clsx(
						'border border-white bg-white text-black',
						error && 'outline-2 -outline-offset-3 outline-[#ff0000]',
					),
					special: 'text-main bg-white border border-main',
				}[variant],
			)}
			type={type}
			value={value}
			onChange={onChange}
			{...props}
		/>
	);
};
