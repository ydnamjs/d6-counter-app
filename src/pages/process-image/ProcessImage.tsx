import React, {useState} from "react";
import "./ProcessImage.css";
import ImageSelector from "./pieces/ImageSelector";
import ParameterInput from "./pieces/ParameterInput";
import axios from "axios";
import ResultDisplay from "./pieces/ResultDisplay";

function ProcessImage() {
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [cannyThreshold1, setCannyThreshold1] = useState<number>(60);
	const [cannyThreshold2, setCannyThreshold2] = useState<number>(120);
	const [confidenceThreshold, setConfidenceThreshold] = useState<number>(0.75);

	const [preprocessedImg64, setPreprocessedImg64] = useState<string>("");
	const [predictionImg64, setPredictionImg64] = useState<string>("");

	function handleSubmit() {
		if (imageFile) {
			const formData = new FormData();
			formData.append("image", imageFile);
			formData.append("canny_threshold_1", String(cannyThreshold1));
			formData.append("canny_threshold_2", String(cannyThreshold2));
			formData.append("confidence_threshold", String(confidenceThreshold));

			axios
				.post(
					"https://jfamjfdof653ra4jialfj4z4se0jgcdf.lambda-url.us-east-2.on.aws/post-image",
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
			<ImageSelector imageFile={imageFile} setImageFile={setImageFile} />
			<ParameterInput
				cannyThreshold1={cannyThreshold1}
				setCannyThreshold1={setCannyThreshold1}
				cannyThreshold2={cannyThreshold2}
				setCannyThreshold2={setCannyThreshold2}
				confidenceThreshold={confidenceThreshold}
				setConfidenceThreshold={setConfidenceThreshold}
			/>
			<button className="submit-button" onClick={handleSubmit}>
				Count My Dice!
			</button>
			<ResultDisplay
				imageFile={imageFile}
				preprocessedImg64={preprocessedImg64}
				predictionImg64={predictionImg64}
			/>
		</div>
	);
}

export default ProcessImage;
