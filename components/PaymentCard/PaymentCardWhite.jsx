import React from "react";

const PaymentCardWhite = ({ selected, item, onSelect }) => {
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
		<div
			className={`rounded-md p-5 my-3 ${
				selected ? "bg-success-faded border-success" : "bg-slate-100"
			}`}
			role="button"
			onClick={onSelect}
		>
			<div className="flex gap-3 items-center">
				<div className="w-12">
					<img
						src={`/assets/img/${accountType}.png`}
						alt="Payment Card"
						className="object-fill w-full"
					/>
				</div>
				<div>
					<p className="">**** **** **** {lastFourDigits}</p>
					<p className="">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentCardWhite;
