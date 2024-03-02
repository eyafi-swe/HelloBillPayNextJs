"use client";
import api from "@/services/apis/api";
import React from "react";
import { toast } from "react-hot-toast";

const ArticleHelpful = ({ id }) => {
	const handleReview = async (id, like) => {
		// console.log(id, like);
		let payload = {
			faq_id: id,
			status: like,
		};
		api.faq
			.faqsLikeOrDislike(payload)
			.then((res) => {
				// console.log(res);
				if (res.success) {
					toast.success("Thanks for your feedback");
				}
			})
			.catch((err) => {
				// console.log(err);
				toast.error("Something went wrong!");
			});
	};

	return (
		<div className="mt-10 pt-5 pb-10 border-y">
			<p>Was this article helpful?</p>
			<div className="flex items-center gap-4 mt-2">
				<button
					className="rounded-md py-2 px-5 font-medium border hover:bg-success hover:text-white"
					onClick={() => handleReview(id, 1)}
				>
					Yes
				</button>
				<button
					className="rounded-md py-2 px-5 font-medium border hover:bg-badge-text-error hover:text-white"
					onClick={() => handleReview(id, 0)}
				>
					No
				</button>
			</div>
		</div>
	);
};

export default ArticleHelpful;
