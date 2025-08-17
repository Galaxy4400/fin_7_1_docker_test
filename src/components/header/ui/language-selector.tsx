'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Link } from '@/i18n/navigation';
import { AVAILABLE_LANGUAGES } from '@/shared/constants';
import { Button } from '@/shared/ui/button';

export const LanguageSelector = ({ className }: { className?: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const currentLang = useLocale();

	useOnClickOutside(ref as RefObject<HTMLElement>, () => setIsOpen(false));

	return (
		<div className={clsx(className, 'relative')} ref={ref}>
			<Button variant="inline" onClick={() => setIsOpen((prev) => !prev)}>
				{currentLang}
			</Button>
			<nav
				className={clsx(
					'absolute top-full mt-5 max-h-50 overflow-y-scroll rounded-md transition-all',
					isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
				)}
			>
				<ul>
					{AVAILABLE_LANGUAGES.map((lang) => (
						<li key={lang}>
							<Link
								className={clsx(
									' block px-4 py-2 text-lg',
									lang === currentLang ? 'text-main bg-white' : 'bg-main text-white',
								)}
								locale={lang}
								href="/"
							>
								{lang}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
