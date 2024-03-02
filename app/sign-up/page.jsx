import SignUpform from "@/sections/SignUp/SignUpform";
import React from "react";

const SignUp = () => {
	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto px-4 md:px-0">
				<div>
					<h1 className="text-3xl lg:text-4xl text-center font-semibold">
						Create an account
					</h1>
					<p className="mt-3 text-center text-gray-700">
						Create an account to view bill pay history & your profile.
					</p>
				</div>
				<SignUpform />
			</div>
		</div>
	);
};

export default SignUp;
