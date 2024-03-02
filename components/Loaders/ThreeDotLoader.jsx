import React from "react";

const ThreeDotLoader = () => {
	return (
		<svg
			width="25"
			height="25"
			color="#33A78C"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="#33A78C"
		>
			<circle cx="4" cy="12" r="3" color="#33A78C" fill="#33A78C">
				<animate
					id="spinner_jObz"
					begin="0;spinner_vwSQ.end-0.25s"
					attributeName="r"
					dur="0.75s"
					values="3;.2;3"
					color="#33A78C"
					fill="#33A78C"
				/>
			</circle>
			<circle cx="12" cy="12" r="3" color="#33A78C" fill="#33A78C">
				<animate
					begin="spinner_jObz.end-0.6s"
					attributeName="r"
					dur="0.75s"
					values="3;.2;3"
					color="#33A78C"
					fill="#33A78C"
				/>
			</circle>
			<circle cx="20" cy="12" r="3" color="#33A78C" fill="#33A78C">
				<animate
					id="spinner_vwSQ"
					begin="spinner_jObz.end-0.45s"
					attributeName="r"
					dur="0.75s"
					values="3;.2;3"
					color="#33A78C"
					fill="#33A78C"
				/>
			</circle>
		</svg>
	);
};

export default ThreeDotLoader;
