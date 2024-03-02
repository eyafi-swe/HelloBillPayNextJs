"use client";
import React from "react";
import ThreeDotLoader from "../Loaders/ThreeDotLoader";

const LargeButton = ({
	background,
	text,
	textColor,
	action,
	width = "w-full",
	disabled,
	disabledText = "Loading",
	showLoader = true,
}) => {
	return (
		<button
			className={`rounded-md text-center ${background} font-semibold ${textColor} py-3 ${width} select-none `}
			onClick={action}
			disabled={disabled}
		>
			{disabled ? (
				<div className="flex justify-center w-full gap-3">
					<p className="text-gray-700">{disabledText}</p>
					{showLoader && <ThreeDotLoader />}
				</div>
			) : (
				text
			)}
		</button>
	);
};

export default LargeButton;
