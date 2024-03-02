import React from "react";
import { FaGoogle } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { BsApple } from "react-icons/bs";

const ConnectVenmoGpayOrApplePay = ({ slug }) => {
	return (
		<div className="mt-5  flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 xl:w-2/6 py-32">
			<p className="  text-center">
				By Continuing to pay, I understad and agree with the privacy policy and
				terms of service of vivabillpay.
			</p>
			<div className="mt-10 w-full flex justify-center">
				<div
					className="flex items-center justify-center gap-4 bg-success rounded-md py-3 w-full md:w-2/3 select-none"
					role="button"
				>
					{slug === "venmo" ? (
						<BiLogoVenmo className="text-white text-xl" />
					) : slug === "apple-pay" ? (
						<BsApple className="text-white text-xl" />
					) : (
						<FaGoogle className="text-xl text-white" />
					)}
					<p className="text-white font-medium">
						Connect with {slug.replace("-", " ")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ConnectVenmoGpayOrApplePay;
