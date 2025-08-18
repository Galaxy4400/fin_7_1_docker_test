'use client';

import {
	ArrowIcon,
	Button,
	Container,
	H2,
	Spoiler,
	SpoilerButton,
	SpoilerContent,
	SpoilerItem,
} from '@/shared/ui';
import { H4 } from '@/shared/ui/h4';

export const Faq = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-6 md:gap-12" size="sm">
				<div className="grid gap-4 md:gap-8">
					<H2 className="md:text-center">Crypto FAQ</H2>
				</div>
				<Spoiler className="grid gap-3 md:gap-6">
					<SpoilerItem className="border-b-gray border-b" itemName={1}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between px-3 py-2 text-left transition-colors md:px-6 md:py-2.5"
						>
							<H4>Is my money safe?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent className="px-3 pt-0.5 pb-1.5 text-sm md:px-6 md:pt-1.5 md:pb-2.5 md:text-base">
							Your security is our priority. Blue Orion uses bank-grade encryption, two-factor authentication
							(2FA), and cold storage for digital assets. We comply with strict financial regulations in
							[Country] and undergo regular audits. Funds are insured against unauthorized access, so you can
							trade with confidence.
						</SpoilerContent>
					</SpoilerItem>
					<SpoilerItem className="border-b-gray border-b" itemName={2}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between px-3 py-2 text-left transition-colors md:px-6 md:py-2.5"
						>
							<H4>Is crypto-trading complicated?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent className="px-3 pt-0.5 pb-1.5 text-sm md:px-6 md:pt-1.5 md:pb-2.5 md:text-base">
							Your security is our priority. Blue Orion uses bank-grade encryption, two-factor authentication
							(2FA), and cold storage for digital assets. We comply with strict financial regulations in
							[Country] and undergo regular audits. Funds are insured against unauthorized access, so you can
							trade with confidence.
						</SpoilerContent>
					</SpoilerItem>
					<SpoilerItem className="border-b-gray border-b" itemName={3}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between px-3 py-2 text-left transition-colors md:px-6 md:py-2.5"
						>
							<H4>How fast are withdrawals?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent className="px-3 pt-0.5 pb-1.5 text-sm md:px-6 md:pt-1.5 md:pb-2.5 md:text-base">
							Your security is our priority. Blue Orion uses bank-grade encryption, two-factor authentication
							(2FA), and cold storage for digital assets. We comply with strict financial regulations in
							[Country] and undergo regular audits. Funds are insured against unauthorized access, so you can
							trade with confidence.
						</SpoilerContent>
					</SpoilerItem>
				</Spoiler>
				<div className="flex justify-center">
					<div className="w-full md:w-[395px]">
						<Button href="#" variant="inline" size="full">
							LEARN MORE
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};
