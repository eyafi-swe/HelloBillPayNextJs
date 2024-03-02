import DisplayPrivacyContent from "@/components/DisplayPrivacyContent/DisplayPrivacyContent";
import TitleWithGrayBg from "@/components/Title/TitleWithGrayBg";
import React from "react";

const refundContents = [
	{
		title: "Refund Policy",
		texts: [
			"Customer satisfaction is our utmost priority here at Viva Bill Pay. Rest assured, we will never charge your credit card until your mobile refill or top-up is successfully processed and credited to your account. Once the refill is credited, please note that it cannot be reversed, making all sales final with no option for refunds.",
			"However, if, for any reason, your top-up does not get credited to your account, we guarantee a prompt refund within 24 hours of the issue coming to our attention.",
			"For any inquiries or clarifications about our Cancellation or Refund Policy, please feel free to reach out to us at support@vivabillpay.com",
			"We genuinely appreciate your business and thank you for choosing Viva Bill Pay!",
		],
	},
];

const page = () => {
	return (
		<div className=" ">
			<TitleWithGrayBg title="Refunds" />
			<div className="container mx-auto bg-white pb-20 px-5 md:px-0">
				{refundContents.map((content, index) => {
					return <DisplayPrivacyContent key={index} content={content} />;
				})}
			</div>
		</div>
	);
};

export default page;
