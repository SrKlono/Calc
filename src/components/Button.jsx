import React from "react";

const Button = ({ content, className }) => {
	return (
		<button
			className={`btn no-line-h bg-secondary transition-all hover:bg-[currentColor/80] ${className}`}
		>
			{content}
		</button>
	);
};

export default Button;
