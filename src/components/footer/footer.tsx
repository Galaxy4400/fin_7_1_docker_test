import { PAGES, SUB_PAGES } from '@/shared/constants';

import { FooterLayout } from './ui/footer-layout';
import { Logo } from './ui/logo';
import { Menu } from './ui/menu';
import { MenuItem } from './ui/menu-item';
import { Social } from './ui/social';

export const Footer = () => {
	return (
		<FooterLayout
			logo={<Logo />}
			menu={
				<Menu
					items={PAGES.map((page) => (
						<MenuItem href={page.href} key={page.name}>
							{page.name}
						</MenuItem>
					))}
					subitems={SUB_PAGES.map((page) => (
						<MenuItem href={page.href} key={page.name}>
							{page.name}
						</MenuItem>
					))}
				/>
			}
			socials={
				<>
					<Social icon={1} />
					<Social icon={2} />
					<Social icon={3} />
				</>
			}
		/>
	);
};
