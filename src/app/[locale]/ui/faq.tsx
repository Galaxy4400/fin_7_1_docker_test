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
				<Spoiler className="grid gap-3 md:gap-6" active={2}>
					<SpoilerItem className="border-b-gray border-b px-3 py-2 md:px-6 md:py-2.5" itemName={1}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between text-left transition-colors"
						>
							<H4>Is my money safe?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent
							className="max-h-[999px] overflow-hidden transition-[max-height] duration-500
								aria-hidden:max-h-0"
							isManual={true}
						>
							<div className="pt-2.5 text-sm md:pt-4 md:text-base">
								Your security is our priority. Blue Orion uses bank-grade encryption, two-factor
								authentication (2FA), and cold storage for digital assets. We comply with strict financial
								regulations in [Country] and undergo regular audits. Funds are insured against unauthorized
								access, so you can trade with confidence.
							</div>
						</SpoilerContent>
					</SpoilerItem>
					<SpoilerItem className="border-b-gray border-b px-3 py-2 md:px-6 md:py-2.5" itemName={2}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between text-left transition-colors"
						>
							<H4>Is crypto-trading complicated?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent
							className="max-h-[999px] overflow-hidden transition-[max-height] duration-500
								aria-hidden:max-h-0"
							isManual={true}
						>
							<div className="pt-2.5 text-sm md:pt-4 md:text-base">
								Your security is our priority. Blue Orion uses bank-grade encryption, two-factor
								authentication (2FA), and cold storage for digital assets. We comply with strict financial
								regulations in [Country] and undergo regular audits. Funds are insured against unauthorized
								access, so you can trade with confidence.
							</div>
						</SpoilerContent>
					</SpoilerItem>
					<SpoilerItem className="border-b-gray border-b px-3 py-2 md:px-6 md:py-2.5" itemName={3}>
						<SpoilerButton
							className="group hover:text-main aria-expanded:text-main flex w-full cursor-pointer
								justify-between text-left transition-colors"
						>
							<H4>How fast are withdrawals?</H4>
							<ArrowIcon className="transition-transform group-aria-expanded:-scale-100" />
						</SpoilerButton>
						<SpoilerContent
							className="max-h-[999px] overflow-hidden transition-[max-height] duration-500
								aria-hidden:max-h-0"
							isManual={true}
						>
							<div className="pt-2.5 text-sm md:pt-4 md:text-base">
								Your security is our priority. Blue Orion uses bank-grade encryption, two-factor
								authentication (2FA), and cold storage for digital assets. We comply with strict financial
								regulations in [Country] and undergo regular audits. Funds are insured against unauthorized
								access, so you can trade with confidence.
							</div>
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
