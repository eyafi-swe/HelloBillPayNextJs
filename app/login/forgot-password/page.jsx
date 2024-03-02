import LargeButton from "@/components/Button/LargeButton";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-4 md:px-0  ">
				<div className="w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Forgot Password
					</h1>
					<p className="mt-5 text-center text-gray-700">
						Enter your mobile number below and we will send you an Verification
						code to reset it.
					</p>
				</div>
				<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<div className="w-full">
						<Input
							lable="Mobile"
							placeholder="Enter your mobile number"
							type="text"
						/>

						<div className="mt-5">
							<Link href="/login/forgot-password/verify-code">
								<LargeButton
									text="Send Code"
									textColor="text-white"
									background="bg-success"
								/>
							</Link>
							<Link href="/login">
								<p className="text-center mt-5">
									Back to{" "}
									<span className="font-semibold text-success">Sign in</span>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
