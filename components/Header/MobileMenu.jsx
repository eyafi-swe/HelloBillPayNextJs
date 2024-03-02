"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProfileAvatar from "./ProfileAvatar";

const MobileMenu = ({ open }) => {
	const { data: session } = useSession();
	const [profileDropdown, setProfileDropdown] = useState(false);

	return (
		<div
			className={`flex-1 justify-self-center absolute w-screen left-0 -z-50 pb-3 mt-8 md:block md:pb-0 md:mt-0 duration-500 ease-in-out ${
				open ? "top-8" : "-top-96"
			} `}
		>
			<ul className=" absolute w-full bg-white left-0 shadow-lg flex flex-col md:hidden p-3 rounded-b-md ">
				<li className="flex pb-2 justify-end">
					<div className="flex items-center">
						<img src="/assets/img/language-icon.svg" alt="" />
						<p className="">EN</p>
						<MdOutlineKeyboardArrowDown className="text-xl" />
					</div>
					{session?.user ? (
						<ProfileAvatar width="w-10" top="top-10" />
					) : (
						<Link href="/login" className="px-2">
							Log in
						</Link>
					)}
				</li>
				<li className="text-black  border-y py-2 flex items-center justify-between">
					<Link href="/pay-bills" className=" mr-1 px-2">
						Pay Bills
					</Link>
					<MdOutlineKeyboardArrowDown className="text-xl" />
				</li>
				<li className="text-black  border-b py-2">
					<Link href="/about-us" className="px-2">
						About US
					</Link>
				</li>
				<li className="text-black  border-b py-2">
					<Link href="/help-center" className="px-2">
						Help Center
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
