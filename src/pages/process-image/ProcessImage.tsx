import React from "react";
import "./ProcessImage.css";
import ImageSelector from "./pieces/ImageSelector";

function ProcessImage() {
	return (
		<div className="image-upload">
			<h1>Welcome To The D6 Counter Site!</h1>
			<p>
				Here you can upload images with six sided dice in them to have an AI model
				automagically count them for you!
			</p>
			<ImageSelector />
		</div>
	);
}

export default ProcessImage;
