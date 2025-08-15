'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
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
					'absolute top-full max-h-50 overflow-y-scroll rounded-md mt-5 transition-all',
					isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible',
				)}
			>
				<ul>
					{routing.locales.map((lang) => (
						<li key={lang}>
							<Link
								className={clsx(
									' py-2 px-4 text-lg block',
									lang === currentLang ? 'bg-white text-main' : 'bg-main text-white',
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
