import React, {useRef, useState} from "react";
import "./ImageSelector.css";

import uploadIcon from "../assets/Upload_Icon.png";
import imagesIcon from "../assets/Images_Icon.png";
import closeIcon from "../assets/Close_Icon.png";

import SampleImageMenu from "./SampleImageMenu";

function ImageSelector({
	imageFile,
	setImageFile,
}: {
	imageFile: File | null;
	setImageFile: (imageFile: File | null) => void;
}) {
	// We use a hidden input component that we click when the button is clicked so that
	// we can have a nice stylized button for uploading the file
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const handleUploadButtonClicked = () => {
		fileInputRef.current?.click();
	};

	const [sampleMenuVisible, setSampleMenuVisible] = useState(false);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setImageFile(file);
		}
	};

	return (
		<div className="image-selector">
			<h2>Choose an Image</h2>
			<div className="image-selector-buttons">
				<button onClick={handleUploadButtonClicked}>
					<img src={uploadIcon}></img>
					<p>Upload Your Own</p>
				</button>
				<button
					onClick={() => {
						setSampleMenuVisible(!sampleMenuVisible);
					}}
				>
					<img src={sampleMenuVisible ? closeIcon : imagesIcon}></img>
					<p>Select From Samples</p>
				</button>
			</div>
			{imageFile && <p>Using Image: {imageFile.name}</p>}
			<input
				className="file-upload-input"
				ref={fileInputRef}
				type="file"
				onChange={handleFileChange}
			/>
			{sampleMenuVisible && (
				<SampleImageMenu
					setImageFile={setImageFile}
					setSampleMenuVisible={setSampleMenuVisible}
				/>
			)}
		</div>
	);
}

export default ImageSelector;
