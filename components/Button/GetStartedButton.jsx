import React from "react";

const GetStartedButton = ({
	bgColor = "bg-success",
	hover = "hover:bg-success-light",
	margin,
	textColor = "text-white",
}) => {
	return (
		<button
			className={`${margin} py-3.5 w-40  font-semibold rounded-md ${bgColor} ${hover} ${textColor}`}
		>
			Get Started
		</button>
	);
};

export default GetStartedButton;
