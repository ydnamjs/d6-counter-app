import React, {useState} from "react";
import "./ResultDisplay.css";

function ResultDisplay({
	imageFile,
	preprocessedImg64,
	predictionImg64,
}: {
	imageFile: File | null;
	preprocessedImg64: string;
	predictionImg64: string;
}) {
	const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

	if (imageFile) {
		const reader = new FileReader();
		reader.onloadend = () => {
			setImageSrc(reader.result);
		};
		reader.readAsDataURL(imageFile);
	}

	return (
		<div className="result-display">
			<div className="result-item">
				<h2>Original Image</h2>
				{preprocessedImg64 !== "" && <img src={imageSrc as string}></img>}
			</div>
			<div className="result-item">
				<h2>Preprocessed Image</h2>
				{preprocessedImg64 !== "" && (
					<img src={"data:image/png;base64," + preprocessedImg64}></img>
				)}
			</div>
			<div className="result-item">
				<h2>Prediction Image</h2>
				{predictionImg64 !== "" && (
					<img src={"data:image/png;base64," + predictionImg64}></img>
				)}
			</div>
		</div>
	);
}

export default ResultDisplay;
