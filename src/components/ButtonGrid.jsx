import { createContext, useContext, useState } from "react";
import Button from "./Button";

const OpContext = createContext();

export function useOp() {
	return useContext(OpContext);
}

const ButtonGrid = () => {
	var [currentOp, setCurrentOp] = useState("0");

	const clearElements = () => {
		document.getElementById("display").textContent = "0";
		document.getElementById("output").textContent = "0";
		setCurrentOp(0);
	};

	const deleteLastElement = () => {
		var display = document.getElementById("display");
        var txt = display.textContent;
		if (txt.length <= 1) display.textContent = "0";
		else display.textContent = txt.substring(0, txt.length - 1);;
		setCurrentOp(display.textContent);
	};

	const addSymbol = (symbol) => {
		var newSym = document.createElement("span");
		newSym.textContent = "s" + symbol + "s";

		document.getElementById("display").appendChild(newSym);
		setCurrentOp(currentOp + content);
	};

	return (
		<OpContext.Provider value={[currentOp, setCurrentOp]}>
			<Button
				content={"CE"}
				className="bg-accent col-span-2"
				id={"clear"}
				onClick={clearElements}
			/>
			<Button
				content={"C"}
				className="bg-accent"
				onClick={deleteLastElement}
			/>
			<Button content={"/"} className="bg-accent" id={"divide"} />
			<Button content={1} id={"one"} />
			<Button content={2} id={"two"} />
			<Button content={3} id={"three"} />
			<Button content={"*"} className="bg-accent" id={"multiply"} />
			<Button content={4} id={"four"} />
			<Button content={5} id={"five"} />
			<Button content={6} id={"six"} />
			<Button content={"-"} className="bg-accent" id={"subtract"} />
			<Button content={7} id={"seven"} />
			<Button content={8} id={"eight"} />
			<Button content={9} id={"nine"} />
			<Button
				content={"="}
				className="bg-accent row-span-2"
				id={"equals"}
				onClick={() => {
					document.getElementById("output").textContent =
						eval(currentOp);
				}}
			/>
			<Button content={0} id={"zero"} />
			<Button content={"."} id={"decimal"} />
			<Button
				content={"+"}
				className="bg-accent"
				id={"add"}
				onClick={(content) => addSymbol(content)}
			/>
		</OpContext.Provider>
	);
};

export default ButtonGrid;
