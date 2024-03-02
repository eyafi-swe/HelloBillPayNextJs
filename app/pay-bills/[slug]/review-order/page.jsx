"use client";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import GoBack from "@/components/Navigation/GoBack";
import { defaultCarriers } from "@/utils/carriersData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PaymentCard from "@/components/PaymentCard/CustomPaymentCard";
import api from "@/services/apis/api";
import ThreeDotLoader from "@/components/Loaders/ThreeDotLoader";

const item = {
	id: 3,
	account_id: 2,
	account_type: "Card",
	is_default: 1,
	account: {
		id: 2,
		name: "Neo",
		card_name: "master",
		card_number: "4444",
	},
};
const ReviewOrder = ({ params }) => {
	const { slug } = params;
	const carrier = defaultCarriers.find((item) => item.slug === slug);
	const [paymentMethod, setPaymentMethod] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("selectedPaymentMethod"))) {
			setPaymentMethod(
				JSON.parse(localStorage.getItem("selectedPaymentMethod"))
			);
		}
	}, []);

	const handlePayNow = () => {
		console.log("Pay Now");
		let data = JSON.parse(localStorage.getItem("billingDetails"));

		delete data["paymentMethod"];

		if (paymentMethod?.account_id) {
			data.is_saved_payment_method = 1;
			data.account_id = paymentMethod?.account_id;
		} else {
			data.is_saved_payment_method = 0;
			data.payment_method = "card";
			data.card_name = paymentMethod.cardHolderName;
			data.card_number = paymentMethod.cardNumber;
			data.card_expire_date = "2024-02-25";
			data.cvv = paymentMethod.cardCvv;
		}
		console.log(data);
		setLoading(true);
		api.mobileRecharge
			.storeMobileRecharge(data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="pt-10 pb-16 bg-slate-50">
			<div className="container mx-auto px-5 md:px-0">
				<GoBack text={"Review your order"} />
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="md:col-span-2 ">
						<div className="bg-white p-5 rounded-md shadow-md h-max">
							<h3 className="text-xl font-semibold">Payment Details</h3>
							{Object.keys(paymentMethod).length > 0 ? (
								<PaymentCard item={paymentMethod} />
							) : (
								<p className="mt-5">Go Back and Select Payment Method</p>
							)}
						</div>
						<div className="mt-5 flex justify-end">
							{/* <Link href={`/pay-bills/${slug}/order-success`}> */}
							<button
								className={`rounded-md border font-medium px-4 py-2 ${
									loading ? "bg-success-light" : "bg-success"
								} text-white`}
								onClick={handlePayNow}
								disabled={loading}
							>
								{loading ? <ThreeDotLoader /> : "Pay Now"}
							</button>
							{/* </Link> */}
						</div>
					</div>
					<OrderSummary carrier={carrier} />
				</div>
			</div>
		</div>
	);
};

export default ReviewOrder;
