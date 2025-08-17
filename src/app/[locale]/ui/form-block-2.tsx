import { MainForm } from '@/components/main-form';
import { Container, H2, P } from '@/shared/ui';

export const FormBlock2 = () => {
	return (
		<div className="bg-background relative overflow-hidden py-12 md:py-20">
			<div
				className="bg-main absolute top-[-97px] left-[-162px] h-[408px] w-[186.512px] -rotate-30
					rounded-[408px] blur-[100px]"
			></div>
			<div
				className="bg-second absolute right-[-63px] bottom-[-147px] h-[257px] w-[445px] -rotate-69
					rounded-[445px] blur-[100px]"
			></div>
			<Container className="grid gap-6 md:gap-12" size="2xs">
				<div className="grid gap-4 text-center text-white md:gap-6">
					<H2>Register now!</H2>
					<P>Our AI executes optimal trades 24/7, even when you sleep.</P>
				</div>
				<MainForm variant="spec" formId="m2" />
			</Container>
		</div>
	);
};
