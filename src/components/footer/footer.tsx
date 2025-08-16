import { PAGES, SUB_PAGES } from '@/shared/constants';

import { FooterLayout, Logo, Menu, MenuItem, Social } from './ui';

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
