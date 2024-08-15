import React, {useState} from "react";
import "./ParameterInput.css";

import helpIcon from "../assets/Help_Icon.png";

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

	const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

	return (
		<div>
			<div className="parameter-input">
				<div className="parameter-input-block">
					Canny Value
					<input
						type="number"
						min="1"
						max="500"
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
				<button
					className="parameter-help-button"
					onClick={() => {
						setIsHelpMenuOpen(true);
					}}
				>
					<img src={helpIcon}></img>
				</button>
			</div>
			{isHelpMenuOpen && (
				<div className="parameter-help">
					<h3>Parameter Explanation </h3>
					<h4>Canny Value</h4>
					<p>
						The canny value determines how strong an edge has to be in order to make it
						through the preprocessing step. A large value means edges will have to have
						a larger contrast to show.
					</p>
					<p>
						A good canny value gets rid of as many irrelevant/noisy edges while still
						preserving the digits and edges of the dice.
					</p>
					<h4>Confidence Threshold</h4>
					<p>
						The confidence threshold determines how sure the model has to be in order to
						count a die.
					</p>
					<p>
						Lower confidence threshold makes the model more likely to see dice where
						there are none, whereas high confidence threshold makes the model more
						likely to miss dice that are there.
					</p>
					<button
						className="close-help-button"
						onClick={() => {
							setIsHelpMenuOpen(false);
						}}
					>
						Close Explanation
					</button>
				</div>
			)}
		</div>
	);
}

export default ParameterInput;
