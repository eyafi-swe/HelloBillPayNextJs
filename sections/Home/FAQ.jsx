import FAQAccordion from "@/components/Accordion/FAQAccordion";
import api from "@/services/apis/api";
import React from "react";

const getData = async () => {
	const res = await api.faq.getFAQ();
	if (!res.success) {
		throw new Error("Some error occured!");
	}

	return res.data;
};

const FAQ = async () => {
	const faqData = await getData();
	return (
		<div className="py-16 bg-white">
			<div>
				<p className="text-center font-semibold text-4xl">FAQ</p>
				<p className="text-center mt-5">All Viva Bill Pay to Viva Bill Pay</p>
			</div>
			<div className="mt-10 container mx-auto px-5 md:px-0">
				{faqData.map((item, index) => (
					<FAQAccordion
						key={index}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQ;
