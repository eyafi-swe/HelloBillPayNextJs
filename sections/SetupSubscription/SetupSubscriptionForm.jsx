"use client";
import LargeButton from "@/components/Button/LargeButton";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/FormikHandlerInput";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const validate = (values) => {
	const errors = {};
	if (!values.phoneNumber) {
		errors.phoneNumber = "Phone is required";
	}
	if (!values.reEnterPhoneNumber) {
		errors.reEnterPhoneNumber = "Phone is required";
	} else if (values.reEnterPhoneNumber !== values.phoneNumber) {
		errors.reEnterPhoneNumber = "Phone number does not match";
	}
	if (!values.rechargeAmount) {
		errors.rechargeAmount = "Recharge amount is required";
	}

	if (!values.acknowledge) {
		errors.acknowledge = "Required";
	}

	return errors;
};

const SetupSubscriptionForm = ({ carrier, slug }) => {
	const [payOneTime, setPayOneTime] = useState(true);
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			phoneNumber: "",
			reEnterPhoneNumber: "",
			rechargeAmount: "",
			acknowledge: false,
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			const data = {
				...values,
				type: payOneTime ? "one_time" : "autoPay",
			};
			localStorage.setItem("setupSubscriptionData", JSON.stringify(data));
			router.push(`/pay-bills/${slug}/billing-details`);
		},
	});

	const handleRadioInput = (e) => {
		console.log(e.target.value);
		if (e.target.value === "pay-one-time") {
			setPayOneTime(true);
		} else {
			setPayOneTime(false);
		}
	};

	return (
		<div className="p-5 bg-white shadow-xl rounded-md">
			<p className="font-semibold">Enter your {carrier.title} Details</p>
			<form onSubmit={formik.handleSubmit}>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3 gap-5">
					<div className="w-full md:w-1/2">
						<Input
							lable="Phone Number"
							placeholder="Enter your phone number"
							onChange={formik.handleChange}
							name="phoneNumber"
							values={formik.values.phoneNumber}
							errorMessage={formik.errors.phoneNumber}
						/>
					</div>
					<div className="w-full md:w-1/2">
						<Input
							lable="Re-Enter Phone Number"
							placeholder="Re-Enter your phone number"
							onChange={formik.handleChange}
							name="reEnterPhoneNumber"
							values={formik.values.reEnterPhoneNumber}
							errorMessage={formik.errors.reEnterPhoneNumber}
						/>
					</div>
				</div>
				<div className="mt-3 w-full  md:w-1/2">
					<Input
						lable="Recharge Amount"
						placeholder="Enter Amount"
						onChange={formik.handleChange}
						name="rechargeAmount"
						values={formik.values.rechargeAmount}
						errorMessage={formik.errors.rechargeAmount}
					/>
				</div>
				<div className="mt-3">
					<p className="font-semibold">Setup Subscribe</p>
					<div className="flex items-center mt-2">
						<input
							checked={payOneTime}
							type="radio"
							id="pay-one-time"
							value="pay-one-time"
							name="payment-method"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
							onChange={(e) => handleRadioInput(e)}
						/>
						<label htmlFor="pay-one-time" className="ml-2">
							Pay One Time
						</label>
					</div>
					<div className="flex items-center mt-2">
						<input
							type="radio"
							id="autopay-every-month"
							value="autopay-every-month"
							name="payment-method"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
							onChange={(e) => handleRadioInput(e)}
						/>
						<label htmlFor="autopay-every-month" className="ml-2">
							Auto Pay Every Month
						</label>
					</div>

					<div className="mt-2">
						<Checkbox
							text="I acknowledge XXX-XXX-XXXX is correct. No refunds will be provided."
							size="w-4 h-4"
							textColor="text-gray-700 text-sm"
							values={formik.values.acknowledge}
							name="acknowledge"
							onChange={formik.handleChange}
						/>
					</div>
					<div className="mt-5">
						{/* <Link href={`/pay-bills/${slug}/billing-details`}> */}
						<LargeButton
							text="Continue"
							textColor="text-white"
							background={`${
								formik.errors.acknowledge ||
								formik.errors.phoneNumber ||
								formik.errors.reEnterPhoneNumber ||
								formik.errors.rechargeAmount
									? "bg-gray-400"
									: "bg-success"
							} text-white`}
							disabled={
								formik.errors.acknowledge ||
								formik.errors.phoneNumber ||
								formik.errors.reEnterPhoneNumber ||
								formik.errors.rechargeAmount
									? true
									: false
							}
							disabledText="Continue"
							showLoader={false}
						/>
						{/* </Link> */}
					</div>
				</div>
			</form>
		</div>
	);
};

export default SetupSubscriptionForm;
