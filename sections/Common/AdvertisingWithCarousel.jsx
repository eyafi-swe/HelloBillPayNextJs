"use client";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const AdvertisingWithCarousel = () => {
	const [index, setIndex] = useState(0);
	return (
		<div className="bg-success-faded py-10">
			<div className="container mx-auto flex flex-col gap-5 lg:gap-0 md:flex-row items-center justify-evenly   border-red-400 px-5 md:px-0">
				<div className=" border-red-500">
					<p className="text-3xl font-semibold text-center md:text-left">
						You&apos;re in great company!
					</p>
					<p className="mt-5 text-center md:text-left">
						But don&apos;t take our word for it, see what other people are
						saying!
					</p>
					<div className="mt-5 flex gap-4 items-center justify-center md:justify-start">
						<img src="/assets/img/Avatar group.png" alt="Avatar" />
						<div>
							<div className="flex items-center">
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<p className=" text-xl  ml-1">5.0</p>
							</div>
							<p className="text-xl  ">from 2000+ reviews</p>
						</div>
					</div>
				</div>

				<div className=" border-red-500">
					<Splide
						aria-label="My Favorite Images"
						hasTrack={false}
						options={{
							rewind: true,
							gap: "1rem",
							width: 500,
						}}
					>
						<SplideTrack>
							<SplideSlide>
								<img src="/assets/img/Slide1.png" alt="Image 1" />
							</SplideSlide>
							<SplideSlide>
								<img src="/assets/img/Slide1.png" alt="Image 1" />
							</SplideSlide>
							<SplideSlide>
								<img src="/assets/img/Slide1.png" alt="Image 1" />
							</SplideSlide>
						</SplideTrack>

						<div className="splide__arrows mt-5  border-green-500 flex justify-between">
							<div className="flex items-center">
								{[0, 1, 2].map((item, i) => (
									<BsDot
										key={i}
										className={`text-3xl  border-red-500  ${
											index == i ? "text-[#37A48C]" : "text-gray-500"
										}`}
									/>
								))}
							</div>
							<div>
								<button
									className="splide__arrow splide__arrow--prev bg-[#37A48C] p-2 rounded-full mr-5"
									onClick={() => {
										if (index == 0) {
											setIndex(2);
										} else {
											setIndex(index - 1);
										}
									}}
								>
									<HiArrowSmLeft className="text-3xl text-white" />
								</button>
								<button
									className="splide__arrow splide__arrow--next bg-[#37A48C] p-2 rounded-full"
									onClick={() => {
										if (index == 2) {
											setIndex(0);
										} else {
											setIndex(index + 1);
										}
									}}
								>
									<HiArrowSmRight className="text-3xl text-white" />
								</button>
							</div>
						</div>
					</Splide>
				</div>
			</div>
		</div>
	);
};

export default AdvertisingWithCarousel;
