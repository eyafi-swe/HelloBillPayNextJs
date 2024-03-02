"use client";

import LargeButton from "@/components/Button/LargeButton";
import OTPInput from "@/components/OTPInput/OTPInput";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VerifyCode = () => {
	const [code, setCode] = useState("");

	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-4 md:px-0  ">
				<div className="w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Code Verification
					</h1>
					<p className="mt-5 text-center text-gray-700">
						Enter 4-digit code vivabillpay just sent to (+1234...8963).
					</p>
				</div>
				<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<div className="w-full">
						<OTPInput code={code} setCode={setCode} />
						<p className="mt-5 text-center">
							If you didn&apos;t receive the code!{" "}
							<span className="text-success font-semibold">Resend</span>
						</p>
						<div className="mt-10">
							<Link href="/login/reset-password">
								<LargeButton
									text="Verify"
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

export default VerifyCode;
