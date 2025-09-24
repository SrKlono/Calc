import React from "react";
import { useOp } from "./ButtonGrid";

const Button = ({ id, content, className, onClick, op }) => {
	var [currentOp, setCurrentOp] = useOp();

	return (
		<button
			id={id}
			className={`btn no-line-h bg-secondary transition-all hover:bg-[currentColor/80] ${className}`}
			onClick={
				onClick
					? onClick
					: () => {
							var res = document.getElementById("display");
							var nCon =
								res.textContent + content - 0
									? res.textContent + content - 0
									: res.textContent + content;
							res.textContent = nCon; 
							setCurrentOp(nCon);
							console.log(nCon);
					  }
			}
		>
			{content}
		</button>
	);
};

export default Button;
