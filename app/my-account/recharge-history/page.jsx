import HistoryTable from "@/sections/RechargeHistory/HistoryTable";
import React from "react";

const historyData = [
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Success",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier1.png",
		paymentMethod: "Google Pay",
	},
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Pending",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier1.png",
		paymentMethod: "Google Pay",
	},
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Error",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier2.png",
		paymentMethod: "Google Pay",
	},
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Success",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier2.png",
		paymentMethod: "Google Pay",
	},
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Success",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier2.png",
		paymentMethod: "Google Pay",
	},
	{
		date: "Dec 1, 2022",
		transactionId: "TD001",
		status: "Success",
		amount: "USD $10.00",
		carrier: "/assets/img/carrier2.png",
		paymentMethod: "Google Pay",
	},
];

const RechargeHistory = () => {
	return (
		<div className="">
			<h3 className="font-semibold text-2xl">Recharge History</h3>
			<div className="bg-white mt-5 rounded-md ">
				<HistoryTable data={historyData} />
			</div>
		</div>
	);
};

export default RechargeHistory;
