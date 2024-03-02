import { defaultCarriers } from "@/utils/carriersData";
import Link from "next/link";
import React from "react";

const CarriersGrid = ({ gridcols, data = defaultCarriers }) => {
	return (
		<div className={`grid ${gridcols}`}>
			{data.map((item, index) => (
				<Link href={`/pay-bills/${item.slug}`} key={index}>
					<img
						src={item.img}
						alt=""
						className="w-full cursor-pointer"
						key={index}
					/>
				</Link>
			))}
		</div>
	);
};

export default CarriersGrid;
