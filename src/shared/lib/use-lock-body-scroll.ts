import { useEffect } from 'react';

export const useLockBodyScroll = (isLocked: boolean) => {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const originalStyle = window.getComputedStyle(document.body).overflow;

		if (isLocked) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = originalStyle;
		}

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isLocked]);
};
