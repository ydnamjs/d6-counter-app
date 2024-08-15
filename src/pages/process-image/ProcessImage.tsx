import React, {useState} from "react";
import "./ProcessImage.css";
import ImageSelector from "./pieces/ImageSelector";
import ParameterInput from "./pieces/ParameterInput";
import axios from "axios";
import ResultDisplay from "./pieces/ResultDisplay";

function ProcessImage() {
	const [image64, setImage64] = useState<string>("");
	const [cannyThreshold1, setCannyThreshold1] = useState<number>(60);
	const [cannyThreshold2, setCannyThreshold2] = useState<number>(120);
	const [confidenceThreshold, setConfidenceThreshold] = useState<number>(0.75);

	const [requestStatus, setRequestStatus] = useState("Waiting For Image");

	const [preprocessedImg64, setPreprocessedImg64] = useState<string>("");
	const [predictionImg64, setPredictionImg64] = useState<string>("");

	function handleSubmit() {
		if (image64) {
			setRequestStatus("Waiting For Response");

			const formData = new FormData();
			formData.append("image64", image64);
			formData.append("canny_threshold_1", String(cannyThreshold1));
			formData.append("canny_threshold_2", String(cannyThreshold2));
			formData.append("confidence_threshold", String(confidenceThreshold));

			axios
				.post(
					"https://uolwmke1dc.execute-api.us-east-2.amazonaws.com/post-image",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					},
				)
				.then((response: {data: {preprocessed_image: string; output_image: string}}) => {
					setPreprocessedImg64(response.data.preprocessed_image);
					setPredictionImg64(response.data.output_image);
				})
				.catch((error) => {
					setRequestStatus(error.message);
				});
		}
	}

	return (
		<div className="image-upload">
			<h1>Welcome To The D6 Counter Site!</h1>
			<p>
				Here you can upload images with six sided dice in them to have an AI model
				automagically count them for you!
			</p>
			<ImageSelector
				setImage64={setImage64}
				setPreprocessedImg64={setPreprocessedImg64}
				setPredictionImg64={setPredictionImg64}
				setRequestStatus={setRequestStatus}
			/>
			<ParameterInput
				cannyThreshold1={cannyThreshold1}
				setCannyThreshold1={setCannyThreshold1}
				setCannyThreshold2={setCannyThreshold2}
				confidenceThreshold={confidenceThreshold}
				setConfidenceThreshold={setConfidenceThreshold}
			/>
			<button className="submit-button" onClick={handleSubmit}>
				Count My Dice!
			</button>
			<ResultDisplay
				image64={image64}
				preprocessedImg64={preprocessedImg64}
				predictionImg64={predictionImg64}
				requestStatus={requestStatus}
			/>
		</div>
	);
}

export default ProcessImage;
