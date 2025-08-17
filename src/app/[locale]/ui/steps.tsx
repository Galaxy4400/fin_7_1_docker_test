import Image from 'next/image';

import stepSrc1 from '@/shared/images/num1.svg';
import stepSrc2 from '@/shared/images/num2.svg';
import stepSrc3 from '@/shared/images/num3.svg';
import { Button, Container, H2, H3, P } from '@/shared/ui';

export const Steps = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-6 md:gap-12">
				<div className="grid gap-4 md:gap-8">
					<H2 className="md:text-center">Easy start</H2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
					<div className="grid grid-cols-[auto_1fr] content-start gap-3 md:gap-6">
						<div
							className="bg-background inline-flex h-[32px] w-[32px] flex-none items-center justify-center
								rounded-lg outline-hidden md:h-[56px] md:w-[56px]"
						>
							<Image className="w-4 md:w-6" src={stepSrc1} alt="overview-1" />
						</div>
						<div className="grid content-center">
							<H3>Register</H3>
							<P>Sign up in 30-seconds</P>
						</div>
					</div>
					<div className="grid grid-cols-[auto_1fr] content-start gap-3 md:gap-6">
						<div
							className="bg-background inline-flex h-[32px] w-[32px] flex-none items-center justify-center
								rounded-lg outline-hidden md:h-[56px] md:w-[56px]"
						>
							<Image className="w-4 md:w-6" src={stepSrc2} alt="overview-2" />
						</div>
						<div className="grid content-center">
							<H3>Deposit</H3>
							<P>Start from $250</P>
						</div>
					</div>
					<div className="grid grid-cols-[auto_1fr] content-start gap-3 md:gap-6">
						<div
							className="bg-background inline-flex h-[32px] w-[32px] flex-none items-center justify-center
								rounded-lg outline-hidden md:h-[56px] md:w-[56px]"
						>
							<Image className="w-4 md:w-6" src={stepSrc3} alt="overview-3" />
						</div>
						<div className="grid content-center">
							<H3>Trade</H3>
							<P>AI handles the rest</P>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="w-full md:w-[395px]">
						<Button href="#" variant="gradient" size="full">
							SIGN UP
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};
