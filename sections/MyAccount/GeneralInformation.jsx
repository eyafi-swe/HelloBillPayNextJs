"use client";
import LargeButton from "@/components/Button/LargeButton";
import DateInput from "@/components/Input/DateInput";
import Input from "@/components/Input/FormikHandlerInput";
import api from "@/services/apis/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const validate = (values) => {
	// console.log(values);
	let errors = {};
	if (!values.firstName) {
		errors.firstName = "First Name is required";
	}
	if (!values.lastName) {
		errors.lastName = "Last Name is required";
	}
	if (!values.email) {
		errors.email = "Email is required";
	} else if (
		!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
	) {
		errors.email = "Invalid Email Address";
	}
	if (!values.phone) {
		errors.phone = "Phone Number is required";
	}
	if (!values.add) {
		errors.add = "Residential Address is required";
	}
	// console.log(errors);
	return errors;
};

const GeneralInformation = () => {
	const [date, setDate] = useState(null);
	const [loading, setLoading] = useState(false);
	const { data: session, update } = useSession();
	const { email, image } = session?.user;
	const { fullName, phone, dob, add } = JSON.parse(session?.user?.name || "{}");
	let splitName = fullName.split(" ");
	let firstName = splitName.slice(0, splitName.length - 1).join(" ");
	let lastName = splitName[splitName.length - 1];

	const updateSession = async (name, email, mobile, dob, add) => {
		await update({
			...session,
			user: {
				...session.user,
				name: JSON.stringify({
					...JSON.parse(session.user.name),
					fullName: name,
					phone: mobile,
					dob: dob,
					add: add,
				}),
				email,
			},
		});
	};

	const formik = useFormik({
		initialValues: {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			add: add,
		},
		validate,
		onSubmit: async (values) => {
			console.log(values, date);
			let dateStr;
			if (date) {
				dateStr = date.toISOString().split("T")[0];
			}
			const payload = {
				first_name: values.firstName,
				last_name: values.lastName,
				email: values.email,
				date_of_birth: dateStr,
				residensial_address: values.add,
			};
			setLoading(true);
			api.profile
				.updateProfile(payload)
				.then((res) => {
					console.log(res);
					if (res.success) {
						updateSession(
							`${res.data.first_name + " " + res.data.last_name}`,
							res.data.email,
							res.data.mobile,
							res.data.date_of_birth,
							res.data.residensial_address
						);
						toast.success("Profile Updated Successfully.");
					}
				})
				.catch((err) => {
					console.log(err);
					let errmsg = "";
					try {
						errmsg = getErrorMessage(err);
					} catch (error) {
						errmsg = "Something went wrong!";
					}
					toast.error(errmsg);
				})
				.finally(() => setLoading(false));
		},
	});

	return (
		<div className="mt-5 bg-white rounded-md p-4">
			<h3 className="font-semibold text-xl">General Information</h3>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
					<Input
						lable="First Name"
						placeholder="John"
						type="text"
						margin="mt-0"
						onChange={formik.handleChange}
						name="firstName"
						values={formik.values.firstName}
						errorMessage={formik.errors.firstName}
					/>
					<Input
						lable="Last Name"
						placeholder="Doe"
						type="text"
						margin="mt-0"
						onChange={formik.handleChange}
						name="lastName"
						values={formik.values.lastName}
						errorMessage={formik.errors.lastName}
					/>
					<Input
						lable="Email"
						placeholder="example@hotmail.com"
						type="email"
						margin="mt-0"
						onChange={formik.handleChange}
						name="email"
						values={formik.values.email}
						errorMessage={formik.errors.email}
					/>
					<Input
						lable="Phone Number"
						placeholder="+880 123456789"
						type="text"
						margin="mt-0"
						onChange={formik.handleChange}
						name="phone"
						values={formik.values.phone}
						errorMessage={formik.errors.phone}
					/>
					<DateInput
						lable="Date of Birth"
						placeholder="DD/MM/YYYY"
						margin="mt-0"
						date={date}
						setDate={setDate}
					/>
					<Input
						lable="Residential Address"
						placeholder="House 1, Road 1, Block A, Dhaka"
						type="text"
						margin="mt-0"
						onChange={formik.handleChange}
						name="add"
						values={formik.values.add}
						errorMessage={formik.errors.add}
					/>
				</div>
				{/* <button className="bg-success rounded-md px-4 py-2 mt-3 text-white font-medium">
					Save All
				</button> */}
				<div className="mt-3">
					<LargeButton
						text="Save All"
						textColor="text-white"
						width="w-32"
						background={loading ? "bg-success-light" : "bg-success"}
						disabled={loading}
						disabledText="Saving..."
					/>
				</div>
			</form>
		</div>
	);
};

export default GeneralInformation;
