import React from "react";
import "./SampleImageMenu.css";

import sampleImageOne from "../assets/Sample_Image_1.jpg";
import sampleImageTwo from "../assets/Sample_Image_2.jpg";
import sampleImageThree from "../assets/Sample_Image_3.jpg";
import {convertFileToBase64} from "./utils";

function SampleImageMenu({
	setImage64,
	setFileName,
	setSampleMenuVisible,
}: {
	setImage64: (imageFile: string) => void;
	setFileName: (fileName: string) => void;
	setSampleMenuVisible: (sampleMenuVisible: boolean) => void;
}) {
	async function selectImage(image: string, imageName: string) {
		const response = await fetch(image);
		const blob = await response.blob();
		const file = new File([blob], imageName, {type: blob.type});

		const image64 = await convertFileToBase64(file);
		setImage64(image64);
		setFileName(file.name);
	}

	return (
		<div className="sample-image-menu">
			<h2>Sample Images</h2>
			<div className="sample-images">
				<>
					<img
						src={sampleImageOne}
						onClick={() => {
							selectImage(sampleImageOne, "Sample_Image_1.jpg");
							setSampleMenuVisible(false);
						}}
					/>
				</>
				<>
					<img
						src={sampleImageTwo}
						onClick={() => {
							selectImage(sampleImageTwo, "Sample_Image_2.jpg");
							setSampleMenuVisible(false);
						}}
					/>
				</>
				<>
					<img
						src={sampleImageThree}
						onClick={() => {
							selectImage(sampleImageThree, "Sample_Image_3.jpg");
							setSampleMenuVisible(false);
						}}
					/>
				</>
			</div>
		</div>
	);
}

export default SampleImageMenu;
