"use client";
import ChangePasswordModal from "@/components/Modal/ChangePasswordModal";
import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const ChangePassword = () => {
	const [openChangePassModal, setOpenChangePassModal] = useState(false);
	return (
		<div className="mt-5 bg-white p-4 rounded-md">
			<h3 className="font-semibold text-xl">Password</h3>
			<div
				className="mt-5 p-4 bg-slate-100 rounded-md flex justify-between items-center select-none"
				role="button"
				onClick={() => setOpenChangePassModal(true)}
			>
				<p>Change Password</p>
				<LiaAngleRightSolid className="text-2xl text-gray-800" />
			</div>

			{openChangePassModal ? (
				<ChangePasswordModal
					showModal={openChangePassModal}
					setShowModal={setOpenChangePassModal}
				/>
			) : null}
		</div>
	);
};

export default ChangePassword;
