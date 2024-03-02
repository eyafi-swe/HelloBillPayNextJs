import GoBack from "@/components/Navigation/GoBack";
import TopFAQSection from "@/sections/TopFAQs/TopFAQSection";
import React from "react";

const TopFAQs = () => {
	return (
		<div className="pt-10 pb-16">
			<div className="container mx-auto px-2 md:px-0">
				<GoBack text={"Help Center"} />
				<div className="mt-10">
					<h2 className="font-semibold text:3xl lg:text-4xl text-left">
						Top FAQs
					</h2>
					<p className="text-left mt-5">
						Vivabillpay provides accurate & reliable answers to help you
						navigate.
					</p>
				</div>
				<TopFAQSection />
			</div>
		</div>
	);
};

export default TopFAQs;
