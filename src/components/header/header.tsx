'use client';

import { useState } from 'react';

import { PAGES } from '@/shared/constants';
import { useLockBodyScroll } from '@/shared/lib/use-lock-body-scroll';
import { Button } from '@/shared/ui/button';

import { HeaderLayout, LanguageSelector, Logo, Menu, MenuItem, MenuMobile } from './ui';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	useLockBodyScroll(showMenu);

	return (
		<HeaderLayout
			logo={<Logo />}
			menu={
				<Menu
					items={PAGES.map((page) => (
						<MenuItem href={page.href} key={page.name}>
							{page.name}
						</MenuItem>
					))}
				/>
			}
			actions={
				<Button href="#" variant="inline" size="md">
					Sign up
				</Button>
			}
			langSelector={<LanguageSelector />}
			menuButton={
				<Button variant="inline" onClick={() => setShowMenu((prev) => !prev)} active={showMenu}>
					Menu
				</Button>
			}
			menuMobile={
				<MenuMobile
					isOpen={showMenu}
					actions={
						<>
							<Button href="#" variant="gradient">
								Sign up
							</Button>
							<LanguageSelector />
						</>
					}
					items={PAGES.map((page) => (
						<MenuItem href={page.href} key={page.name}>
							{page.name}
						</MenuItem>
					))}
				/>
			}
		/>
	);
};
