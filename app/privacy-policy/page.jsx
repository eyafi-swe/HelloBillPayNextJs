import TitleWithGrayBg from "@/components/Title/TitleWithGrayBg";
import React from "react";

const privacyContent = [
	{
		title: "Information We Collect;",
		texts: [
			"(a) Personal Information: When you sign up or use our services, we may collect certain personally identifiable information, such as your name, email address, phone number, and billing details.",
			"(b) Non-Personal Information: We may also collect non-personal information, including browser type, device information, and anonymous usage data, to improve our website’s functionality and user experience.",
		],
	},
	{
		title: "How We Use Your Information:",
		texts: [
			"(a) Personalization: We use your personal information to personalize your experience and provide customized top-up options based on your preferences and usage history.",
			"(b) Payment Processing: Your billing details are collected and securely processed for facilitating bill payments and top-ups.",
			"(c) Communication: We may use your contact information to send you transactional emails, updates, and promotional offers related to our services. You can opt-out of marketing communications at any time.",
			"(d) Legal Obligations: We may use and disclose your information to comply with legal requirements, enforce our policies, or protect our rights, privacy, safety, or property.",
		],
	},
	{
		title: "Data Security:",
		texts: [
			"(a) Encryption: We use industry-standard encryption methods to protect your personal and financial information during transmission and storage.",
			"(b) Secure Access: Access to your personal data is limited to authorized personnel only, who are bound by confidentiality obligations.",
			"(c) Third-Party Vendors: We work with trusted third-party vendors to process payments and provide services. We ensure they adhere to strict security standards and only use your data for the intended purposes.",
		],
	},
	{
		title: "Cookies and Tracking:",
		texts: [
			"(a) Cookies: Our website may use cookies and similar technologies to collect non-personal information about your browsing behavior. You can adjust your browser settings to manage cookie preferences.",
			"(b) Third-Party Analytics: We may use third-party analytics tools to analyze website usage, but this data is anonymized and does not contain personally identifiable information.",
		],
	},
	{
		title: "Third-Party Links:",
		texts: [
			"Our website may contain links to external websites. We are not responsible for their privacy practices and encourage you to review their privacy policies separately.",
		],
	},
	{
		title: "Children’s Privacy:",
		texts: [
			"Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with their data, please contact us to have it removed.",
		],
	},
	{
		title: "Changes to This Policy:",
		texts: [
			"We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be revised accordingly. We encourage you to review the policy periodically.",
		],
	},
	{
		title: "Contact Us:",
		texts: [
			"If you have any questions, concerns, or requests regarding your personal information, please contact us at support@vivabillpay.com",
		],
	},
];

const page = () => {
	return (
		<div className="">
			<TitleWithGrayBg title="Privacy Policy" />
			<div className="container mx-auto bg-white pb-20 px-5 md:px-0">
				<h1 className="mt-10 font-semibold text-3xl">
					Privacy Policy for vivabillpay.com
				</h1>
				<div className="mt-5">
					<p className="text-lg font-semibold">Effective Date: 08/01/2023</p>
					<p className="mt-5 text-gray-700 text-justify">
						At Viva Bill Pay, we value your privacy and are committed to
						protecting your personal information. This Privacy Policy outlines
						how we collect, use, and safeguard the data you provide to us
						through our mobile bill pay top-up website. By using our website,
						you consent to the practices described in this policy.
					</p>
				</div>
				{privacyContent.map((content, index) => {
					return (
						<div className="mt-10" key={index}>
							<h2 className="text-lg font-semibold">
								{index + 1}. {content.title}
							</h2>
							<div className="">
								{content.texts.map((text, index) => {
									return (
										<p key={index} className="text-gray-700 mt-5 text-justify">
											{text}
										</p>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default page;
