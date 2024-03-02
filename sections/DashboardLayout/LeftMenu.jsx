"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { RiExchangeDollarLine, RiNotification3Line } from "react-icons/ri";

const links = [
	{
		title: "My Account",
		icon: <FiSettings className="text-2xl " />,
		activeIcon: <FiSettings className="text-2xl text-white" />,
		path: "/my-account",
	},
	{
		title: "Notification",
		icon: <RiNotification3Line className="text-2xl " />,
		activeIcon: <RiNotification3Line className="text-2xl text-white" />,
		path: "/my-account/notification",
	},
	{
		title: "Recharge History",
		icon: <GoHistory className="text-2xl " />,
		activeIcon: <GoHistory className="text-2xl text-white" />,
		path: "/my-account/recharge-history",
	},
	{
		title: "Subscriptions",
		icon: <RiExchangeDollarLine className="text-2xl " />,
		activeIcon: <RiExchangeDollarLine className="text-2xl text-white" />,
		path: "/my-account/subscriptions",
	},
];

const LeftMenu = () => {
	const pathname = usePathname();

	return (
		<div className="rounded-md p-4">
			{links.map((link, index) => (
				<Link href={link.path} key={index}>
					<div
						className={`flex items-center gap-2 rounded-md p-2 mb-2 ${
							pathname == link.path ? "bg-success" : ""
						}`}
					>
						{pathname == link.path ? link.activeIcon : link.icon}
						<p
							className={`font-medium ${
								pathname == link.path ? "text-white" : "text-black"
							}`}
						>
							{link.title}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default LeftMenu;
