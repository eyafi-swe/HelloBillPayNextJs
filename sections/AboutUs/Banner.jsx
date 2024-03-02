import React from "react";

const Banner = () => {
	return (
		<div className="bg-success-faded">
			<div className=" mx-auto flex flex-col md:flex-row">
				<div className=" border-red-500 flex flex-col items-center justify-center py-10 lg:py-10 xl:py-10 2xl:py-0 px-5">
					<div className="  border-blue-500 md:w-3/4 xl:w-1/2">
						<p className="text-success font-semibold">About Our Company</p>
						<h1 className="mt-5 text-4xl font-semibold">
							We provide fast and secure mobile recharges
						</h1>
						<p className="mt-5">
							Vivabillpay helps recharge your local mobile numbers in a safe and
							secure platform. It&apos;s a friendly tool helping thousands of
							people worldwide top up mobile phones for people miles away, or
							even their own. In Seconds!
						</p>
					</div>
				</div>
				<div className="  border-red-500">
					<img src="/assets/img/handshake.png" alt="" className="h-full" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
