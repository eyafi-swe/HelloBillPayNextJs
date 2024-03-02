"use client";
import LargeButton from "@/components/Button/LargeButton";
import NewPaymentMethodCard from "@/components/PaymentCard/NewPaymentMethodCard";
import Link from "next/link";
import React, { useState } from "react";

const SelectNewPaymentMethod = ({ newPaymentMethods }) => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
		newPaymentMethods[0]
	);
	return (
		<div className="mt-10">
			<h5 className="font-semibold">Select New Payment Method</h5>
			<p className="mt-5 text-gray-700">
				Choose the payment method you want to add. Click the card to add a new
				payment method
			</p>
			<div className="mt-5">
				{newPaymentMethods.map((item, index) => (
					<NewPaymentMethodCard
						selected={selectedPaymentMethod == item}
						key={index}
						item={item}
						onSelect={() => setSelectedPaymentMethod(item)}
					/>
				))}
			</div>
			<div className="flex justify-center mt-10">
				<Link
					href={`/add-payment-method/${selectedPaymentMethod.slug}`}
					className="w-full md:w-1/2"
				>
					<LargeButton
						text="Continue"
						textColor="text-white"
						background="bg-success"
						width="w-full"
					/>
				</Link>
			</div>
		</div>
	);
};

export default SelectNewPaymentMethod;
