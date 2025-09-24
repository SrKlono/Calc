import React, { useState } from "react";
import Button from "./components/Button";
import ButtonGrid from "./components/ButtonGrid";

const App = () => {
	return (
		<div className="min-h-screen flex justify-center items-center [&>*]:font-bold">
			<div className="bg-primary pt-16 shadow-lg/30 shadow-black">
				<div className="p-2 flex justify-between [&>*]:text-4xl">
					<span className="text-accent">=</span>{" "}
					<span id="output">0</span>
				</div>
				<div className="p-3 flex justify-end [&>*]:text-2xl">
					<span id={"display"}>
						0
					</span>
				</div>
				<div className="grid grid-cols-4 gap-3 p-3">
					<ButtonGrid/>
				</div>
			</div>
		</div>
	);
};

export default App;
