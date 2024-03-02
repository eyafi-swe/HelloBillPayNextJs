import React from "react";
import { ImRadioChecked } from "react-icons/im";
import { IoIosRadioButtonOff } from "react-icons/io";

const NewPaymentMethodCard = ({ selected, item, onSelect }) => {
	return (
		<div
			className={`rounded-md h-20 px-5 my-5 flex items-center select-none justify-between ${
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

				<div>
					<p
						className={`font-semibold ${
							selected ? "text-white" : "text-black"
						}`}
					>
						Add {item.title}
					</p>
				</div>
			</div>
			<div className="flex justify-end relative select-none">
				<div className="flex gap-2">
					{item.iconPath.map((icon, index) => {
						return (
							<div className="w-12" key={index}>
								<img src={icon} alt="" className="object-fill w-full" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewPaymentMethodCard;
