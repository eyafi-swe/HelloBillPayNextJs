"use client";
import LargeButton from "@/components/Button/LargeButton";
import SuccessModal from "@/components/Modal/SuccessModal";
import PaymentCardWhite from "@/components/PaymentCard/PaymentCardWhite";
import PaymentCardWithRadio from "@/components/PaymentCard/PaymentCardWithRadio";
import GoBack from "@/components/Navigation/GoBack";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import api from "@/services/apis/api";
import ScreenLoader from "@/components/Loaders/ScreenLoader/ScreenLoader";
import { useRouter } from "next/navigation";

// const savedPaymentMethods = [
// 	{
// 		id: 991,
// 		type: "mastercard",
// 		lastFourDigits: "1234",
// 		owner: "John Doe",
// 	},
// 	{
// 		id: 992,
// 		type: "visa",
// 		lastFourDigits: "4567",
// 		owner: "John Doe",
// 	},
// ];

// const defaultPaymentMethod = {
// 	id: 990,
// 	type: "mastercard",
// 	lastFourDigits: "4978",
// 	owner: "John Doe",
// };

const ManagePaymentMethod = () => {
	const [loading, setLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
	const [paymentMethods, setPaymentMethods] = useState([]);
	const [defaultPaymentMethod, setDefaultPaymentMethod] = useState({});
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const router = useRouter();

	const handleSelectPaymentMethod = (paymentMethod) => {
		setSelectedPaymentMethod(paymentMethod);
		localStorage.setItem(
			"selectedPaymentMethod",
			JSON.stringify(paymentMethod)
		);
	};
	const handleDefault = (item) => {
		console.log(item);
		api.managePaymentMethod
			.makeDefaultPaymentMethod({ id: item.id })
			.then((res) => {
				if (res.success) {
					console.log(res.data);
					setModalMessage("Successfully Updated");
					setShowSuccessModal(true);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setRefetch(!refetch);
			});
	};
	const handleDelete = (item) => {
		console.log(item);
		api.managePaymentMethod
			.deletePaymentMethod({ id: item.id })
			.then((res) => {
				if (res.success) {
					console.log(res.data);

					setModalMessage("Successfully Deleted");
					setShowSuccessModal(true);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setRefetch(!refetch);
			});
	};

	useEffect(() => {
		setLoading(true);
		api.managePaymentMethod
			.getSavedPaymentMethods()
			.then((res) => {
				if (res.success) {
					console.log(res.data);
					setPaymentMethods(res.data.non_default_payment_method);
					setDefaultPaymentMethod(res.data.default_payment_method);
					setSelectedPaymentMethod(res.data.default_payment_method);
					if (res.data.default_payment_method) {
						localStorage.setItem(
							"selectedPaymentMethod",
							JSON.stringify(res.data.default_payment_method)
						);
					} else {
						localStorage.removeItem("selectedPaymentMethod");
					}
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [refetch]);

	return (
		<div className="pt-10 pb-16 bg-slate-50">
			<div className="container mx-auto px-5 md:px-0">
				<GoBack text={"Change Payment Method"} />
				<div className="mt-10 flex justify-center">
					<div className="w-full md:w-2/3 lg:w-1/2">
						{loading ? (
							<ScreenLoader height="h-72" />
						) : (
							<>
								<h5 className="font-semibold">Default Payment Method</h5>
								{defaultPaymentMethod.id ? (
									<PaymentCardWhite
										selected={
											selectedPaymentMethod.id === defaultPaymentMethod.id
										}
										item={defaultPaymentMethod}
										onSelect={() =>
											handleSelectPaymentMethod(defaultPaymentMethod)
										}
									/>
								) : (
									<p className="font-semibold text-red-500 mt-3">
										No Default Payment Method! Please Add One.
									</p>
								)}
								<div className="mt-10">
									<h5 className="font-semibold">Choose From Saved Method</h5>
									<div className="mt-5">
										{paymentMethods.length === 0 ? (
											<p className="font-semibold text-red-500">
												No Saved Payment Method! Please Add One.
											</p>
										) : (
											paymentMethods?.map((item, index) => (
												<PaymentCardWithRadio
													key={index}
													selected={selectedPaymentMethod.id === item.id}
													item={item}
													handleDefault={handleDefault}
													handleDelete={handleDelete}
													onSelect={() => handleSelectPaymentMethod(item)}
												/>
											))
										)}
									</div>
								</div>
								<div className=" mt-10 flex flex-col md:flex-row justify-between items-center gap-5 select-none">
									<Link href="/add-payment-method" className="w-full md:w-1/2">
										<LargeButton
											text="Add Payment Method"
											background="bg-slate-100 border"
											textColor="text-black"
											width="w-full"
										/>
									</Link>
									<LargeButton
										text="Continue"
										background="bg-success"
										textColor="text-white"
										width="w-full md:w-1/2"
										action={() => router.back()}
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			{showSuccessModal && (
				<SuccessModal
					message={modalMessage}
					setShowModal={setShowSuccessModal}
				/>
			)}
		</div>
	);
};

export default ManagePaymentMethod;
