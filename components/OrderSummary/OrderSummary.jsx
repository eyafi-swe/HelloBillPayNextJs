import React from "react";

const OrderSummary = ({ carrier }) => {
	return (
		<div className="bg-white rounded-md p-5 shadow-md h-max">
			<h3 className="text-xl font-semibold">Order Summary</h3>
			<div className="w-32 mt-5">
				<img src={carrier.img} alt="" className="object-fill w-full" />
			</div>
			<div className="flex items-center justify-between mt-5">
				<p>{carrier.title} Pay Bill</p>
				<p className="font-semibold">$25.00</p>
			</div>
			<div className="mt-3 pb-2 border-b">
				<p className="text-sm lg:text-base">Mobile Number: +0123456789</p>
			</div>
			<div className="flex items-center justify-between mt-3">
				<p className="font-semibold">Subtotal</p>
				<p className="font-semibold">$25.00</p>
			</div>
			<div className="flex items-center justify-between mt-3 mb-2">
				<p className="font-semibold">Tax and Fees</p>
				<p className="font-semibold">$5.00</p>
			</div>
			<div className="flex items-center justify-between pt-3 border-t">
				<p className="font-semibold">Total</p>
				<p className="font-semibold">$30.00</p>
			</div>
		</div>
	);
};

export default OrderSummary;
