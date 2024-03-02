"use client";
import { loadDefaultPaymentMethod } from "@/app/GlobalRedux/slices/userSlice";
import PaymentCardWhite from "@/components/PaymentCard/PaymentCardWhite";
import api from "@/services/apis/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const DefaultPaymentMethod = () => {
	const [loading, setLoading] = useState(false);
	const [defaultPaymentMethod, setDefaultPaymentMethod] = useState({});
	const dispatch = useDispatch();
	const { userDefaultPaymentMethod, defaultPaymentMethodLoading } = useSelector(
		(state) => state.user
	);

	useEffect(() => {
		// setLoading(true);
		// api.managePaymentMethod
		// 	.getSavedPaymentMethods()
		// 	.then((res) => {
		// 		console.log(res);
		// 		setDefaultPaymentMethod(res.data.default_payment_method);
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
		<div className="mt-5 bg-white p-4 rounded-md">
			<div className="flex flex-col md:flex-row justify-between">
				<h3 className="font-semibold text-xl">Default Payment Method</h3>
				<Link href="/add-payment-method">
					<div
						className="bg-success rounded-md flex items-center gap-3 p-3 cursor-pointer select-none mt-5 md:mt-0 w-max"
						role="button"
					>
						<AiOutlinePlus className="text-2xl text-white" />
						<p className="text-white">Add Payment Method</p>
					</div>
				</Link>
			</div>
			{defaultPaymentMethodLoading ? (
				<p className="mt-5 text-success">Loading...</p>
			) : userDefaultPaymentMethod.id ? (
				<PaymentCardWhite selected={true} item={userDefaultPaymentMethod} />
			) : (
				<p className="text-gray-600 mt-5">No Default Payment Method Saved!</p>
			)}
		</div>
	);
};

export default DefaultPaymentMethod;
