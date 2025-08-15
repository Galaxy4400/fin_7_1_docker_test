import clsx from 'clsx';

import { Link } from '@/i18n/navigation';

export const LanguageItem = ({
	isActive,
	value,
	locale,
	href,
}: {
	href: string;
	locale: string;
	isActive?: boolean;
	value: string;
}) => {
	return (
		<li>
			<Link
				className={clsx(' py-2 px-4 text-lg block', isActive ? 'bg-white text-main' : 'bg-main text-white')}
				locale={locale}
				href={href}
			>
				{value}
			</Link>
		</li>
	);
};
