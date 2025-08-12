'use client';

import { useState } from 'react';

import { useGeo } from '@/providers/geo-provider';
import { numFormat } from '@/shared/lib/num-format';
import { Container } from '@/shared/ui/container';
import { H2 } from '@/shared/ui/h2';
import { Input } from '@/shared/ui/input';

const RATE = 0.05;

export const Calculator = () => {
	const [amount, setAmount] = useState(250);
	const [days, setDays] = useState(50);
	const { data, convertToLocalCurrency } = useGeo();

	const calculateCompoundInterest = () => {
		const calculatedValue = amount * Math.pow(1 + RATE, days);

		const inLocalCurrency = convertToLocalCurrency(calculatedValue);

		return `${numFormat(inLocalCurrency)} ${data.localCurrencySymbol}`;
	};

	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-3 md:gap-12" size="sm">
				<H2 className="text-center">See Your Potential Earnings in 30 Seconds!</H2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
					<div>
						<div className="relative">
							<Input
								className="pr-14 mb-4 font-bold"
								value={amount}
								type="number"
								variant="special"
								onChange={(e) => setAmount(Number(e.target.value))}
							/>
							<span className="text-2xl text-main font-bold absolute right-2 top-1/2 -translate-1/2">
								{data.localCurrencySymbol}
							</span>
						</div>
						<div className="text-base md:text-xl leading-[140%]">Select the period to grow</div>
						<div className="text-base md:text-xl font-medium leading-[130%]">{days} days</div>
						<input
							id="range"
							type="range"
							value={days}
							min="1"
							max="100"
							onChange={(e) => setDays(Number(e.target.value))}
						></input>
					</div>
					<div
						className="text-center bg-gradient-main p-3 md:p-6 grid content-center gap-3 md:gap-6
							rounded-[10px] md:rounded-[20px] text-white"
					>
						<div className="text-base md:text-xl leading-[140%]">Your potential future balance</div>
						<div className="font-special text-[32px] md:text-[46px] leading-none">
							{calculateCompoundInterest()}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
