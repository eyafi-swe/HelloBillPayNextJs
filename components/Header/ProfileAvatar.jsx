"use client";
import React, { useState } from "react";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useSession } from "next-auth/react";

const ProfileAvatar = ({ width = "w-11", top = "top-14" }) => {
	const [profileDropdown, setProfileDropdown] = useState(false);
	const { data: session } = useSession();
	const { image } = session?.user;
	return (
		<div className="relative">
			<div
				className={` ${width} ml-2 rounded-lg cursor-pointer `}
				role="button "
				onClick={() => setProfileDropdown(!profileDropdown)}
			>
				<img
					src={image || "/assets/img/Avater.png"}
					alt=""
					className="object-fill w-full rounded-md h-full"
				/>
			</div>
			{profileDropdown && <ProfileDropdown top={top} />}
		</div>
	);
};

export default ProfileAvatar;
