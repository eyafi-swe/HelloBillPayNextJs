import HelpCenterCard from "@/components/Cards/HelpCenterCard";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const data = [
	{
		title: "Top FAQs",
		text: "Vivabillpay provides accurate & reliable answers to help you navigate.",
		icon: "/assets/img/faqicon.svg",
		link: "/help-center/top-faq",
	},
	{
		title: "How It Works",
		text: "Our easy 3 step process will help you pay your mobile bill in minutes.",
		icon: "/assets/img/manual.svg",
		link: "/help-center",
	},
	{
		title: "Account Setting",
		text: "Manage your account profile and settings such as recharge history, notification and subscriptions.",
		icon: "/assets/img/user-avatar.svg",
		link: "/help-center",
	},
	{
		title: "Payments",
		text: "Check status of your bill pay through our site.",
		icon: "/assets/img/income.svg",
		link: "/help-center",
	},
	{
		title: "Bills",
		text: "Check all your bills and subscription's.",
		icon: "/assets/img/billIcon.svg",
		link: "/help-center",
	},
	{
		title: "Fees",
		text: "Viva Bill Pay has a standard 10% fee to process mobile bill pay.",
		icon: "/assets/img/fees.svg",
		link: "/help-center",
	},
	{
		title: "Support",
		text: "Our dedicated team of customer support are here to help you with any of your needs.",
		icon: "/assets/img/online-support.svg",
		link: "/help-center",
	},
	{
		title: "Privacy",
		text: "We pride ourselves on protecting our custom-ers information when transacting on viva bill pay.",
		icon: "/assets/img/shield.svg",
		link: "/help-center",
	},
	{
		title: "Viva Bill Pay App",
		text: "Save up to 10% on every bill pay by downloading our app.",
		icon: "/assets/img/more.svg",
		link: "/help-center",
	},
];

const TopSection = () => {
	return (
		<div>
			<div className="bg-white py-10">
				<div className="container mx-auto flex justify-center ">
					<div className="hidden md:block">
						<img src="/assets/img/help1.png" alt="" />
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="font-semibold text-3xl text-center">
							How can we help you?
						</h2>
						<div className="flex w-5/6 mx-auto items-center h-10 rounded-md border px-3 mt-5">
							<BiSearchAlt className="text-xl" />
							<input
								type="text"
								name="search"
								id=""
								placeholder="Describe your issue"
								className="text-gray-400 h-full ml-2 focus:outline-none w-full"
							/>
						</div>
					</div>
					<div className="hidden md:block">
						<img src="/assets/img/help2.png" alt="" />
					</div>
				</div>
			</div>

			<div className="py-16 bg-white">
				<div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-5 md:px-0">
					{data.map((item, index) => (
						<HelpCenterCard
							key={index}
							icon={item.icon}
							title={item.title}
							text={item.text}
							path={item.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopSection;
