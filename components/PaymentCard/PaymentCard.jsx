"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const PaymentCard = ({ item }) => {
	const { data: session } = useSession();
	let accountType =
		item?.account_type == "Bank" ? "bank" : item?.account?.card_name;
	accountType = accountType?.toLowerCase();
	accountType = accountType == "master" ? "mastercard" : accountType;
	let lastFourDigits =
		item?.account_type == "Bank"
			? item?.account?.account_number
			: item?.account?.card_number;
	let name = item?.account?.name;

	return (
		<div className="rounded-md p-5 bg-slate-800 flex justify-between items-center my-3">
			<div className="flex gap-3 items-center">
				<div className="w-12">
					<img
						src={`/assets/img/${accountType}.png`}
						alt="Payment Card"
						className="object-fill w-full"
					/>
				</div>
				<div>
					<p className="text-white">**** **** **** {lastFourDigits}</p>
					<p className="text-white">{name}</p>
				</div>
			</div>
			{session?.user && (
				<Link href="/manage-payment-method">
					<button className="border border-white text-white rounded-md px-4 py-2">
						Change
					</button>
				</Link>
			)}
		</div>
	);
};

export default PaymentCard;
