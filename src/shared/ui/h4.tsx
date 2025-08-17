import clsx from 'clsx';

export const H4 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return <h4 className={clsx(className, 'text-base leading-[130%] font-medium md:text-xl')}>{children}</h4>;
};
