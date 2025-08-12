import Link from 'next/link';

import { Container } from '@/shared/ui/container';

import { Menu } from './menu';
import { Social } from './social';

export const Footer = () => {
	return (
		<footer className="bg-background py-12 border-t border-main">
			<Container className="grid gap-6">
				<div className="flex gap-8 flex-col md:flex-row items-center">
					<div className="grid gap-6">
						<Link className="text-white font-medium text-[32px] leading-none" href="#">
							BLUE ORION
						</Link>
						<div className="gap-9 hidden md:flex">
							<Social icon={1} />
							<Social icon={2} />
							<Social icon={3} />
						</div>
					</div>
					<div className="flex justify-center items-center grow">
						<Menu />
					</div>
				</div>
				<div className="flex gap-9 md:hidden justify-center">
					<Social icon={1} />
					<Social icon={2} />
					<Social icon={3} />
				</div>
				<div className="text-sm text-gray">
					Risk Disclosure: Blue Orion is an advanced technological platform that facilitates connections
					between traders and licensed brokers for trading cryptocurrencies, currency pairs, Contracts for
					Difference (CFDs), stocks, and other financial instruments. All forms of trading and investment
					carry potential financial risks. Make informed decisions basedon thorough market analysis and your
					own financial capabilities. Our system automatically matches brokers from our partner network based
					on established algorithms. We strongly recommend that you independently verify the licensing and
					reputation of your selected broker before commencing any business relationship.
				</div>
			</Container>
		</footer>
	);
};
