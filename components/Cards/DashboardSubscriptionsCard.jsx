"use client";
import React, { useState } from "react";

const DashboardSubscriptionsCard = ({ item }) => {
	const [autoPayOn, setAutoPayOn] = useState(item.autopay);
	return (
		<div className="bg-white p-5 mt-5 rounded-md ">
			<div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
				<p className="font-semibold">
					Subscription Number:{" "}
					<span className="text-success"> {item.subscriptionNumber}</span>
				</p>

				<div className="flex items-center gap-3 mt-3 md:mt-0">
					<p className="font-semibold">Autopay</p>
					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							value=""
							className="sr-only peer"
							checked={autoPayOn}
							onChange={() => setAutoPayOn(!autoPayOn)}
						/>
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
					</label>
				</div>
			</div>

			<div className="mt-5 flex flex-col md:flex-row items-center justify-center md:justify-between text-gray-700 text-sm md:text-base">
				<p>Automatic renewal every Month</p>
				<p className="mt-3 md:mt-0">
					Next Payment {item.nextPayment} on {item.nextPaymentDate}
				</p>
			</div>
		</div>
	);
};

export default DashboardSubscriptionsCard;
