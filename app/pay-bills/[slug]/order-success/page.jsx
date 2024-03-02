import DownloadAppstoreButton from "@/components/Button/DownloadAppstoreButton";
import DownloadGooglePlayButton from "@/components/Button/DownloadGooglePlayButton";
import LargeButton from "@/components/Button/LargeButton";
import Link from "next/link";
import React from "react";

const OrderSuccess = () => {
	return (
		<div className="py-16">
			<div className="container mx-auto px-5 md:px-0 flex flex-col  justify-center items-center">
				<div className="mt-5  flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 xl:w-2/6">
					<img src="/assets/img/success.png" alt="" />
					<h2 className="font-semibold mt-5 text-3xl text-center">
						Order Successful
					</h2>
					<p className="text-center mt-5">
						We are processing your payment. You will receive a confirmation once
						payment has been applied
					</p>
					<div className="mt-5 w-full">
						<Link href="/">
							<LargeButton
								text="Back to Home"
								textColor="text-black"
								background="bg-slate-50 border"
							/>
						</Link>
					</div>
				</div>
				<div className="mt-10 bg-success-faded rounded-md py-10 w-full">
					<h2 className="text-center font-semibold text-xl md:text-3xl">
						Avoid 10% Processing Fee on your next bill payment by using our app
					</h2>
					<div className="mt-5 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
						<DownloadGooglePlayButton bgColor="bg-black" border="border-0" />
						<DownloadAppstoreButton bgColor="bg-black" border="border-0" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSuccess;
