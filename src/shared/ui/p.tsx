import clsx from 'clsx';

export const P = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<p className={clsx(className, 'text-base md:leading-[140%] leading-[130%] md:text-xl')}>{children}</p>
	);
};
