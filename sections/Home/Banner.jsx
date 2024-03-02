import DownloadAppstoreButton from "@/components/Button/DownloadAppstoreButton";
import DownloadGooglePlayButton from "@/components/Button/DownloadGooglePlayButton";
import GetStartedButton from "@/components/Button/GetStartedButton";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const Banner = () => {
	return (
		<div className="bg-dark-bg h-1/4">
			<div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
				<div className=" w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start pt-10  md:pt-0 ">
					<p className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-white font-semibold  w-full 2xl:w-5/6">
						Pay <span className="text-success">Bills and Top-up</span> Instantly
						from anywhere.
					</p>
					{/* <p className="text-white text-md leading-none 2xl:text-xl mt-5  w-3/4 md:w-full lg:w-4/6">
						Whether you call it top-up, recharge, reload, airtime, load or
						credit or bill payments, we&apos;ve got you covered.
					</p> */}
					<GetStartedButton margin="mt-10" />
					{/* <div className="mt-5 flex gap-4 items-center">
						<img src="/assets/img/Avatar group.png" alt="Avatar" />
						<div>
							<div className="flex items-center">
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<AiFillStar className="text-yellow-400 text-xl" />
								<p className="font-semibold text-xl text-white ml-1">5.0</p>
							</div>
							<p className="text-xl font-semibold text-white">
								from 2000+ reviews
							</p>
						</div>
					</div> */}
					<div className="flex gap-4 mt-5">
						{/* <div className="border rounded-md px-2 py-2 flex items-center gap-2 cursor-pointer ">
							<img src="/assets/img/Apple logo.png" alt="apple" />
							<div className="leading-none ">
								<p className="text-white text-xs leading-none ">
									Download on the
								</p>
								<p className="text-white text-base font-semibold">App Store</p>
							</div>
						</div> */}
						<DownloadAppstoreButton bgColor="bg-none" border="border" />
						<DownloadGooglePlayButton bgColor="bg-none" border="border" />

						{/* <div className="border rounded-md px-2 py-2 flex items-center gap-2 cursor-pointer ">
							<img src="/assets/img/Google Play logo.png" alt="Google Play" />
							<div className="leading-none ">
								<p className="text-white text-xs leading-none ">GET IT ON</p>
								<p className="text-white text-base font-semibold">
									Google Play
								</p>
							</div>
						</div> */}
					</div>
				</div>
				<div className="w-full md:w-1/2  justify-center items-center  flex">
					<img
						src="/assets/img/bannerimage.png"
						alt="phone"
						className={`h-[calc(100vh/2.5)] md:h-[calc(100vh/2)] lg:h-[calc(100vh/1.5)]`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
