import DashboardSubscriptionsCard from "@/components/Cards/DashboardSubscriptionsCard";
import React from "react";

const subscriptionData = [
	{
		subscriptionNumber: "+0123456789",
		autopay: true,
		nextPayment: "$25.05",
		nextPaymentDate: "Oct 1st, 2023",
	},
	{
		subscriptionNumber: "+0123456789",
		autopay: false,
		nextPayment: "$25.05",
		nextPaymentDate: "Oct 1st, 2023",
	},
	{
		subscriptionNumber: "+0123456789",
		autopay: true,
		nextPayment: "$25.05",
		nextPaymentDate: "Oct 1st, 2023",
	},
	{
		subscriptionNumber: "+0123456789",
		autopay: false,
		nextPayment: "$25.05",
		nextPaymentDate: "Oct 1st, 2023",
	},
	{
		subscriptionNumber: "+0123456789",
		autopay: false,
		nextPayment: "$25.05",
		nextPaymentDate: "Oct 1st, 2023",
	},
];

const Subscriptions = () => {
	return (
		<div className="">
			<h3 className="font-semibold text-2xl">Subscriptions</h3>
			{subscriptionData.map((item, index) => (
				<DashboardSubscriptionsCard item={item} key={index} />
			))}
		</div>
	);
};

export default Subscriptions;
