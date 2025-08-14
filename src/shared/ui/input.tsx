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
				'block w-full text-xl border leading-tight py-2.5 px-4 h-[46px] rounded-lg',
				{
					default: clsx(
						'text-black bg-white border border-white',
						error && 'outline-2 outline-[#ff0000] -outline-offset-3',
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
