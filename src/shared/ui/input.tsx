import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number';
	variant?: 'default' | 'special';
}

export const Input = ({ className, value, onChange, type = 'text', variant = 'default' }: InputProps) => {
	return (
		<input
			className={clsx(
				className,
				'block w-full text-xl leading-tight py-2.5 px-4 h-[46px] rounded-lg transition-all',
				{
					default: 'text-black bg-white border border-[#2c2c2c]',
					special: 'text-main bg-white border border-main',
				}[variant],
			)}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};
