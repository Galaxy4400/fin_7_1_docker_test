import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import mainSrc from '@/shared/images/main.png';
import { Button, Container, H1, P } from '@/shared/ui';

export const Head = async () => {
	const t = await getTranslations();

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
					<H1>{t('title')}</H1>
					<P>{t('label')}</P>
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
