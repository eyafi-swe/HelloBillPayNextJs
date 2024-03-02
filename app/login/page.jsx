import LoginForm from "@/sections/Login/LoginForm";
import React from "react";

const Login = () => {
	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-4 md:px-0">
				<div>
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Log in to your account
					</h1>
					<p className="mt-3 text-center text-gray-700">
						Welcome back! Please enter your details.
					</p>
				</div>
				<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
