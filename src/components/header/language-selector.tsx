'use client';

import clsx from 'clsx';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { routing } from '@/i18n/routing';
import { Button } from '@/shared/ui/button';

import { LanguageItem } from './language-item';

export const LanguageSelector = ({ className }: { className?: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(ref as RefObject<HTMLElement>, () => setIsOpen(false));

	return (
		<div className={clsx(className, 'relative')} ref={ref}>
			<Button variant="inline" onClick={() => setIsOpen((prev) => !prev)}>
				En
			</Button>
			<nav
				className={clsx(
					'absolute top-full max-h-50 overflow-y-scroll rounded-md mt-5 transition-all',
					isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible',
				)}
			>
				<ul>
					{routing.locales.map((lang) => (
						<LanguageItem href="/" locale={lang} value={lang} key={lang} />
					))}
				</ul>
			</nav>
		</div>
	);
};
