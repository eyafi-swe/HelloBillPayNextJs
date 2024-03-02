import CarriersGrid from "@/components/CarriersGrid/CarriersGrid";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { defaultCarriers } from "@/utils/carriersData";
const PayBills = () => {
	return (
		<div className="pt-10 bg-white pb-20">
			<div className="container  mx-auto px-3 md:px-0">
				<div className="flex items-center h-10 rounded-md border px-3 mt-5">
					<BiSearchAlt className="text-xl" />
					<input
						type="text"
						name="search"
						id=""
						placeholder="Search"
						className="text-black h-full ml-2 focus:outline-none w-full"
					/>
				</div>
				<div className="my-5">
					<p className="text-lg font-semibold">Select a carrier to recharge:</p>
				</div>
				<CarriersGrid
					gridcols="grid-cols-3 md:grid-cols-4 gap-5 container mx-auto"
					data={defaultCarriers}
				/>
			</div>
		</div>
	);
};

export default PayBills;
