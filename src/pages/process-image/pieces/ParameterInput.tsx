import React from "react";
import "./ParameterInput.css";

function ParameterInput({
	cannyThreshold1,
	setCannyThreshold1,
	setCannyThreshold2,
	confidenceThreshold,
	setConfidenceThreshold,
}: {
	cannyThreshold1: number;
	setCannyThreshold1: (cannyThreshold1: number) => void;
	setCannyThreshold2: (cannyThreshold2: number) => void;
	confidenceThreshold: number;
	setConfidenceThreshold: (confidenceThreshold: number) => void;
}) {
	const handleCanny1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(event.target.value, 10);
		setCannyThreshold1(newValue);
		setCannyThreshold2(newValue * 2);
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
