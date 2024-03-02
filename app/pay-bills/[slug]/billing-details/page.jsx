"use client";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import PaymentInformation from "@/sections/BillingDetails/PaymentInformation";
import GoBack from "@/components/Navigation/GoBack";
import { defaultCarriers } from "@/utils/carriersData";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input/Input";
import { toast } from "react-hot-toast";

const BillingDetails = ({ params }) => {
	const { slug } = params;
	const carrier = defaultCarriers.find((item) => item.slug === slug);
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [townCity, setTownCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [errorMessage, setErrorMessage] = useState({
		email: "",
		mobile: "",
		firstName: "",
		lastName: "",
		streetAddress: "",
		townCity: "",
		state: "",
		zipCode: "",
	});

	const handleSubmit = (paymentMethod, saved) => {
		console.log("Hello");
		if (
			!email ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
			!mobile ||
			mobile.trim() == "" ||
			!firstName ||
			firstName.trim() == "" ||
			!lastName ||
			lastName.trim() == "" ||
			!streetAddress ||
			streetAddress.trim() == "" ||
			!townCity ||
			townCity.trim() == "" ||
			!state ||
			state.trim() == "" ||
			!zipCode ||
			zipCode.trim() == ""
		) {
			setErrorMessage({
				email: !email
					? "Email is required"
					: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
					? "Invalid Email Address"
					: "",
				mobile: !mobile || mobile.trim() == "" ? "Mobile is required" : "",
				firstName:
					!firstName || firstName.trim() == "" ? "First Name is required" : "",
				lastName:
					!lastName || lastName.trim() == "" ? "Last Name is required" : "",
				streetAddress:
					!streetAddress || streetAddress.trim() == ""
						? "Street Address is required"
						: "",
				townCity:
					!townCity || townCity.trim() == "" ? "Town/City is required" : "",
				state: !state || state.trim() == "" ? "State is required" : "",
				zipCode: !zipCode || zipCode.trim() == "" ? "Zip Code is required" : "",
			});
			return;
		} else {
			setErrorMessage({
				email: "",
				mobile: "",
				firstName: "",
				lastName: "",
				streetAddress: "",
				townCity: "",
				state: "",
				zipCode: "",
			});
		}

		const setUpSubscriptionData = JSON.parse(
			localStorage.getItem("setupSubscriptionData")
		);
		let body = {};
		if (setUpSubscriptionData) {
			(body.product_id = carrier.id),
				(body.domain_id = 1),
				(body.mobile_number = setUpSubscriptionData.phoneNumber),
				(body.recharge_amount = setUpSubscriptionData.rechargeAmount),
				(body.type = setUpSubscriptionData.type),
				(body.first_name = firstName),
				(body.last_name = lastName),
				(body.email = email),
				(body.mobile = mobile),
				(body.street_address = streetAddress),
				(body.city = townCity),
				(body.state = state),
				(body.zip_code = zipCode);

			if (saved) {
				body.paymentMethod = {
					is_saved_payment_method: 1,
					account_id: paymentMethod.account_id,
				};
			} else {
				body.paymentMethod = {
					is_saved_payment_method: 0,
					payment_method: "card",
					card_name: paymentMethod.cardHolderName,
					card_number: paymentMethod.cardNumber,
					card_expire_date: "2024-02-25",
					cvv: paymentMethod.cardCvv,
				};
			}

			console.log(body);
			localStorage.setItem("billingDetails", JSON.stringify(body));
			localStorage.setItem(
				"selectedPaymentMethod",
				JSON.stringify(paymentMethod)
			);
			router.push(`/pay-bills/${slug}/review-order`);
		} else {
			toast.error("No subscription data found!");
			router.back();
		}
	};

	return (
		<div className="pt-10 pb-16 bg-slate-50">
			<div className="container mx-auto px-5 md:px-0">
				<GoBack text={"Checkout Details"} />
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="md:col-span-2 bg-white p-5 rounded-md shadow-md">
						<h3 className="text-xl font-semibold">Billing Details</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
							<Input
								lable="Email"
								placeholder="Enter Email"
								type="email"
								margin="mt-0"
								value={email}
								setValue={setEmail}
								error={errorMessage.email}
								errorMessage={errorMessage.email}
							/>
							<Input
								lable="Mobile"
								placeholder="Enter Mobile Number"
								type="text"
								margin="mt-0"
								value={mobile}
								setValue={setMobile}
								error={errorMessage.mobile}
								errorMessage={errorMessage.mobile}
							/>
							<Input
								lable="First Name"
								placeholder="Enter First Name"
								type="text"
								margin="mt-0"
								value={firstName}
								setValue={setFirstName}
								error={errorMessage.firstName}
								errorMessage={errorMessage.firstName}
							/>
							<Input
								lable="Last Name"
								placeholder="Enter Last Name"
								type="text"
								margin="mt-0"
								value={lastName}
								setValue={setLastName}
								error={errorMessage.lastName}
								errorMessage={errorMessage.lastName}
							/>
							<Input
								lable="Street Address"
								placeholder="Enter Street Address"
								type="text"
								margin="mt-0"
								value={streetAddress}
								setValue={setStreetAddress}
								error={errorMessage.streetAddress}
								errorMessage={errorMessage.streetAddress}
							/>
							<Input
								lable="Town/City"
								placeholder="Enter Town/City"
								type="text"
								margin="mt-0"
								value={townCity}
								setValue={setTownCity}
								error={errorMessage.townCity}
								errorMessage={errorMessage.townCity}
							/>
							<Input
								lable="State"
								placeholder="Enter State"
								type="text"
								margin="mt-0"
								value={state}
								setValue={setState}
								error={errorMessage.state}
								errorMessage={errorMessage.state}
							/>
							<Input
								lable="Zip-code"
								placeholder="Enter Zip-code"
								type="text"
								margin="mt-0"
								value={zipCode}
								setValue={setZipCode}
								error={errorMessage.zipCode}
								errorMessage={errorMessage.zipCode}
							/>
						</div>
					</div>
					<OrderSummary carrier={carrier} />
				</div>
				<PaymentInformation slug={slug} handleSubmit={handleSubmit} />
			</div>
		</div>
	);
};

export default BillingDetails;
