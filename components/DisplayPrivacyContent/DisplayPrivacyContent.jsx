import React from "react";

const DisplayPrivacyContent = ({ content }) => {
	return (
		<div className="mt-10">
			<h2 className="text-3xl font-semibold">{content.title}</h2>
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
};

export default DisplayPrivacyContent;
