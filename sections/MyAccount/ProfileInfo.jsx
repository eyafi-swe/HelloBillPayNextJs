"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const ProfileInfo = () => {
	const { data: session } = useSession();
	const { email, image } = session?.user;
	const { fullName, phone } = JSON.parse(session?.user?.name || "{}");
	return (
		<div className="bg-white p-5 mt-5 rounded-md flex items-center gap-4">
			<div className="w-32 rounded-lg">
				<img
					src={image || "/assets/img/Avater.png"}
					alt="Avatar"
					className="object-fill w-full h-full rounded-lg"
				/>
			</div>
			<div>
				<h3 className="text-2xl font-semibold">{fullName}</h3>
				<p className="text-gray-600">{email || phone}</p>
				<div
					className="mt-3 flex items-center bg-success rounded-md p-2 gap-2 w-max select-none"
					role="button"
				>
					<AiOutlineCloudUpload className="text-2xl text-white" />
					<p className="text-white font-medium">Change</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
