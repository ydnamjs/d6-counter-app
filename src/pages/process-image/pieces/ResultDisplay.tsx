import React from "react";
import "./ResultDisplay.css";

const IMG_SRC_PREFIX = "data:image/png;base64,";

function ResultDisplay({
	image64,
	preprocessedImg64,
	predictionImg64,
}: {
	image64: string;
	preprocessedImg64: string;
	predictionImg64: string;
}) {
	return (
		<div className="result-display">
			<div className="result-item">
				<h2>Original Image</h2>
				{image64 !== "" && <img src={IMG_SRC_PREFIX + image64}></img>}
				{image64 === "" && <div>Waiting For Result</div>}
			</div>
			<div className="result-item">
				<h2>Preprocessed Image</h2>
				{preprocessedImg64 !== "" && <img src={IMG_SRC_PREFIX + preprocessedImg64}></img>}
				{preprocessedImg64 === "" && <div>Waiting For Result</div>}
			</div>
			<div className="result-item">
				<h2>Prediction Image</h2>
				{predictionImg64 !== "" && <img src={IMG_SRC_PREFIX + predictionImg64}></img>}
				{predictionImg64 === "" && <div>Waiting For Result</div>}
			</div>
		</div>
	);
}

export default ResultDisplay;
