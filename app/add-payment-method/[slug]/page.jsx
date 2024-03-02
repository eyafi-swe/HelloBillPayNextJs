import GoBack from "@/components/Navigation/GoBack";
import AddBankAccountForm from "@/sections/PaymentMethodAddForm/AddBankAccountForm";
import AddCardForm from "@/sections/PaymentMethodAddForm/AddCardForm";
import ConnectVenmoGpayOrApplePay from "@/sections/PaymentMethodAddForm/ConnectVenmoGpayOrApplePay";
import React from "react";

const page = ({ params }) => {
	const { slug } = params;
	return (
		<div className="pt-10 pb-16 bg-slate-50">
			<div className="container mx-auto px-5 md:px-0">
				<GoBack text={`Add ${slug.replace("-", " ")} in Payment Method`} />

				<div className="mt-10 flex  justify-center">
					{slug === "your-card" ? (
						<AddCardForm />
					) : slug === "bank-account" ? (
						<AddBankAccountForm />
					) : (
						<ConnectVenmoGpayOrApplePay slug={slug} />
					)}
				</div>
			</div>
		</div>
	);
};

export default page;
