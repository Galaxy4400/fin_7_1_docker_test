import clsx from 'clsx';

export const H2 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<h2 className={clsx(className, 'text-[24px] font-special md:text-[46px] leading-none')}>{children}</h2>
	);
};
