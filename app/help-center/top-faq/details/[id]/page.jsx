import GoBack from "@/components/Navigation/GoBack";
import ArticleHelpful from "@/sections/FAQDetails/ArticleHelpful";
import api from "@/services/apis/api";
import Link from "next/link";
import React from "react";

const getFawDetails = async (id) => {
	const res = await api.faq.getFAQDetailsById(id);
	if (!res.success) {
		throw new Error("Some error occured!");
	}
	return res.data;
};

const FAQDetails = async ({ params }) => {
	const { id } = params;
	const faqDetails = await getFawDetails(id);
	return (
		<div className="pt-10 pb-16">
			<div className="container mx-auto px-2 md:px-0">
				<GoBack text={"Top FAQs"} />
				<div className="mt-10">
					<h2 className="font-semibold text:3xl lg:text-4xl text-left">
						{faqDetails.faq.question}
					</h2>
					<p className="mt-3 text-success">{faqDetails.faq.created_at}</p>

					<p className="mt-10 font-semibold">{faqDetails.faq.question}</p>
					<p className="mt-3 text-gray-700">{faqDetails.faq.answer}</p>
					<p className="font-semibold mt-10">What is Vivabillpay?</p>
					<p className="mt-3 text-gray-700">
						Vivabillpay helps recharge your local mobile numbers in a safe and
						secure platform. It&apos;s a friendly tool helping thousands of
						people worldwide top up mobile phones for people miles away, or even
						their own. In Seconds!
					</p>
				</div>

				<ArticleHelpful id={id} />

				<div className="mt-5">
					<h2 className="font-semibold text-xl">Related Articles</h2>
					{faqDetails.relatedArticles.map((item, index) => (
						<Link href={`/help-center/top-faq/details/${item.id}`} key={index}>
							<p className="font-medium text-success mt-3 select-none cursor-pointer">
								{item.question}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQDetails;
