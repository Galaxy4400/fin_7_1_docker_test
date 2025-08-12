import clsx from 'clsx';

import { Button } from '@/shared/ui/button';

import { LanguageSelector } from './language-selector';
import { MenuItem } from './menu-item';

export const MenuMobile = ({ isOpen = false }: { isOpen?: boolean }) => {
	return (
		<div
			className={clsx(
				`z-50 fixed top-0 left-0 w-full h-screen transition-all duration-300 bg-background flex items-center
				justify-center`,
				isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible',
			)}
		>
			<div className="grid gap-13">
				<div className="flex gap-6 sm:hidden">
					<Button href="#" variant="gradient">
						Sign up
					</Button>
					<LanguageSelector />
				</div>
				<nav className={clsx('flex items-center justify-center')}>
					<ul className="grid gap-3 text-center">
						<MenuItem className="text-2xl" href="#">
							Product
						</MenuItem>
						<MenuItem className="text-2xl" href="#">
							Offer
						</MenuItem>
						<MenuItem className="text-2xl" href="#">
							FAQ
						</MenuItem>
						<MenuItem className="text-2xl" href="#">
							Blog
						</MenuItem>
						<MenuItem className="text-2xl" href="#">
							Contacts
						</MenuItem>
					</ul>
				</nav>
			</div>
		</div>
	);
};
