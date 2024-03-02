"use client";
import ScreenLoader from "@/components/Loaders/ScreenLoader/ScreenLoader";
import api from "@/services/apis/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopFAQSection = () => {
	const [loading, setLoading] = useState(true);
	const [faqData, setFaqData] = useState([]);
	const [displayData, setDisplayData] = useState([]);

	useEffect(() => {
		api.faq
			.getFeaturedFAQ()
			.then((res) => {
				setFaqData(res.data);
				setDisplayData(res.data.slice(0, 10));
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div className="mt-10">
			<div>
				{loading && <ScreenLoader height="h-44" />}
				{!loading &&
					displayData.length > 0 &&
					displayData.map((item, index) => (
						<Link key={index} href={`/help-center/top-faq/details/${item.id}`}>
							<div className="bg-light-faded rounded-md p-5 mt-5">
								<p className="text-xl font-medium">{item.question}</p>
							</div>
						</Link>
					))}
			</div>
			<div
				className={`mt-5 flex justify-center ${
					displayData.length == faqData.length ? "hidden" : "block"
				}`}
			>
				<button
					className="bg-success font-semibold hover:bg-[#73e2c8] text-white rounded-md py-3 px-5"
					onClick={() =>
						setDisplayData([
							...displayData,
							...faqData.slice(10, faqData.length),
						])
					}
				>
					See all {faqData.length} articles
				</button>
			</div>
		</div>
	);
};

export default TopFAQSection;
