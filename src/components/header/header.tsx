'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import { LanguageSelector } from './language-selector';
import { Menu } from './menu';
import { MenuButton } from './menu-button';
import { MenuMobile } from './menu-mobile';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<header className="bg-background border-b border-main z-100 py-2.5">
				<Container className="text-white flex justify-between items-center gap-2.5">
					<Link className="text-nowrap uppercase text-xl md:text-2xl text-white" href="#">
						BLUE ORION
					</Link>
					<Menu />
					<div className="flex gap-4">
						<div className="hidden sm:block">
							<Button href="#" variant="inline" size="md">
								Sign up
							</Button>
						</div>
						<LanguageSelector className="hidden sm:block" />
						<MenuButton isOpen={showMenu} onClick={() => setShowMenu((prev) => !prev)} />
					</div>
				</Container>
			</header>
			<MenuMobile isOpen={showMenu} />
		</>
	);
};
