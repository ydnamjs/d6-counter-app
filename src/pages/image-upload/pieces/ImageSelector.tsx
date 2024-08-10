import React from "react";
import "./ImageSelector.css";

import uploadIcon from "../assets/Upload_Icon.png";
import imagesIcon from "../assets/Images_Icon.png";

function ImageSelector() {
	return (
		<div className="image-selector">
			<h2>Choose an Image</h2>
			<div className="image-selector-buttons">
				<button>
					<img src={uploadIcon}></img>
					<p>Upload Your Own</p>
				</button>
				<button>
					<img src={imagesIcon}></img>
					<p>Select From Samples</p>
				</button>
			</div>
		</div>
	);
}

export default ImageSelector;
