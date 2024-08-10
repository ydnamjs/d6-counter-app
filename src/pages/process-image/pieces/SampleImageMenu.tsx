import React from "react";
import "./SampleImageMenu.css";

import sampleImageOne from "../assets/Sample_Image_1.jpg";
import sampleImageTwo from "../assets/Sample_Image_1.jpg";
import sampleImageThree from "../assets/Sample_Image_1.jpg";

function SampleImageMenu({
	setImageFile,
	setSampleMenuVisible,
}: {
	setImageFile: (imageFile: File | null) => void;
	setSampleMenuVisible: (sampleMenuVisible: boolean) => void;
}) {
	async function selectImage(image: string, imageName: string) {
		const response = await fetch(image);
		const blob = await response.blob();
		const file = new File([blob], imageName, {type: blob.type});
		setImageFile(file);
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
