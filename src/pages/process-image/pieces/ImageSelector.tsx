import React, {useRef, useState} from "react";
import "./ImageSelector.css";

import uploadIcon from "../assets/Upload_Icon.png";
import imagesIcon from "../assets/Images_Icon.png";
import closeIcon from "../assets/Close_Icon.png";
import SampleImageMenu from "./SampleImageMenu";
import {cropResizeConvertImage} from "./utils";

function ImageSelector({setImage64}: {setImage64: (image64: string) => void}) {
	// We use a hidden input component that we click when the button is clicked so that
	// we can have a nice stylized button for uploading the file
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const handleUploadButtonClicked = () => {
		fileInputRef.current?.click();
	};

	const [fileName, setFileName] = useState<string>("");

	const [sampleMenuVisible, setSampleMenuVisible] = useState(false);

	async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (file) {
			setImage64(await cropResizeConvertImage(file));
			setFileName(file.name);

			// We reset the event.target.value because handleImageUpload wont get called if we upload the same file twice in a row.
			// This matters because if the user were to upload a file, use a sample image, and then upload the first file again,
			// this function would not be called and despite them uploading a file, the sample image would remain the active one
			event.target.value = "";
		}
	}

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
			{fileName && <p>Using Image: {fileName}</p>}
			<input
				className="file-upload-input"
				ref={fileInputRef}
				type="file"
				onChange={handleImageUpload}
			/>
			{sampleMenuVisible && (
				<SampleImageMenu
					setImage64={setImage64}
					setFileName={setFileName}
					setSampleMenuVisible={setSampleMenuVisible}
				/>
			)}
		</div>
	);
}

export default ImageSelector;
