import React from "react";

const SocialAuthButton = ({
	text,
	icon,
	background,
	textColor,
	border,
	action,
}) => {
	return (
		<div
			className={`${border} ${background} rounded-md w-full flex items-center justify-center gap-2 py-3`}
			role="button"
			onClick={action}
		>
			<img src={icon} alt="Icon" />
			<p className={`${textColor} font-semibold`}>{text}</p>
		</div>
	);
};

export default SocialAuthButton;
