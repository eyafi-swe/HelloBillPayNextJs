"use client";
import PaymentCardWhite from "@/components/PaymentCard/PaymentCardWhite";
import GoBack from "@/components/Navigation/GoBack";
import React, { useEffect, useState } from "react";
import SelectNewPaymentMethod from "@/sections/AddPaymentMethod/SelectNewPaymentMethod";
import api from "@/services/apis/api";
import ScreenLoader from "@/components/Loaders/ScreenLoader/ScreenLoader";
import { useDispatch, useSelector } from "react-redux";
import { loadDefaultPaymentMethod } from "../GlobalRedux/slices/userSlice";

const defaultPaymentMethodd = {
	id: 990,
	type: "mastercard",
	lastFourDigits: "4978",
	owner: "John Doe",
};

const newPaymentMethods = [
	{
		id: 1,
		title: "Bank Account",
		slug: "bank-account",
		iconPath: ["/assets/img/bank.png"],
	},
	{
		id: 2,
		title: "Your Card",
		slug: "your-card",
		iconPath: [
			"/assets/img/visa2.png",
			"/assets/img/stripe.png",
			"/assets/img/mastercard2.png",
		],
	},
	{
		id: 3,
		title: "Venmo",
		slug: "venmo",
		iconPath: ["/assets/img/venmo2.png"],
	},
	{
		id: 4,
		title: "Google Pay",
		slug: "google-pay",
		iconPath: ["/assets/img/gpay.png"],
	},
	{
		id: 5,
		title: "Apple Pay",
		slug: "apple-pay",
		iconPath: ["/assets/img/appay.png"],
	},
];

const AddPaymentMethod = () => {
	const [loading, setLoading] = useState(false);
	const [defaultPaymentMethod, setDefaultPaymentMethod] = useState({});
	const dispatch = useDispatch();
	const { userDefaultPaymentMethod, defaultPaymentMethodLoading } = useSelector(
		(state) => state.user
	);

	useEffect(() => {
		// api.managePaymentMethod
		// 	.getSavedPaymentMethods()
		// 	.then((res) => {
		// 		if (res.success) {
		// 			console.log(res.data);
		// 			setDefaultPaymentMethod(res.data.default_payment_method);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});
		console.log(userDefaultPaymentMethod);
		if (!userDefaultPaymentMethod.id) {
			console.log("here");
			dispatch(loadDefaultPaymentMethod());
		}
	}, []);

	return (
		<div className="pt-10 pb-16 bg-slate-50">
			<div className="container mx-auto px-5 md:px-0">
				<GoBack text={"Add Payment Method"} />
				<div className="mt-10 flex justify-center">
					<div className="w-full md:w-2/3 lg:w-1/2">
						{defaultPaymentMethodLoading ? (
							<ScreenLoader height="h-72" />
						) : (
							<>
								<h5 className="font-semibold">Default Payment Method</h5>
								{userDefaultPaymentMethod.id ? (
									<PaymentCardWhite
										selected={true}
										item={userDefaultPaymentMethod}
									/>
								) : (
									<p className="mt-3 font-semibold text-red-500">
										No Default Payment Method! Please Add One.
									</p>
								)}
								<SelectNewPaymentMethod newPaymentMethods={newPaymentMethods} />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddPaymentMethod;
