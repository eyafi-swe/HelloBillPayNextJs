import Checkbox from "@/components/Checkbox/Checkbox";
import React from "react";

const data = [
	{
		title: "Account Communication",
		description:
			"These are important communications relating to your account such as confirmation when your bill is paid, upcoming payment reminders, and more.",
	},
	{
		title: "Announcements",
		description:
			"These are communications about vivabillpay that relate to your account such as a new feature or a change that benefits you. We only send these when relevant to you.",
	},
	{
		title: "Promotions",
		description:
			"These are occasional communications that may include special offers and discounts for you.",
	},
];

const Notification = () => {
	return (
		<div className="">
			<h3 className="font-semibold text-2xl">Notification</h3>
			<div className="bg-white p-5 mt-5 rounded-md ">
				{data.map((item, index) => (
					<div key={index} className="mb-5">
						<h3 className="font-semibold text-xl">{item.title}</h3>
						<p className="mt-3 text-gray-600">{item.description}</p>
						<div className="flex items-center gap-10 mt-5">
							<Checkbox text="Email" />
							<Checkbox text="Text Message" />
						</div>
					</div>
				))}
				<div className="mt-5 p-3 bg-slate-100 rounded-md ">
					<p className="font-semibold text-success">
						Message and data rates may apply
					</p>
				</div>
				<button className="bg-success rounded-md px-5 py-3 font-medium text-white mt-5">
					Update
				</button>
			</div>
		</div>
	);
};

export default Notification;
