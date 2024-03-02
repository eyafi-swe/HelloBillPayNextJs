import LargeButton from "@/components/Button/LargeButton";
import CarrierInstantBillPay from "@/components/CarrierInstantBillPay/CarrierInstantBillPay";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import AdvertisingWithCarousel from "@/sections/Common/AdvertisingWithCarousel";
import EasyPeasy from "@/sections/Common/EasyPeasy";
import SaveBill from "@/sections/Common/SaveBill";
import SetupSubscriptionForm from "@/sections/SetupSubscription/SetupSubscriptionForm";
import { defaultCarriers } from "@/utils/carriersData";
import Link from "next/link";
import React from "react";

const usersStat = [
	{
		count: "100K",
		text: "Customer Each Month",
		img: "/assets/img/user1.png",
	},
	{
		count: "45K+",
		text: "Daily top-ups send",
		img: "/assets/img/smartphone2.png",
	},
	{
		count: "10M",
		text: "Last Month top-ups",
		img: "/assets/img/dollar1.png",
	},
];

const Carrier = ({ params }) => {
	const { slug } = params;
	const carrier = defaultCarriers.find((item) => item.slug === slug);
	return (
		<div className="">
			<div className="bg-slate-50 py-10 px-5 md:px-0">
				<div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center gap-5 lg:gap-20">
					<div className="w-full lg:w-1/3">
						<div className="flex justify-center lg:justify-start">
							<div className="w-32 hidden md:block">
								<img src={carrier.img} alt="" className="object-fill w-full" />
							</div>
						</div>

						<h1 className="text-3xl mt-10 font-semibold text-center lg:text-left">
							Pay {carrier.title} Bill Instantly
						</h1>
						<p className="mt-5 text-center lg:text-left">
							Our {carrier.title} Pay Bill Services get instantly processed
							without the need to create an account. {carrier.title} recharge
							and top-ups have never been easier or faster. Skip the hassle and
							recharge with the best {carrier.title} payment services.
						</p>
					</div>
					<div className="flex flex-col gap-5 items-center">
						<div className="w-40 block md:hidden">
							<img src={carrier.img} alt="" className="object-fill w-full" />
						</div>
						<SetupSubscriptionForm carrier={carrier} slug={slug} />
					</div>
				</div>
			</div>
			<SaveBill />

			<div className="py-10">
				<EasyPeasy />
			</div>

			<div className="">
				<CarrierInstantBillPay title={carrier.title} />
			</div>

			<div className="py-16 px-5 md:px-0">
				<div className="w-full md:w-4/6 xl:w-1/2 mx-auto">
					<h2 className="text-3xl font-semibold text-center">
						Why Choose Viva Bill Pay?
					</h2>
					<p className="mt-5 text-center w-full md:w-5/6 xl:w-2/3 mx-auto">
						Our mobile top-up services cover a wide range of mobile networks,
						including major carriers and regional providers. This means that
						regardless of your service provider, you can easily top up your
						phone credit through our platform.
					</p>
				</div>
			</div>

			<div className="bg-success-faded py-16">
				<div className="container mx-auto px-5 md:px-0 ">
					<div className="w-full md:w-4/6 xl:w-1/2 mx-auto">
						<h2 className="text-3xl font-semibold text-center">
							Trusted by 100k+ {carrier.title} Customers
						</h2>
						<p className="mt-5 text-center w-full md:w-5/6 xl:w-2/3 mx-auto">
							Pay your {carrier.title.toLowerCase()} bill with the #1 trusted
							online payment solution for {carrier.title}.
						</p>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
						{usersStat.map((item, index) => (
							<div
								className="bg-[#33a78c1a] rounded-md p-5 flex items-center gap-4"
								key={index}
							>
								<div className="bg-success-light p-2 rounded-md">
									<img src={item.img} alt="" />
								</div>
								<div>
									<h4 className="text-xl font-semibold">{item.count}</h4>
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="py-16 container mx-auto px-5 md:px-0 flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center">
				<div className="w-full lg:w-1/2">
					<h2 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left">
						Best way to pay your {carrier.title} bill
					</h2>
					<p className=" mt-5 text-center lg:text-left">
						What are the advantages of paying {carrier.title} bill through our
						website? First of all, we offer you a better experience. You can use
						our website to pay your Simple Mobile bill in a few clicks. We make
						it easy for you to complete your transaction, so you don&apos;t have
						to waste time navigating through multiple sites. Furthermore, we
						give you an option to double-check your information before you
						complete it.
					</p>
				</div>
				<div className="w-full lg:w-1/2">
					<img
						src="/assets/img/Woman.png"
						alt=""
						className="object-fill w-full h-full"
					/>
				</div>
			</div>

			<AdvertisingWithCarousel />
		</div>
	);
};

export default Carrier;
