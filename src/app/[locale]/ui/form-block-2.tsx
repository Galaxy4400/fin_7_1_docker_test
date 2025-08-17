import { MainForm } from '@/components/main-form';
import { Container, H2, P } from '@/shared/ui';

export const FormBlock2 = () => {
	return (
		<div className="py-12 md:py-20 bg-background relative overflow-hidden">
			<div
				className="absolute left-[-162px] top-[-97px] w-[186.512px] h-[408px] rounded-[408px] bg-main
					blur-[100px] -rotate-30"
			></div>
			<div
				className="absolute right-[-63px] bottom-[-147px] w-[445px] h-[257px] rounded-[445px] bg-second
					blur-[100px] -rotate-69"
			></div>
			<Container className="grid gap-6 md:gap-12" size="2xs">
				<div className="text-white text-center grid gap-4 md:gap-6">
					<H2>Register now!</H2>
					<P>Our AI executes optimal trades 24/7, even when you sleep.</P>
				</div>
				<MainForm variant="spec" formId="m2" />
			</Container>
		</div>
	);
};
