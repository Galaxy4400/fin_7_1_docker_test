import clsx from 'clsx';

export const Container = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return (
		<div className={clsx(className, 'mx-auto max-w-[1278px] px-[15px] md:max-w-[1348px] md:px-[50px]')}>
			{children}
		</div>
	);
};
