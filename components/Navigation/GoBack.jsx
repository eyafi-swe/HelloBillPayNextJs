"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = ({ text }) => {
	const router = useRouter();
	return (
		<div
			className="flex items-center gap-3 cursor-pointer select-none"
			role="button"
			onClick={() => router.back()}
		>
			<FaArrowLeft className="inline-block" />
			<p className="font-medium">{text}</p>
		</div>
	);
};

export default GoBack;
