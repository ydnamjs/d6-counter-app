import React from "react";
import "./ParameterInput.css";

function ParameterInput({
	cannyThreshold1,
	setCannyThreshold1,
	cannyThreshold2,
	setCannyThreshold2,
	confidenceThreshold,
	setConfidenceThreshold,
}: {
	cannyThreshold1: number;
	setCannyThreshold1: (cannyThreshold1: number) => void;
	cannyThreshold2: number;
	setCannyThreshold2: (cannyThreshold2: number) => void;
	confidenceThreshold: number;
	setConfidenceThreshold: (confidenceThreshold: number) => void;
}) {
	const handleCanny1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(event.target.value, 10);
		setCannyThreshold1(newValue);
	};

	const handleCanny2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(event.target.value, 10);
		setCannyThreshold2(newValue);
	};

	const handleConfidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(event.target.value);
		setConfidenceThreshold(newValue);
	};

	return (
		<div className="parameter-input">
			<div className="parameter-input-block">
				Canny Threshold 1
				<input
					type="number"
					min="1"
					max="255"
					value={cannyThreshold1}
					onChange={handleCanny1Change}
				/>
			</div>
			<div className="parameter-input-block">
				Canny Threshold 2
				<input
					type="number"
					min="1"
					max="255"
					value={cannyThreshold2}
					onChange={handleCanny2Change}
				/>
			</div>
			<div className="parameter-input-block">
				Confidence Threshold
				<input
					type="number"
					min="0"
					max="1.0"
					step=".01"
					value={confidenceThreshold}
					onChange={handleConfidenceChange}
				/>
			</div>
		</div>
	);
}

export default ParameterInput;
