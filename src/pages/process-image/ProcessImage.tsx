import React, {useState} from "react";
import "./ProcessImage.css";
import ImageSelector from "./pieces/ImageSelector";
import ParameterInput from "./pieces/ParameterInput";

function ProcessImage() {
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [cannyThreshold1, setCannyThreshold1] = useState<number>(60);
	const [cannyThreshold2, setCannyThreshold2] = useState<number>(120);
	const [confidenceThreshold, setConfidenceThreshold] = useState<number>(0.75);

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
		</div>
	);
}

export default ProcessImage;
