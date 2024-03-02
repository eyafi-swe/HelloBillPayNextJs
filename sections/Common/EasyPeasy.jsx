import GetStartedButton from "@/components/Button/GetStartedButton";
import React from "react";

const EasyPeasy = () => {
	return (
		<div className="bg-white py-10 ">
			<div className="container mx-auto flex flex-col  xl:flex-row items-center justify-center gap-10 px-5 md:px-0">
				<div className=" md:w-2/3 lg:w-1/2 xl:w-1/3">
					<div className=" text-center xl:text-left">
						<p className="font-semibold text-4xl">Easy. Peasy. Bill Payments</p>
					</div>
					<p className="mt-5 text-lg w-full  xl:w-5/6 text-center  xl:text-left">
						Whether you call it top-up, recharge, reload, airtime, load or
						credit or bill payments, we&apos;ve got you covered. Top up and pay
						bills instantly with no account setup required.
					</p>
				</div>
				<div className="flex flex-col-reverse  xl:flex-row items-center gap-10 ">
					<img src="/assets/img/iPhone 12 Mini.png" alt="iPhone 12" />

					<div className="">
						<div className="flex gap-5 ">
							<div className="bg-[#bee9df75] p-2 w-max rounded-md flex flex-col justify-evenly">
								<div className="bg-success w-max rounded-md p-2">
									<img src="/assets/img/touchscreen.png" alt="" />
								</div>
								<div className="bg-success w-max mt-5 rounded-md p-2">
									<img src="/assets/img/smartphone.png" alt="" />
								</div>
								<div className="bg-success w-max mt-5 rounded-md p-2">
									<img src="/assets/img/credit-card.png" alt="" />
								</div>
							</div>

							<div className="p-2 flex flex-col justify-between gap-3">
								<div className="w-full md:w-4/5 ">
									<p className="font-semibold">Select Provider</p>
									<p>Pick from top worldwide carriers.</p>
								</div>
								<div className="w-full md:w-4/5">
									<p className="font-semibold">Enter Phone Number</p>
									<p>Enter your phone or account number.</p>
								</div>
								<div className="w-full md:w-4/5">
									<p className="font-semibold">Choose how to pay</p>
									<p>
										Pay with Credit Card, ACH, Venmo, Apple Pay or Google Pay.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-5 flex justify-center md:justify-start">
							<GetStartedButton
								bgColor="bg-success"
								hover="hover:text-black hover:bg-success-light"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EasyPeasy;
