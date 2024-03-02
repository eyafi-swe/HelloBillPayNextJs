import ChangePassword from "@/sections/MyAccount/ChangePassword";
import DefaultPaymentMethod from "@/sections/MyAccount/DefaultPaymentMethod";
import GeneralInformation from "@/sections/MyAccount/GeneralInformation";
import ProfileInfo from "@/sections/MyAccount/ProfileInfo";
import { getServerSession } from "next-auth";
import React from "react";
import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
const MyAccount = async () => {
	const session = await getServerSession();
	// console.log(session);
	const { email, image } = session?.user;
	const { fullName, phone, dob, add } = JSON.parse(session?.user?.name || "{}");

	return (
		<div className="">
			<h3 className="font-semibold text-2xl">My Account</h3>
			<ProfileInfo />
			<GeneralInformation />

			<ChangePassword />
			<DefaultPaymentMethod />
		</div>
	);
};

export default MyAccount;
