"use client";

import PaymentCard from "@/components/PaymentCard/PaymentCard";
import PaymentMethodTab from "@/components/PaymentMethodTab/PaymentMethodTab";
import api from "@/services/apis/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const PaymentInformation = ({ slug, handleSubmit }) => {
	const [savedPaymentMethod, setSavedPaymentMethod] = useState(true);
	const [defaultPaymentMethod, setdefaultPaymentMethod] = useState({});
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
	const [cardHolderName, setCardHolderName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCvv, setCardCvv] = useState("");
	const [errorMessage, setErrorMessage] = useState({
		cardHolderName: "",
		cardNumber: "",
		cardExpiry: "",
		cardCvv: "",
	});
	const [loading, setLoading] = useState(false);
	const { data: session } = useSession();
	const router = useRouter();

	const handleRadioInput = (e) => {
		console.log(e.target.value);
		if (e.target.value === "saved") {
			setSavedPaymentMethod(true);
		} else {
			setSavedPaymentMethod(false);
		}
	};

	useEffect(() => {
		if (session?.user) {
			setLoading(true);
			api.managePaymentMethod
				.getSavedPaymentMethods()
				.then((res) => {
					console.log(res.data);
					if (res.success) {
						setdefaultPaymentMethod(res.data.default_payment_method);
						if (JSON.parse(localStorage.getItem("selectedPaymentMethod"))) {
							setSelectedPaymentMethod(
								JSON.parse(localStorage.getItem("selectedPaymentMethod"))
							);
						} else {
							console.log("here");
							setSelectedPaymentMethod(res.data.default_payment_method);
						}
					}
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		}
	}, [session?.user]);

	const handlePaymentMethodSelect = () => {
		if (!savedPaymentMethod || !session?.user) {
			if (
				!cardHolderName ||
				cardHolderName.trim() == "" ||
				!cardNumber ||
				cardNumber.trim() == "" ||
				!cardExpiry ||
				cardExpiry.trim() == "" ||
				!cardCvv ||
				cardCvv.trim() == ""
			) {
				setErrorMessage({
					cardHolderName:
						!cardHolderName || cardHolderName.trim() == ""
							? "Card holder name is required"
							: "",
					cardNumber:
						!cardNumber || cardNumber.trim() == ""
							? "Card number is required"
							: "",
					cardExpiry:
						!cardExpiry || cardExpiry.trim() == ""
							? "Card expiry is required"
							: "",
					cardCvv:
						!cardCvv || cardCvv.trim() == "" ? "Card cvv is required" : "",
				});
				return;
			} else {
				setErrorMessage({
					cardHolderName: "",
					cardNumber: "",
					cardExpiry: "",
					cardCvv: "",
				});
			}

			const cardDetails = {
				cardHolderName,
				cardNumber,
				cardExpiry,
				cardCvv,
			};
			handleSubmit(cardDetails, false);
		} else {
			if (selectedPaymentMethod?.id) {
				handleSubmit(selectedPaymentMethod, true);
			} else {
				toast.error("Please Add a payment method");
				return;
			}
		}
	};

	return (
		<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
			<div className="col-span-2">
				<div className=" bg-white p-5 rounded-md shadow-md">
					<h3 className="text-xl font-semibold">Payment Information</h3>
					{session?.user ? (
						<div className="mt-5">
							<div className="flex items-center ">
								<input
									checked={savedPaymentMethod}
									type="radio"
									id="saved"
									value="saved"
									name="payment-method"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
									onChange={(e) => handleRadioInput(e)}
								/>
								<label htmlFor="saved" className="ml-2 font-medium">
									Saved Payment Method
								</label>
							</div>
							{savedPaymentMethod &&
								(selectedPaymentMethod?.id ? (
									<PaymentCard item={selectedPaymentMethod} />
								) : loading ? (
									<p className="mt-3 text-success text-center">Loading...</p>
								) : (
									<p className="mt-3 text-success text-center">
										No Payment Method Saved!
									</p>
								))}
							<div className="mt-2 flex items-center">
								<input
									type="radio"
									id="other"
									value="other"
									name="payment-method"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
									onChange={(e) => handleRadioInput(e)}
								/>
								<label htmlFor="other" className="ml-2 font-medium">
									Other Payment Method
								</label>
							</div>
							{!savedPaymentMethod && (
								<PaymentMethodTab
									name={cardHolderName}
									cardNumber={cardNumber}
									expDate={cardExpiry}
									cvv={cardCvv}
									setName={setCardHolderName}
									setCardNumber={setCardNumber}
									setExpDate={setCardExpiry}
									setCvv={setCardCvv}
									errorMsg={errorMessage}
								/>
							)}
						</div>
					) : (
						<PaymentMethodTab
							name={cardHolderName}
							cardNumber={cardNumber}
							expDate={cardExpiry}
							cvv={cardCvv}
							setName={setCardHolderName}
							setCardNumber={setCardNumber}
							setExpDate={setCardExpiry}
							setCvv={setCardCvv}
							errorMsg={errorMessage}
						/>
					)}
				</div>
				<div className="mt-5 flex justify-end">
					<div className="flex items-center gap-3">
						<button
							className="rounded-md border font-medium px-4 py-2"
							onClick={() => router.back()}
						>
							Back
						</button>

						<button
							className="rounded-md border font-medium px-4 py-2 bg-success text-white"
							// onClick={() => handleSubmit(selectedPaymentMethod)}
							onClick={() => handlePaymentMethodSelect()}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentInformation;
