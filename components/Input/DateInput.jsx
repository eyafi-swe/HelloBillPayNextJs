"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuCalendar } from "react-icons/lu";
const DateInput = ({ lable, date, setDate, margin = "mt-3" }) => {
	const [focused, setFocused] = useState(false);

	return (
		<div className={`${margin}`}>
			{lable}
			<div
				className={`mt-1 rounded-md  w-full h-12 border ${
					focused ? "border-success" : "border-gray-300"
				} flex justify-between items-center px-3`}
			>
				<DatePicker
					selected={date}
					onChange={(date) => setDate(date)}
					className=" h-11   focus:outline-none"
					placeholderText="Select Date of Birth"
					monthsShown={2}
				/>
				<LuCalendar className="text-gray-800 text-xl" />
			</div>
		</div>
	);
};

export default DateInput;
