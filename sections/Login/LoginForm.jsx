"use client";
import LargeButton from "@/components/Button/LargeButton";
import SocialAuthButton from "@/components/Button/SocialAuthButton";
import Checkbox from "@/components/Checkbox/Checkbox";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
	const [mobile, setMobile] = useState("01531782682");
	const [password, setPassword] = useState("helloworl1@");
	const { data: session } = useSession();
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState({
		mobile: "",
		password: "",
	});
	const [authError, setAuthError] = useState("");
	const [loading, setLoading] = useState(false);
	const searchParams = useSearchParams();
	const redirect = searchParams.get("redirect");
	console.log(redirect);

	useEffect(() => {
		console.log(session);
		if (session?.user) {
			const user = session?.user;
			console.log(user);
		}
	}, [session]);

	const handleLogin = async () => {
		if (mobile === "" || mobile.trim() === "") {
			let err = { ...errorMessage };
			err.mobile = "Mobile number is required";
			setAuthError("");
			setErrorMessage(err);
			return;
		}
		if (password === "") {
			setAuthError("");
			let err = { ...errorMessage };
			err.password = "Password is required";
			err.mobile = "";
			setErrorMessage(err);
			return;
		}
		if (password.trim() === "") {
			setAuthError("");
			let err = { ...errorMessage };
			err.password = "Password can't be space";
			err.mobile = "";
			setErrorMessage(err);
			return;
		}
		setLoading(true);
		const response = await signIn("credentials", {
			mobile,
			password,
			redirect: false,
			// callbackUrl: "/",
		});
		if (response.error) {
			setLoading(false);
			setErrorMessage({
				mobile: "",
				password: "",
			});
			setAuthError(response.error);
		} else {
			setLoading(false);
			setErrorMessage({
				mobile: "",
				password: "",
			});
			router.push(redirect || "/");
			localStorage.removeItem("selectedPaymentMethod");
			localStorage.removeItem("billingDetails");
			localStorage.removeItem("setupSubscriptionData");
		}
	};

	const handleGoogleLogin = async () => {
		await signIn("google", {
			redirect: false,
			callbackUrl: "/",
		});
		localStorage.removeItem("selectedPaymentMethod");
		localStorage.removeItem("billingDetails");
		localStorage.removeItem("setupSubscriptionData");
	};

	return (
		<div className="w-full">
			<Input
				lable="Mobile"
				placeholder="Enter your mobile number"
				type="text"
				value={mobile}
				setValue={setMobile}
				errorMessage={errorMessage.mobile}
				error={errorMessage.mobile !== ""}
			/>
			<Input
				lable="Password"
				placeholder="Enter your Password"
				type="password"
				value={password}
				setValue={setPassword}
				errorMessage={errorMessage.password}
				error={errorMessage.password !== ""}
			/>
			{authError !== "" && <p className="text-red-500 text-sm">{authError}</p>}
			<div className="flex justify-between mt-5">
				<Checkbox text="Remember me" size="w-4 h-4" />
				<Link href="/login/forgot-password">
					<p className="font-semibold text-success">Forgot Password?</p>
				</Link>
			</div>
			<div className="mt-5">
				<LargeButton
					text="Sign in"
					textColor="text-white"
					background={loading ? "bg-success-light" : "bg-success"}
					action={handleLogin}
					disabled={loading}
					disabledText="Signing In"
				/>
			</div>
			<div className="mt-3">
				<SocialAuthButton
					icon="/assets/img/GoogleIcon.svg"
					text="Sign in with Google"
					textColor="text-black"
					background="bg-white"
					border="border border-gray-300"
					action={handleGoogleLogin}
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
				<p>New here? </p>
				<Link href="/sign-up">
					<p className="font-semibold text-success ml-2">Create an account</p>
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
