import clsx from 'clsx';

export const H2 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<h2 className={clsx(className, 'font-special text-[24px] leading-none md:text-[46px]')}>{children}</h2>
	);
};
