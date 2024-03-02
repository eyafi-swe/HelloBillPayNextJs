"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import LargeButton from "../Button/LargeButton";
import Input from "../Input/FormikHandlerInput";
import { useFormik } from "formik";
import api from "@/services/apis/api";
import { toast } from "react-hot-toast";

const validate = (values) => {
	let errors = {};
	if (!values.currentPassword) {
		errors.currentPassword = "Current Password is required";
	}
	if (!values.newPassword) {
		errors.newPassword = "New Password is required";
	}
	if (!values.retypeNewPassword) {
		errors.retypeNewPassword = "Re-type New Password is required";
	}
	if (values.newPassword !== values.retypeNewPassword) {
		errors.retypeNewPassword = "Password does not match";
	}
	return errors;
};

const ChangePasswordModal = ({ showModal, setShowModal }) => {
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			currentPassword: "",
			newPassword: "",
			retypeNewPassword: "",
		},
		validate,
		onSubmit: async (values) => {
			console.log(values);
			let payload = {
				current_password: values.currentPassword,
				new_password: values.newPassword,
				new_password_confirmation: values.retypeNewPassword,
			};

			setLoading(true);

			api.profile
				.changePassword(payload)
				.then((res) => {
					console.log(res);
					toast.success("Password changed successfully");
					setShowModal(false);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.message);
				})
				.finally(() => {
					setLoading(false);
				});
		},
	});

	return (
		<>
			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
				<div className="flex items-center min-h-screen px-4 py-8">
					<div className="relative p-5 w-full md:w-1/2 2xl:w-1/3 mx-auto bg-white rounded-md shadow-lg">
						<div className="flex justify-end">
							<RxCross2
								className="text-2xl cursor-pointer"
								onClick={() => setShowModal(false)}
							/>
						</div>
						<div className=" px-5 pb-5">
							<h3 className="font-semibold text-2xl text-center">
								Change Password
							</h3>
							<p className="text-center mt-3">
								Your password must be at least 6 characters and should include a
								combination of numbers, letters and special characters (!$@%).
							</p>
							<form onSubmit={formik.handleSubmit}>
								<div className="mt-5">
									<Input
										lable="Current Password"
										type="password"
										placeholder="Current Password"
										name={"currentPassword"}
										values={formik.values.currentPassword}
										onChange={formik.handleChange}
										errorMessage={formik.errors.currentPassword}
									/>
									<Input
										lable="New Password"
										type="password"
										placeholder="New Password"
										name={"newPassword"}
										values={formik.values.newPassword}
										onChange={formik.handleChange}
										errorMessage={formik.errors.newPassword}
									/>
									<Input
										lable="Re-type New Password"
										type="password"
										placeholder="Re-type New Password"
										name={"retypeNewPassword"}
										values={formik.values.retypeNewPassword}
										onChange={formik.handleChange}
										errorMessage={formik.errors.retypeNewPassword}
									/>
									<p className="mt-2 font-medium text-success">
										Forgot your password?
									</p>
									<div className="mt-5">
										<LargeButton
											text="Change Password"
											textColor="text-white"
											background={loading ? "bg-success-light" : "bg-success"}
											disabled={loading}
											disabledText="Changing Password..."
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangePasswordModal;
