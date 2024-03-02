import LargeButton from "@/components/Button/LargeButton";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-5 md:px-0 flex flex-col  justify-center items-center">
				<div className="mt-5  flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 xl:w-2/6">
					<h2 className="font-semibold text-3xl text-center">
						You&apos;re all set
					</h2>
					<img src="/assets/img/high5.png" alt="" />
					<p className="text-center mt-5">
						Thank you for helping us keep your account secure, you can now
						continue to vivabillpay safely.
					</p>
					<div className="mt-5 w-full">
						<Link href="/">
							<LargeButton
								text="Okay"
								textColor="text-white"
								background="bg-success"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
