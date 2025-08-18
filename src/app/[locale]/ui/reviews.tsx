'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, H2, H4, SliderArrowLeftIcon, SliderArrowRightIcon } from '@/shared/ui';

export const Reviews = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-6 md:gap-12">
				<div className="grid gap-4 md:gap-8">
					<H2 className="md:text-center">Our traders say</H2>
				</div>
				<div className="relative min-w-0 md:px-16 lg:px-28">
					<Swiper
						modules={[Navigation, Pagination]}
						navigation={{
							nextEl: '.custom-next',
							prevEl: '.custom-prev',
						}}
						pagination={{ el: '.custom-pagination', clickable: true }}
						spaceBetween={16}
						loop={true}
						breakpoints={{
							320: { slidesPerView: 'auto' },
							640: { slidesPerView: 2 },
							768: { spaceBetween: 32, slidesPerView: 2 },
						}}
					>
						<SwiperSlide>
							<div className="grid gap-2 md:gap-4">
								<div>
									<H4>Sarah Huber</H4>
									<p className="text-gray-2 text-sm leading-[140%] md:text-base">Berlin</p>
								</div>
								<div className="text-sm leading-[140%] md:text-base">
									«I was new to the crypto market and looking for a reliable platform. Blue Orion offers
									exactly that — an intuitive interface and valuable support from experienced brokers. My
									first deposit quickly led to exciting trades!»
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="grid gap-2 md:gap-4">
								<div>
									<H4>Max Müller</H4>
									<p className="text-gray-2 text-sm leading-[140%] md:text-base">Berlin</p>
								</div>
								<div className="text-sm leading-[140%] md:text-base">
									«Thanks to Blue Orion, I started trading cryptocurrencies effortlessly! The registration
									process was super easy, and the transparent fees are a real plus. As a trader, I feel very
									comfortable and professionally supported on this platform.»
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="grid gap-2 md:gap-4">
								<div>
									<H4>Sarah Huber</H4>
									<p className="text-gray-2 text-sm leading-[140%] md:text-base">Berlin</p>
								</div>
								<div className="text-sm leading-[140%] md:text-base">
									«I was new to the crypto market and looking for a reliable platform. Blue Orion offers
									exactly that — an intuitive interface and valuable support from experienced brokers. My
									first deposit quickly led to exciting trades!»
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="grid gap-2 md:gap-4">
								<div>
									<H4>Max Müller</H4>
									<p className="text-gray-2 text-sm leading-[140%] md:text-base">Berlin</p>
								</div>
								<div className="text-sm leading-[140%] md:text-base">
									«Thanks to Blue Orion, I started trading cryptocurrencies effortlessly! The registration
									process was super easy, and the transparent fees are a real plus. As a trader, I feel very
									comfortable and professionally supported on this platform.»
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 justify-between md:flex">
						<button
							className="custom-prev bg-gradient-main inline-flex h-11 w-11 cursor-pointer items-center
								justify-center rounded-md text-white"
						>
							<SliderArrowLeftIcon />
						</button>
						<button
							className="custom-next bg-gradient-main inline-flex h-11 w-11 cursor-pointer items-center
								justify-center rounded-md text-white"
						>
							<SliderArrowRightIcon />
						</button>
					</div>
					<div className="custom-pagination flex justify-center gap-3 pt-4 md:hidden"></div>
				</div>
			</Container>
		</div>
	);
};
