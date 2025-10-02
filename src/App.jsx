import { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import { isNumber } from "./lib/utils.js";

const App = () => {
	var [cOp, setCop] = useState(["0"]);

	const displayOp = () =>
		cOp.map((el, i) => {
			if (el === "") return null;
			return isNumber(el) ? (
				<span key={i}>{el}</span>
			) : (
				<span key={i} className="text-accent p-2">
					{el}
				</span>
			);
		});

	return (
		<div className="min-h-screen flex justify-center items-center [&>*]:font-bold">
			<div className="bg-primary pt-16 shadow-lg/30 shadow-black">
				<div className="p-2 flex justify-between [&>*]:text-4xl">
					<span className="text-accent">=</span>{" "}
					<span id="display">
						{cOp[cOp.length - 1] === "" ? (
							<span className="text-accent">
								{cOp[cOp.length - 2]}
							</span>
						) : (
							cOp[cOp.length - 1]
						)}
					</span>
				</div>
				<div className="p-3 flex justify-end [&>*]:text-2xl">
					<span id="output">{displayOp()}</span>
				</div>
				<div className="grid grid-cols-4 gap-3 p-3">
					<ButtonGrid currentOp={cOp} setCurrentOp={setCop} />
				</div>
			</div>
		</div>
	);
};

export default App;
