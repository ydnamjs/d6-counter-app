import React, {useState} from "react";
import "./ProcessImage.css";
import ImageSelector from "./pieces/ImageSelector";

function ProcessImage() {
	const [imageFile, setImageFile] = useState<File | null>(null);

	return (
		<div className="image-upload">
			<h1>Welcome To The D6 Counter Site!</h1>
			<p>
				Here you can upload images with six sided dice in them to have an AI model
				automagically count them for you!
			</p>
			<ImageSelector imageFile={imageFile} setImageFile={setImageFile} />
		</div>
	);
}

export default ProcessImage;
