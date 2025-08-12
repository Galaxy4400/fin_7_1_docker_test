import clsx from 'clsx';
import Link from 'next/link';

export const LanguageItem = ({
	isActive,
	value,
	href,
}: {
	href: string;
	isActive?: boolean;
	value: string;
}) => {
	return (
		<li>
			<Link
				className={clsx(' py-2 px-4 text-lg block', isActive ? 'bg-white text-main' : 'bg-main text-white')}
				href={href}
			>
				{value}
			</Link>
		</li>
	);
};
