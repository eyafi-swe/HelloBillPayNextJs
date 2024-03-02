import React from "react";
import CarriersGrid from "../CarriersGrid/CarriersGrid";
import Styles from "./PayBillsDropdown.module.css";

const PayBillsDropdown = ({ showDropdown, setShowDropdown }) => {
	return (
		<div
			className={`${Styles.dropdown_menu} ${Styles.dropdown_menu_animated} ${
				showDropdown == "show"
					? Styles.dropdown_menu_6
					: showDropdown == "hide"
					? Styles.dropdown_menu_closing
					: Styles.dropdown_menu_hidden
			}`}
		>
			<div
				id="myDropdown"
				className={`h-max flex flex-col bg-white py-10 shadow-lg w-screen  `}
			>
				<CarriersGrid gridcols="grid-cols-4 gap-5 container mx-auto" />
			</div>
		</div>
	);
};

export default PayBillsDropdown;
