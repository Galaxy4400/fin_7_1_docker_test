'use client';

import { useState } from 'react';

import { useLockBodyScroll } from '@/shared/lib/use-lock-body-scroll';
import { Button } from '@/shared/ui/button';

import { PAGES } from './constants';
import { HeaderLayout } from './ui/header-layout';
import { LanguageSelector } from './ui/language-selector';
import { Logo } from './ui/logo';
import { Menu } from './ui/menu';
import { MenuItem } from './ui/menu-item';
import { MenuMobile } from './ui/menu-mobile';

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
