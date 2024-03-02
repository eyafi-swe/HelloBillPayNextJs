"use client";
import LargeButton from "@/components/Button/LargeButton";
import DateInput from "@/components/Input/DateInput";
import Input from "@/components/Input/FormikHandlerInput";
import api from "@/services/apis/api";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
	if (!values.residentialAddress) {
		errors.residentialAddress = "Residential Address is required";
	}
	// console.log(errors);
	return errors;
};

const ProfileUpdate = () => {
	const [date, setDate] = useState(null);
	const [loading, setLoading] = useState(false);
	const { data: session, update } = useSession();
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			residentialAddress: "",
		},
		validate,
	});

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

	const handleUpdateProfile = () => {
		console.log(formik.values, date);
		let dateStr = date.toISOString().split("T")[0];
		const payload = {
			first_name: formik.values.firstName,
			last_name: formik.values.lastName,
			email: formik.values.email,
			date_of_birth: dateStr,
			residensial_address: formik.values.residentialAddress,
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
					router.push("/sign-up/all-set");
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div>
			<div className="container mx-auto px-5 md:px-0">
				<div>
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Almost there!
					</h1>
					<p className="mt-3 text-center text-gray-700">
						Please enter your all information.
					</p>
				</div>
				<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<div className="w-full">
						<form onSubmit={formik.handleSubmit}>
							<Input
								lable="First Name"
								placeholder="Enter First Name"
								type="text"
								onChange={formik.handleChange}
								name={"firstName"}
								values={formik.values.firstName}
								errorMessage={formik.errors.firstName}
							/>
							<Input
								lable="Last Name"
								placeholder="Enter Last Name"
								type="text"
								onChange={formik.handleChange}
								name={"lastName"}
								values={formik.values.lastName}
								errorMessage={formik.errors.lastName}
							/>
							<Input
								lable="Email"
								placeholder="Enter Email Address"
								type="email"
								onChange={formik.handleChange}
								name={"email"}
								values={formik.values.email}
								errorMessage={formik.errors.email}
							/>
							<DateInput lable="Date of Birth" date={date} setDate={setDate} />
							<Input
								lable="Resdential Address"
								placeholder="Enter your address"
								type="text"
								onChange={formik.handleChange}
								name={"residentialAddress"}
								values={formik.values.residentialAddress}
								errorMessage={formik.errors.residentialAddress}
							/>
						</form>

						<div className="mt-5">
							<LargeButton
								text="Save"
								textColor="text-white"
								background={loading ? "bg-success-light" : "bg-success"}
								disabled={loading}
								disabledText="Saving"
								action={handleUpdateProfile}
							/>
						</div>

						<div className="mt-5 flex items-center justify-center">
							<Link href="#">
								<p className="font-semibold text-success">Skip Now,</p>
							</Link>
							<p className="ml-2">I&apos;ll complete it later</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileUpdate;
