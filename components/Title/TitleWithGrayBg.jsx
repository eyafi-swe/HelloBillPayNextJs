import React from "react";

const TitleWithGrayBg = ({ title }) => {
	return (
		<div className=" py-10 bg-gray-bg px-5 md:px-0">
			<div className="text-3xl font-semibold container mx-auto">{title}</div>
		</div>
	);
};

export default TitleWithGrayBg;
