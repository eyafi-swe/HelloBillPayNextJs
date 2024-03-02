import DownloadAppstoreButton from "@/components/Button/DownloadAppstoreButton";
import DownloadGooglePlayButton from "@/components/Button/DownloadGooglePlayButton";
import React from "react";

const SaveBill = () => {
	return (
		<div className="bg-success-faded py-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
				<div className=" border-red-500">
					<p className="text-4xl font-semibold w-5/6 mx-auto md:mx-0 text-center md:text-left border-red-500">
						Save up to 10% on Every Bill you pay
					</p>
					<p className="mt-5 w-5/6 mx-auto md:mx-0 text-center md:text-left">
						Save money, headaches and time by automating your payments using our
						app
					</p>
					<div className="flex gap-4 mt-5 justify-center md:justify-start">
						<DownloadGooglePlayButton bgColor="bg-black" border="border-0" />
						<DownloadAppstoreButton bgColor="bg-black" border="border-0" />
					</div>
				</div>
				<div>
					<img src="/assets/img/DeviceHalf.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default SaveBill;
