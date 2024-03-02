"use client";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosRadioButtonOff } from "react-icons/io";
import { ImRadioChecked } from "react-icons/im";
import { BsTriangleFill } from "react-icons/bs";
import PaymentMethodDeleteOrDefaultModal from "../Modal/PaymentMethodDeleteOrDefaultModal";

const PaymentCardWithRadio = ({
	selected,
	item,
	onSelect,
	handleDelete,
	handleDefault,
}) => {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);
	const [deletableItem, setDeletableItem] = useState(null);
	const [deleteSuccess, setDeleteSuccess] = useState(false);
	const [confirmDefault, setConfirmDefault] = useState(false);
	const [defaultSuccess, setDefaultSuccess] = useState(false);
	const [defaultItem, setDefaultItem] = useState(null);

	let accountType =
		item?.account_type == "Bank" ? "bank" : item?.account?.card_name;
	accountType = accountType?.toLowerCase();
	accountType = accountType == "master" ? "mastercard" : accountType;
	let lastFourDigits =
		item?.account_type == "Bank"
			? item?.account?.account_number
			: item?.account?.card_number;

	return (
		<div
			className={`rounded-md p-5 my-5 flex items-center select-none justify-between ${
				selected ? "bg-slate-800" : "bg-slate-100"
			}`}
			role="button"
			onClick={onSelect}
		>
			<div className="flex gap-3 items-center">
				{selected ? (
					<ImRadioChecked className="text-white text-2xl" />
				) : (
					<IoIosRadioButtonOff className="text-slate-600 text-2xl" />
				)}
				<div className="w-12">
					<img
						src={`/assets/img/${accountType}.png`}
						alt="Payment Card"
						className="object-fill w-full"
					/>
				</div>
				<div>
					<p className={`${selected ? "text-white" : "text-black"}`}>
						**** **** **** {lastFourDigits}
					</p>
					<p className={`${selected ? "text-white" : "text-black"}`}>
						{item?.account?.name}
					</p>
				</div>
			</div>
			<div
				className=" p-2 flex justify-end relative select-none"
				role="button"
				onClick={() => setOpenDropdown(!openDropdown)}
			>
				<FiMoreVertical
					className={`${selected ? "text-white" : "text-black"} text-2xl`}
				/>
				{openDropdown && (
					<div className="absolute top-8 overflow-auto z-10" id="myDropdown3">
						<div className="flex justify-end">
							<BsTriangleFill className="text-white text-sm mr-1.5" />
						</div>
						<div
							className={`flex dropdown-content flex-col bg-white p-5 shadow-2xl w-80 md:w-96 rounded-t-md rounded-b-md -right-2 -mt-1`}
						>
							<div className="bg-slate-100 p-3 rounded-md">
								<div
									className="flex items-center gap-2 pb-3 border-b-2 select-none"
									role="button"
									onClick={() => {
										setDefaultItem(item);
										setConfirmDefault(true);
										setOpenDropdown(false);
									}}
								>
									<div className="w-5">
										<img
											src="/assets/img/default.svg"
											alt=""
											className="object-fill w-full"
										/>
									</div>
									<p className="font-medium">Set as Default Payment Method</p>
								</div>
								<div
									className="flex items-center gap-2 pt-3 select-none"
									role="button"
									onClick={() => {
										setDeletableItem(item);
										setConfirmDelete(true);
										setOpenDropdown(false);
									}}
								>
									<div className="w-5">
										<img
											src="/assets/img/Delete.svg"
											alt=""
											className="object-fill w-full"
										/>
									</div>
									<p className="font-medium text-red-500">Delete This Method</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			{confirmDelete && (
				<PaymentMethodDeleteOrDefaultModal
					type={"delete"}
					text={"Do you want to delete this method?"}
					item={deletableItem}
					action={handleDelete}
					setShowModal={setConfirmDelete}
				/>
			)}
			{confirmDefault && (
				<PaymentMethodDeleteOrDefaultModal
					type={"default"}
					item={defaultItem}
					text={"Do you wanna set this method as default payment method?"}
					action={handleDefault}
					setShowModal={setConfirmDefault}
				/>
			)}
		</div>
	);
};

export default PaymentCardWithRadio;
