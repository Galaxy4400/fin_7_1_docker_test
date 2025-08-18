'use client';

import {
	Button,
	Container,
	H2,
	H4,
	MenuArrowIcon,
	Spoiler,
	SpoilerButton,
	SpoilerContent,
	SpoilerItem,
} from '@/shared/ui';

export const Faq = () => {
	return (
		<div className="relative py-12 md:py-20">
			<div
				className="absolute top-[220px] left-[-96px] h-[257px] w-[445px] -rotate-[20deg] rounded-[445px]
					bg-[rgba(255,119,126,0.30)] blur-[100px]"
			/>
			<div
				className="absolute top-[100px] right-[-131.457px] h-[257px] w-[445px] rotate-[50deg] rounded-[445px]
					bg-[rgba(214,56,153,0.30)] blur-[100px]"
			/>
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
							<MenuArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
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
							<MenuArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
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
							<MenuArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
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
