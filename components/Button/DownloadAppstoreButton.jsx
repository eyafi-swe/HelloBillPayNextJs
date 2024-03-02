import React from "react";

const DownloadAppstoreButton = ({ bgColor, border }) => {
	return (
		<div
			className={`rounded-md w-40 py-2 flex items-center justify-center gap-2 ${bgColor} ${border} cursor-pointer `}
		>
			<img src="/assets/img/Apple logo.png" alt="apple" />
			<div className="leading-none ">
				<p className="text-white text-xs leading-none ">Download on the</p>
				<p className="text-white text-base font-semibold">App Store</p>
			</div>
		</div>
	);
};

export default DownloadAppstoreButton;
