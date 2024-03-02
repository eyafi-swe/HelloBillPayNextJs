import React from "react";

const Checkbox = ({
	text,
	size = "w-5 h-5",
	textColor = "text-black",
	name,
	values,
	onChange,
}) => {
	return (
		<label className="flex gap-2 items-start md:items-center">
			<input
				id="checked-checkbox"
				type="checkbox"
				value={values}
				name={name}
				className={`${size} accent-success`}
				onChange={onChange}
			/>
			<p className={`select-none ${textColor}`}>{text}</p>
		</label>
	);
};

export default Checkbox;
