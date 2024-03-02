import Link from "next/link";
import React from "react";

const HelpCenterCard = ({ icon, title, text, path }) => {
	return (
		<div className="bg-success-faded rounded-md p-5 ">
			<img src={icon} alt="" />
			<Link href={path}>
				<p className="font-semibold mt-5 cursor-pointer select-none">{title}</p>
			</Link>
			<p className="mt-5">{text}</p>
		</div>
	);
};

export default HelpCenterCard;
