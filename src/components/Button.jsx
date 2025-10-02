import { isNumber } from "../lib/utils.js";
import { useOp } from "./ButtonGrid";

const Button = ({ id, content, className, onClick}) => {
	const {setCurrentOp, lastAn, setLastAn} = useOp();

	const handleClick = () => {
		setCurrentOp((prev) => {
			var updated = [...prev];
			let lastNum = updated[updated.length - 1] ?? "";

			if (content === ".") {
				if (lastNum.includes(".")) return updated;
				updated[updated.length - 1] = lastNum + content;
			} else if (isNumber(content)) {
				setLastAn("0");
				if (lastNum + content === "00") return updated;
				if (lastNum.charAt(0) === "0" && lastNum.charAt(1) !== ".") {
					lastNum = lastNum.substring(1);
				}
				updated[updated.length - 1] = lastNum + content;
			} else {
				if (lastNum === "") updated.pop();
				if(lastAn.toString() != "0") updated = [lastAn.toString()]; 
				updated.push(content);
				updated.push("");
			}

			return updated;
		});
	};

	return (
		<button
			id={id}
			className={`btn no-line-h bg-secondary transition-all hover:bg-[currentColor/80] ${className}`}
			onClick={onClick ?? handleClick}
		>
			{content}
		</button>
	);
};

export default Button;
