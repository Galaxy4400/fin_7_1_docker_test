import clsx from 'clsx';

export const H1 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<h1 className={clsx(className, 'text-[32px] font-special md:text-[68px] leading-none')}>{children}</h1>
	);
};
