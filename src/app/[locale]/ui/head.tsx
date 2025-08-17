import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import mainSrc from '@/shared/images/main.png';
import { Button, Container, H1, P } from '@/shared/ui';

export const Head = async () => {
	const t = await getTranslations();

	return (
		<div
			className="bg-background relative flex min-h-[540px] flex-col overflow-hidden pt-12 pb-24 text-white
				md:py-6"
		>
			<div
				className="bg-main absolute top-[90%] left-[80%] h-[217] w-[160px] -translate-x-1/2 -translate-y-1/2
					rotate-[53.206deg] rounded-[434px] blur-[50px] filter md:h-[434px] md:w-[320px] md:blur-[100px]"
			></div>
			<Container className="relative grid h-full grow grid-cols-1 content-center md:grid-cols-2">
				<div className="grid content-center gap-8">
					<H1>{t('title')}</H1>
					<P>{t('label')}</P>
					<div>
						<Button href="#" variant="gradient" size="md">
							SIGN UP
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-center pt-5 md:pt-0">
					<Image src={mainSrc} alt="main"></Image>
				</div>
			</Container>
		</div>
	);
};
