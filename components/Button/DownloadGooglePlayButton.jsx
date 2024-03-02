import React from "react";

const DownloadGooglePlayButton = ({ bgColor, border }) => {
	return (
		<div
			className={` rounded-md w-40 py-2 flex items-center justify-center gap-2 ${bgColor} cursor-pointer ${border}`}
		>
			<img src="/assets/img/Google Play logo.png" alt="Google Play" />
			<div className="leading-none ">
				<p className="text-white text-xs leading-none ">Download on the</p>
				<p className="text-white text-base font-semibold">Google Play</p>
			</div>
		</div>
	);
};

export default DownloadGooglePlayButton;
