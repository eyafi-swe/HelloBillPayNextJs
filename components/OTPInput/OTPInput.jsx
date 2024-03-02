"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPInput = ({ code, setCode }) => {
	const handleChange = (code) => setCode(code);
	return (
		<div className="flex justify-center">
			<OtpInput
				value={code}
				onChange={handleChange}
				numInputs={4}
				renderSeparator={<span style={{ width: "10px" }}></span>}
				renderInput={(props) => <input {...props} />}
				isInputNum={true}
				shouldAutoFocus={true}
				inputStyle={{
					border: "1px solid #CFD3DB",
					borderRadius: "8px",
					width: "64px",
					height: "50px",
					fontSize: "22px",
					color: "#000",
					fontWeight: "400",
					caretColor: "#33A78C",
					outline: "none",
					userSelect: "none",
				}}
			/>
		</div>
	);
};

export default OTPInput;
