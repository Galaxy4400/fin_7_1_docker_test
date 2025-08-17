import clsx from 'clsx';

export const H1 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<h1 className={clsx(className, 'font-special text-[32px] leading-none md:text-[68px]')}>{children}</h1>
	);
};
