"use client";

import LargeButton from "@/components/Button/LargeButton";
import Input from "@/components/Input/Input";
import ResetPasswordSuccessModal from "@/components/Modal/ResetPasswordSuccessModal";
import Link from "next/link";
import React, { useState } from "react";

const ResetPassword = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-4 md:px-0">
				<div>
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Set your password
					</h1>
					<p className="mt-3 text-center text-gray-700">
						Your identity has been verified! Set your new password.
					</p>
				</div>
				<div className="mt-5  flex justify-center w-5/6 md:w-4/6  lg:w-2/5 xl:w-2/6 2xl:w-1/4 mx-auto">
					<div className="w-full">
						<Input
							lable="New Password"
							placeholder="Enter a password"
							type="password"
						/>
						<Input
							lable="Confirm Password"
							placeholder="Repeat Password"
							type="password"
						/>

						<div className="mt-7">
							<LargeButton
								text="Update"
								textColor="text-white"
								background="bg-success"
								action={() => setShowModal(true)}
							/>

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

			{showModal ? (
				<ResetPasswordSuccessModal
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			) : null}
		</div>
	);
};

export default ResetPassword;
