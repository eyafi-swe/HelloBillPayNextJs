"use client";
import LargeButton from "@/components/Button/LargeButton";
import SocialAuthButton from "@/components/Button/SocialAuthButton";
import Input from "@/components/Input/FormikHandlerInput";
import api from "@/services/apis/api";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const validate = (values) => {
	// console.log(values);
	let errors = {};
	if (!values.mobile) {
		errors.mobile = "Mobile number is required";
	}
	if (!values.password) {
		errors.password = "Password is required";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm Password is required";
	}
	if (values.password !== values.confirmPassword) {
		errors.confirmPassword = "Password and Confirm Password must be same";
	}
	// console.log(errors);
	return errors;
};

const SignUpform = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			mobile: "",
			password: "",
			confirmPassword: "",
		},
		validate,
	});

	const login = async (mobile, password) => {
		const res = await signIn("credentials", {
			mobile,
			password,
			redirect: false,
		});
		console.log(res);
	};

	const handleSignUp = () => {
		// console.log(formik.values);
		setLoading(true);
		const payload = {
			mobile: formik.values.mobile,
			password: formik.values.password,
			password_confirmation: formik.values.confirmPassword,
		};
		api.auth
			.registration(payload)
			.then((res) => {
				console.log(res);
				if (res.success) {
					toast.success("Registration Successful. Plesage update profile.");
					login(formik.values.mobile, formik.values.password);
					router.push("/sign-up/second-step");
				}
			})
			.catch((err) => {
				// console.log(err);
				let errorMessage = "";
				try {
					errorMessage = getErrorMessage(err);
				} catch (error) {
					errorMessage = "Something went wrong";
				}

				toast.error(errorMessage);
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
			<div className="w-full">
				<form onSubmit={formik.handleSubmit}>
					<Input
						lable="Mobile"
						placeholder="Enter your mobile number"
						type="text"
						name="mobile"
						onChange={formik.handleChange}
						values={formik.values.mobile}
						errorMessage={formik.errors.mobile}
					/>
					<Input
						lable="Password"
						placeholder="Enter your Password"
						type="password"
						name="password"
						onChange={formik.handleChange}
						values={formik.values.password}
						errorMessage={formik.errors.password}
					/>
					<Input
						lable="Confirm Password"
						placeholder="Re-type your Password"
						type="password"
						name="confirmPassword"
						onChange={formik.handleChange}
						values={formik.values.confirmPassword}
						errorMessage={formik.errors.confirmPassword}
					/>
				</form>

				<div className="mt-5">
					{/* <Link href="/sign-up/second-step"> */}
					<LargeButton
						text="Sign up"
						textColor="text-white"
						background={loading ? "bg-success-light" : "bg-success"}
						action={handleSignUp}
						disabled={loading}
						disabledText="Signing Up"
					/>
					{/* </Link> */}
				</div>
				<div className="mt-3">
					<SocialAuthButton
						icon="/assets/img/GoogleIcon.svg"
						text="Sign in with Google"
						textColor="text-black"
						background="bg-white"
						border="border border-gray-300"
					/>
				</div>
				<div className="mt-3">
					<SocialAuthButton
						icon="/assets/img/AppleBlackIcon.svg"
						text="Sign in with Apple"
						textColor="text-black"
						background="bg-white"
						border="border border-gray-300"
					/>
				</div>
				<div className="mt-5 flex items-center justify-center">
					<p>Already have an account? </p>
					<Link href="/login">
						<p className="font-semibold text-success ml-2">Sign in</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpform;
