import CarriersGrid from "@/components/CarriersGrid/CarriersGrid";
import React from "react";

const ExperienceCarriers = () => {
	return (
		<div className="py-16 bg-white">
			<div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
				<p className="text-center font-semibold text-3xl md:text-4xl">
					Experience the Best Online Top-up Services for Carriers
				</p>
				<p className="mt-2 text-center">Select a carrier to recharge:</p>
			</div>
			<CarriersGrid gridcols="grid-cols-3 md:grid-cols-4 gap-5 container mx-auto mt-10 px-5 md:px-0" />
		</div>
	);
};

export default ExperienceCarriers;
