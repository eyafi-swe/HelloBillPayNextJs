"use client";

import React, { useState } from "react";

const FAQAccordion = ({ question, answer }) => {
	const [expand, setExpand] = useState(false);
	return (
		<div className="bg-light-faded rounded-md p-5 mt-5">
			<div
				className="flex gap-4 items-center cursor-pointer select-none"
				onClick={() => setExpand(!expand)}
			>
				{expand ? (
					<img src="/assets/img/minus-circle.svg" alt="" />
				) : (
					<img src="/assets/img/plus-circle.svg" alt="" />
				)}
				<p className="text-xl font-medium">{question}</p>
			</div>
			<div className={`${expand ? "block" : "hidden"}  `}>
				<p className="text-gray-700 mt-2 ml-9">{answer}</p>
			</div>
		</div>
	);
};

export default FAQAccordion;
