import Image from 'next/image';

import mainSrc from '@/shared/images/main.png';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { H1 } from '@/shared/ui/h1';
import { P } from '@/shared/ui/p';

export const Head = () => {
	return (
		<div
			className="text-white bg-background min-h-[540px] md:py-6 overflow-hidden flex flex-col relative pt-12
				pb-24"
		>
			<div
				className="absolute w-[160px] h-[217] md:w-[320px] md:h-[434px] rotate-[53.206deg] top-[90%]
					left-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[434px] bg-main filter md:blur-[100px]
					blur-[50px]"
			></div>
			<Container className="grid grid-cols-1 h-full grow content-center relative md:grid-cols-2">
				<div className="grid gap-8 content-center">
					<H1>AI-POWER in CRYPTO</H1>
					<P>
						Blue Orion automates trading across 65+ cryptocurrencies in 98+ countries. Start with just $250.
					</P>
					<div>
						<Button href="#" variant="gradient" size="md">
							SIGN UP
						</Button>
					</div>
				</div>
				<div className="flex justify-center items-center pt-5 md:pt-0">
					<Image src={mainSrc} alt="main"></Image>
				</div>
			</Container>
		</div>
	);
};
