import React from "react";
import { RxCross2 } from "react-icons/rx";
import LargeButton from "../Button/LargeButton";

const PaymentMethodDeleteOrDefaultModal = ({
	text,
	type,
	action,
	item,
	setShowModal,
}) => {
	return (
		<>
			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
				<div className="flex items-center min-h-screen px-4 py-8">
					<div className="relative p-5  mx-auto bg-white rounded-md shadow-lg">
						<div className="flex justify-end">
							<RxCross2
								className="text-2xl cursor-pointer"
								onClick={() => setShowModal(false)}
							/>
						</div>
						<div className="flex flex-col items-center px-5 pb-5">
							<h2 className="text-center text-3xl font-semibold mt-3">
								Are you sure?
							</h2>
							<p className="mt-3 w-full md:w-2/3  text-center">{text}</p>
							<div className="mt-5 w-full flex items-center gap-3 justify-between">
								<LargeButton
									text="Cancel"
									textColor="text-black"
									background="bg-slate-100 border"
									action={() => setShowModal(false)}
									width="w-1/2"
								/>
								<LargeButton
									text="Yes"
									textColor="text-white"
									background={`${
										type === "delete" ? "bg-red-500" : "bg-success"
									}`}
									action={() => {
										setShowModal(false);
										action(item);
									}}
									width="w-1/2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentMethodDeleteOrDefaultModal;
