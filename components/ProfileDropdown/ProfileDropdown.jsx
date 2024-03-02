"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

const ProfileDropdown = ({ top }) => {
	const { data: session } = useSession();
	const { email, image } = session?.user;
	const { fullName, phone } = JSON.parse(session?.user?.name || "{}");
	const router = useRouter();
	let formattedEmail;
	if (email) {
		if (email.includes("@")) {
			let emailSplit = email?.split("@");
			let emailName = emailSplit[0];
			emailName =
				emailName.length > 5
					? emailName.slice(0, 5) + "..." + emailName.slice(-1)
					: emailName;
			formattedEmail = emailName + "@" + emailSplit[1];
		}
	}
	return (
		<div
			id="myDropdown2"
			className={`flex dropdown-content flex-col absolute bg-white p-5 shadow-2xl w-72 -right-1 ${top} rounded-lg overflow-auto z-10`}
		>
			<div className="flex items-center gap-2 pb-3 border-b-2">
				<div className="w-10 rounded-lg">
					<img
						src={image || "/assets/img/Avater.png"}
						alt="Avatar"
						className="object-fill w-full h-full rounded-lg"
					/>
				</div>
				<div className="">
					<h5 className="font-semibold">
						{fullName.length > 20 ? fullName.slice(0, 20) : fullName}
					</h5>
					<p className="text-gray-600 text-sm">
						{email ? formattedEmail : phone}
					</p>
				</div>
			</div>

			<div>
				<Link href="/my-account">
					<div className="flex items-center gap-3 mt-5">
						<FiSettings className="text-xl " />
						<p className="font-semibold">My Account</p>
					</div>
				</Link>

				<div
					className="flex items-center gap-3 mt-5"
					role="button"
					onClick={() => {
						signOut({ redirect: false });
						localStorage.removeItem("selectedPaymentMethod");
						localStorage.removeItem("billingDetails");
						localStorage.removeItem("setupSubscriptionData");
						router.push("/");
					}}
				>
					<TbLogout className="text-xl " />
					<p className="font-semibold">Logout</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileDropdown;
