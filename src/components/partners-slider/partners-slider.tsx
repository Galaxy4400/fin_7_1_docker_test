'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { PARTNERS } from '@/shared/constants';

import { Partner } from './partner';

export const PartnersSlider = () => {
	return (
		<>
			<div className="hidden md:grid grid-cols-2 gap-8 lg:grid-cols-4">
				{PARTNERS.map((partner) => (
					<Partner imgSrc={partner.src} name={partner.name} key={partner.name} />
				))}
			</div>

			<div className="md:hidden min-w-0">
				<Swiper spaceBetween={32} slidesPerView={'auto'} loop={true}>
					{PARTNERS.map((partner) => (
						<SwiperSlide key={partner.name} className="!w-auto">
							<Partner imgSrc={partner.src} name={partner.name} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
