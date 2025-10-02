import { createContext, useContext, useState } from "react";
import Button from "./Button";
import { isNumber } from "../lib/utils.js";

const OpContext = createContext();

export function useOp() {
	return useContext(OpContext);
}

const ButtonGrid = ({ currentOp, setCurrentOp }) => {
	const [lastAn, setLastAn] = useState("0");

	const safeEval = (expr) => {
		try {
			return Function(`"use strict"; return (${expr})`)();
		} catch {
			return "Error";
		}
	};

	const handleOp = () => {
		for (let i = 0; i < currentOp.length; i++) {
			const element = currentOp[i];
			if (!isNumber(element)) {
				if (i - 1 >= 0 && !isNumber(currentOp[i - 1])) {
					if (
						isNumber(currentOp[i + 1]) &&
						currentOp[i] === "-" &&
						currentOp[i - 1] !== "-"
					)
						continue;
					currentOp.splice(i - 1, 1);
					i--;
				}
			}
		}

		setLastAn(safeEval(currentOp.join("")));
		document.getElementById("display").textContent = safeEval(
			currentOp.join("")
		);
	};

	const clearElements = () => {
		setCurrentOp(["0"]);
	};

	return (
		<OpContext.Provider value={{ setCurrentOp, lastAn, setLastAn }}>
			<Button
				content={"CE"}
				className="bg-accent col-span-3"
				id={"clear"}
				onClick={clearElements}
			/>
			<Button content={"/"} className="bg-accent" id={"divide"} />
			<Button content={"1"} id={"one"} />
			<Button content={"2"} id={"two"} />
			<Button content={"3"} id={"three"} />
			<Button content={"*"} className="bg-accent" id={"multiply"} />
			<Button content={"4"} id={"four"} />
			<Button content={"5"} id={"five"} />
			<Button content={"6"} id={"six"} />
			<Button content={"-"} className="bg-accent" id={"subtract"} />
			<Button content={"7"} id={"seven"} />
			<Button content={"8"} id={"eight"} />
			<Button content={"9"} id={"nine"} />
			<Button
				content={"="}
				className="bg-accent row-span-2"
				id={"equals"}
				onClick={handleOp}
			/>
			<Button content={"0"} id={"zero"} />
			<Button content={"."} id={"decimal"} />
			<Button content={"+"} className="bg-accent" id={"add"} />
		</OpContext.Provider>
	);
};

export default ButtonGrid;
