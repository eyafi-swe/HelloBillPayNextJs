"use client";
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import { FaGoogle } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
const paymentMethods = [
	{
		slug: "credit",
		title: "Credit Card",
		img: "/assets/img/credit1.png",
		icon: <></>,
	},
	{
		slug: "venmo",
		title: "Venmo",
		img: "/assets/img/venmo.png",
		icon: <BiLogoVenmo className="text-white text-xl" />,
	},
	{
		slug: "g-pay",
		title: "Google Pay",
		img: "/assets/img/google-pay.png",
		icon: <FaGoogle className="text-xl text-white" />,
	},
	{
		slug: "ap-pay",
		title: "Apple Pay",
		img: "/assets/img/apple-pay.png",
		icon: <BsApple className="text-white text-xl" />,
	},
];
const PaymentMethodTab = ({
	name,
	cardNumber,
	expDate,
	cvv,
	setName,
	setCardNumber,
	setExpDate,
	setCvv,
	errorMsg,
}) => {
	const [activePaymentMethod, setActivePaymentMethod] = useState(
		paymentMethods[0]
	);
	return (
		<>
			<div className="mt-5 flex items-center gap-3">
				{paymentMethods.map((method, index) => (
					<div
						key={index}
						className={`w-24 flex justify-center items-center h-14 border rounded-md ${
							activePaymentMethod.slug == method.slug
								? "border-success bg-success-faded"
								: "border-gray-300"
						}`}
						role="button"
						onClick={() => setActivePaymentMethod(method)}
					>
						<img src={method.img} alt="" className="object-contain " />
					</div>
				))}
			</div>

			{activePaymentMethod.slug == "credit" ? (
				<div className="mt-5">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between mt-3">
						<Input
							lable="Card Holder Name"
							placeholder="Enter Name"
							type="text"
							margin="mt-0 md:w-1/2"
							value={name}
							setValue={setName}
							error={errorMsg.cardHolderName}
							errorMessage={errorMsg.cardHolderName}
						/>
						<Input
							lable="Card Number"
							placeholder="XXXX XXXX XXXX XXXX"
							type="text"
							margin="mt-0 md:w-1/2"
							value={cardNumber}
							setValue={setCardNumber}
							error={errorMsg.cardNumber}
							errorMessage={errorMsg.cardNumber}
						/>
					</div>
					<div className="flex items-center gap-3 justify-between mt-3">
						<Input
							lable="Expire Date"
							placeholder="MM/YY"
							type="text"
							margin="mt-0 w-1/2"
							value={expDate}
							setValue={setExpDate}
							error={errorMsg.cardExpiry}
							errorMessage={errorMsg.cardExpiry}
						/>
						<Input
							lable="CVV"
							placeholder="012"
							type="text"
							margin="mt-0 w-1/2"
							value={cvv}
							setValue={setCvv}
							error={errorMsg.cardCvv}
							errorMessage={errorMsg.cardCvv}
						/>
					</div>
				</div>
			) : (
				<div className="mt-5">
					<div
						className="flex gap-3 items-center bg-success rounded-md px-5 py-2 cursor-pointer select-none w-max"
						role="button"
					>
						{activePaymentMethod.icon}
						<p className="font-medium text-white">
							Pay with {activePaymentMethod.title}
						</p>
					</div>
					<div className="mt-5">
						<Checkbox
							text="Save Payment Info"
							size="w-4 h-4"
							textColor="text-sm text-gray-700"
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default PaymentMethodTab;
