import React from "react";
import Button from "./components/Button";

const App = () => {
	return (
		<div className="min-h-screen flex justify-center items-center [&>*]:font-bold">
			<div className="bg-primary pt-16 shadow-lg/30 shadow-black">
				<div className="p-2 flex justify-between [&>*]:text-4xl">
					<span className="text-accent">=</span> <span>100</span>
				</div>
        <div className="p-3 flex justify-end [&>*]:text-2xl"> 
          <span>10 <span className="text-accent">x</span> 10</span>
        </div>
				<div className="grid grid-cols-4 gap-3 p-3">
					<Button
						content={"CE"}
						className="bg-accent col-span-2"
					/>
					<Button content={"C"} className="bg-accent" />
					<Button content={"/"} className="bg-accent" />
					<Button content={1} />
					<Button content={2} />
					<Button content={3} />
					<Button content={"*"} className="bg-accent" />
					<Button content={4} />
					<Button content={5} />
					<Button content={6} />
					<Button content={"-"} className="bg-accent" />
					<Button content={7} />
					<Button content={8} />
					<Button content={9} />
					<Button content={"+"} className="bg-accent row-span-2" />
					<Button content={0} />
					<Button content={"."} />
					<Button content={"="} className="bg-accent" />
				</div>
			</div>
		</div>
	);
};

export default App;
