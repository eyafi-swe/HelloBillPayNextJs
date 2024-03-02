"use client";
import LargeButton from "@/components/Button/LargeButton";
import Input from "@/components/Input/FormikHandlerInput";
import api from "@/services/apis/api";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = "Name is Required";
	}
	if (!values.accountNumber) {
		errors.accountNumber = "Account Number is Required";
	} else if (values.accountNumber.length < 16) {
		errors.accountNumber = "Must be 16 digits";
	}
	if (!values.reEnterAccountNumber) {
		errors.reEnterAccountNumber = "Account Number is Required";
	} else if (values.reEnterAccountNumber.length < 16) {
		errors.reEnterAccountNumber = "Must be 16 digits";
	}
	if (values.accountNumber !== values.reEnterAccountNumber) {
		errors.reEnterAccountNumber = "Account number does not match";
	}
	if (!values.routingNumber) {
		errors.routingNumber = "Routing Number is Required";
	} else if (values.routingNumber.length < 9) {
		errors.routingNumber = "Must be 9 digits";
	}
	return errors;
};

const AddBankAccountForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			name: "",
			accountNumber: "",
			reEnterAccountNumber: "",
			routingNumber: "",
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			const payload = {
				domain_id: 1,
				name: values.name,
				account_number: values.accountNumber,
				routing_number: values.routingNumber,
			};
			setLoading(true);
			api.managePaymentMethod
				.addBankAccount(payload)
				.then((res) => {
					console.log(res);
					if (res.success) {
						toast.success("Bank account added successfully");
						router.back();
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error("Something went wrong. Try again!");
				})
				.finally(() => setLoading(false));
		},
	});

	return (
		<div className="w-full md:w-2/3 lg:w-1/2">
			<form onSubmit={formik.handleSubmit}>
				<div className="w-full  bg-white shadow-md rounded-md p-5">
					<Input
						lable="Account Holder Name"
						placeholder="Enter Name"
						name="name"
						onChange={formik.handleChange}
						value={formik.values.name}
						errorMessage={formik.errors.name}
					/>
					<Input
						lable="Account Number"
						placeholder="XXXX XXXX XXXX XXXX"
						name="accountNumber"
						onChange={formik.handleChange}
						value={formik.values.accountNumber}
						errorMessage={formik.errors.accountNumber}
					/>
					<Input
						lable="Re-Enter Account Number"
						placeholder="XXXX XXXX XXXX XXXX"
						name="reEnterAccountNumber"
						onChange={formik.handleChange}
						value={formik.values.reEnterAccountNumber}
						errorMessage={formik.errors.reEnterAccountNumber}
					/>
					<Input
						lable="RoutingNumber"
						placeholder="XXX XXX XXX"
						name="routingNumber"
						onChange={formik.handleChange}
						value={formik.values.routingNumber}
						errorMessage={formik.errors.routingNumber}
					/>
				</div>
				<div className="mt-10 flex justify-center w-full  mx-auto">
					<LargeButton
						text="Done"
						textColor="text-white"
						background={`${loading ? "bg-success-light" : "bg-success"}`}
						width="w-full md:w-2/3 lg:w-1/2"
						disabled={loading}
						disabledText="Adding..."
					/>
				</div>
			</form>
		</div>
	);
};

export default AddBankAccountForm;
