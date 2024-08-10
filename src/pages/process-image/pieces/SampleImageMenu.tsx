import React from "react";
import "./SampleImageMenu.css";

import sampleImageOne from "../assets/Sample_Image_1.jpg";
import sampleImageTwo from "../assets/Sample_Image_1.jpg";
import sampleImageThree from "../assets/Sample_Image_1.jpg";

function SampleImageMenu({
	setSampleMenuVisible,
}: {
	setSampleMenuVisible: (sampleMenuVisible: boolean) => void;
}) {
	return (
		<div className="sample-image-menu">
			<h2>Sample Images</h2>
			<div className="sample-images">
				<>
					<img
						src={sampleImageOne}
						onClick={() => {
							setSampleMenuVisible(false);
						}}
					/>
				</>
				<>
					<img
						src={sampleImageTwo}
						onClick={() => {
							setSampleMenuVisible(false);
						}}
					/>
				</>
				<>
					<img
						src={sampleImageThree}
						onClick={() => {
							setSampleMenuVisible(false);
						}}
					/>
				</>
			</div>
		</div>
	);
}

export default SampleImageMenu;
