import React from "react";

const ThirdSection = () => {
	return (
		<div className="bg-success-faded py-16">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 border-red-500 ">
				<div className="flex flex-col items-center border-green-400">
					<div className="rounded-md p-2 bg-success-light">
						<img src="/assets/img/invoice.png" alt="" />
					</div>
					<p className="font-semibold text-xl my-3 text-center">
						Instant Bill Payments
					</p>
					<p className="text-center">Pay your bills in minutes.</p>
				</div>
				<div className="flex flex-col items-center  border-green-400">
					<div className="rounded-md p-2 bg-success-light">
						<img src="/assets/img/face.png" alt="" />
					</div>
					<p className="font-semibold text-xl my-3 text-center">
						Trusted by 1M+ Customers Globally
					</p>
					<p className="w-2/3 text-center">
						Join our satisfied customers and experience the difference with our
						service.
					</p>
				</div>
				<div className="flex flex-col items-center border-green-400">
					<div className="rounded-md p-2 bg-success-light">
						<img src="/assets/img/user.png" alt="" />
					</div>
					<p className="font-semibold text-xl text-center my-3">
						No Account Setup Required.
					</p>
					<p className="w-2/3 text-center">
						Download our apps for hassle-free bill payments on the go.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
