import DownloadAppstoreButton from "@/components/Button/DownloadAppstoreButton";
import DownloadGooglePlayButton from "@/components/Button/DownloadGooglePlayButton";
import GetStartedButton from "@/components/Button/GetStartedButton";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const BottomSection = () => {
	return (
		<div className=" py-10 md:py-0 md:pt-10 bg-[url('/assets/img/Frame65.png')] bg-no-repeat bg-cover ">
			<div className="container mx-auto flex flex-col gap-0 md:gap-5 lg:flex-row justify-evenly items-center px-5 md:px-0">
				<div className="">
					<p className="text-3xl font-semibold text-white text-center lg:text-left">
						Got a bill?
					</p>
					<p className="mt-5 text-white w-full md:w-3/4 text-center lg:text-left">
						Get started now or download Viva Bill Pay App for a more convenient
						way to pay your bills.
					</p>
					<div className="mt-5 items-center justify-center lg:justify-start hidden md:flex">
						<AiFillStar className="text-yellow-400 text-xl" />
						<AiFillStar className="text-yellow-400 text-xl" />
						<AiFillStar className="text-yellow-400 text-xl" />
						<AiFillStar className="text-yellow-400 text-xl" />
						<AiFillStar className="text-yellow-400 text-xl" />
						<p className="ml-1">2000+ reviews</p>
					</div>
					<div className="flex flex-col md:flex-row gap-3 mt-5 items-center justify-center lg:justify-start">
						{/* <button className="border border-black rounded-md w-40 py-3">
							Get Started
						</button> */}
						<GetStartedButton
							bgColor="bg-none border border-black"
							textColor="text-black"
						/>
						<div className="items-center justify-center lg:justify-start flex md:hidden">
							<AiFillStar className="text-yellow-400 text-xl" />
							<AiFillStar className="text-yellow-400 text-xl" />
							<AiFillStar className="text-yellow-400 text-xl" />
							<AiFillStar className="text-yellow-400 text-xl" />
							<AiFillStar className="text-yellow-400 text-xl" />
							<p className="ml-1">2000+ reviews</p>
						</div>
						<div className="flex items-center gap-3">
							<DownloadGooglePlayButton bgColor="bg-black" border="border-0" />

							<DownloadAppstoreButton bgColor="bg-black" border="border-0" />
						</div>
					</div>
				</div>

				<div className=" hidden md:block">
					<img src="/assets/img/AndroidApple.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
