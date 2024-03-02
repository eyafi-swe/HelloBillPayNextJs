import React from "react";

const Features = () => {
	return (
		<div className="bg-white py-24">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 border-red-500 ">
				<div className="flex flex-col items-center border-green-400">
					<div className="rounded-md p-2 bg-success-faded">
						<img src="/assets/img/discount.svg" alt="" />
					</div>
					<p className="font-semibold text-xl my-3 text-center">Get 10% Off</p>
					<p className="text-center">
						Download our app and receive 10% off each payment
					</p>
				</div>
				<div className="flex flex-col items-center  border-green-400">
					<div className="rounded-md p-2 bg-success-faded">
						<img src="/assets/img/money-bag.svg" alt="" />
					</div>
					<p className="font-semibold text-xl my-3 text-center">
						No Hidden Costs
					</p>
					<p className="w-2/3 text-center">
						On our website, we believe in transparency and putting our
						customers&apos; needs first.
					</p>
				</div>
				<div className="flex flex-col items-center border-green-400">
					<div className="rounded-md p-2 bg-success-faded">
						<img src="/assets/img/face-green.svg" alt="" />
					</div>
					<p className="font-semibold text-xl text-center my-3">
						Customer Satisfaction
					</p>
					<p className="w-2/3 text-center">
						Customer satisfaction is the driving force behind everything we do.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
