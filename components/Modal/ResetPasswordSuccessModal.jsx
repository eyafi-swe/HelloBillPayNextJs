import React from "react";
import LargeButton from "../Button/LargeButton";
import { RxCross2 } from "react-icons/rx";

const ResetPasswordSuccessModal = ({ showModal, setShowModal }) => {
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
							<img src="/assets/img/tick 1.png" alt="" />
							<h2 className="text-center text-3xl font-semibold mt-3">
								Password Changed
							</h2>
							<p className="mt-3 w-full md:w-2/3  text-center">
								Your password has been changed successfully.
							</p>
							<div className="mt-5 w-full">
								<LargeButton
									text="Done"
									textColor="text-white"
									background="bg-success"
									action={() => setShowModal(false)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResetPasswordSuccessModal;
