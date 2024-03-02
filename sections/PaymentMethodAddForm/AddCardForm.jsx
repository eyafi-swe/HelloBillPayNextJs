"use client";
import LargeButton from "@/components/Button/LargeButton";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/FormikHandlerInput";
import api from "@/services/apis/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = "Name is Required";
	}
	if (!values.cardNumber) {
		errors.cardNumber = "Card Number is Required";
	} else if (values.cardNumber.length !== 16) {
		errors.cardNumber = "Must be 16 digits";
	}
	if (!values.expirationDate) {
		errors.expirationDate = "Expiration Date is Required";
	} else if (
		!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(values.expirationDate)
	) {
		errors.expirationDate = "Invalid Date";
	} else if (
		values.expirationDate.split("/")[1] <
		new Date().getFullYear().toString().slice(2, 4)
	) {
		errors.expirationDate = "Invalid Date";
	} else if (
		Number(values.expirationDate.split("/")[0]) <
		Number(new Date().getMonth().toString()) + 2
	) {
		errors.expirationDate = "Invalid Date";
	}
	if (!values.cvv) {
		errors.cvv = "CVV is Required";
	} else if (values.cvv.length !== 3) {
		errors.cvv = "Must be 3 digits";
	}
	return errors;
};

const AddCardForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			name: "",
			cardNumber: "",
			expirationDate: "",
			cvv: "",
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			let splittedDate = values.expirationDate.split("/");
			let formattedDate =
				new Date().getFullYear().toString().slice(0, 2) +
				splittedDate[1] +
				"-" +
				splittedDate[0] +
				"-30";
			console.log(formattedDate);
			const payload = {
				domain_id: 1,
				name: values.name,
				card_number: values.cardNumber,
				expire_date: formattedDate,
				cvv: values.cvv,
			};
			setLoading(true);
			api.managePaymentMethod
				.addCard(payload)
				.then((res) => {
					console.log(res);
					if (res.success) {
						toast.success("Card added successfully");
						router.back();
					}
				})
				.catch((err) => {
					console.log(err);
					let errMsg = "";
					try {
						errMsg = getErrorMessage(err);
					} catch (error) {
						errMsg = "Something went wrong. Try again!";
					}
					toast.error(errMsg);
				})
				.finally(() => setLoading(false));
		},
	});

	return (
		<div className="w-full md:w-2/3 lg:w-1/2">
			<form onSubmit={formik.handleSubmit}>
				<div className="w-full  bg-white shadow-md rounded-md p-5">
					<Input
						lable="Name as it appears on card"
						placeholder="Enter Name"
						type="text"
						margin="mt-0"
						name="name"
						onChange={formik.handleChange}
						values={formik.values.name}
						errorMessage={formik.errors.name}
					/>
					<Input
						lable="Card Number"
						placeholder="XXXX XXXX XXXX XXXX"
						type="text"
						name="cardNumber"
						onChange={formik.handleChange}
						values={formik.values.cardNumber}
						errorMessage={formik.errors.cardNumber}
					/>
					<div className="flex flex-col md:flex-row items-center md:gap-5">
						<Input
							lable="Expiration Date"
							placeholder="MM/YY"
							type="text"
							margin="w-full md:w-1/2 mt-3"
							name="expirationDate"
							onChange={formik.handleChange}
							values={formik.values.expirationDate}
							errorMessage={formik.errors.expirationDate}
						/>
						<Input
							lable="CVV"
							placeholder="012"
							type="text"
							margin="w-full md:w-1/2 mt-3"
							name="cvv"
							onChange={formik.handleChange}
							values={formik.values.cvv}
							errorMessage={formik.errors.cvv}
						/>
					</div>
					<div className="mt-5">
						<Checkbox text="Save Payment Info" size="w-4 h-4" />
					</div>
				</div>
				<div className="mt-10 flex justify-center w-full  mx-auto">
					<LargeButton
						text="Done"
						textColor="text-white"
						background="bg-success"
						width="w-full md:w-2/3 lg:w-1/2"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddCardForm;
