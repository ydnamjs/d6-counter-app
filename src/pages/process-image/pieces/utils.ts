import Pica from "pica";
const pica = Pica();

const EXPECTED_IMAGE_WIDTH = 512;
const EXPECTED_IMAGE_HEIGHT = 512;

export function convertFileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve((reader.result as string).split(";base64,")[1]);
		reader.onerror = (error) => reject(error);
	});
}

export async function cropResizeConvertImage(file: File): Promise<string> {
	const fileURL = await convertFileToBase64(file);

	return new Promise((resolve) => {
		const img = new Image();
		img.src = "data:image/png;base64," + fileURL;
		img.onload = async () => {
			const squareSize = Math.min(img.width, img.height);
			const xOffset = (img.width - squareSize) / 2;
			const yOffset = (img.height - squareSize) / 2;

			const cropCanvas = document.createElement("canvas");
			cropCanvas.width = squareSize;
			cropCanvas.height = squareSize;

			const ctx = cropCanvas.getContext("2d");

			if (!ctx) {
				return;
			}

			ctx.drawImage(
				img,
				xOffset,
				yOffset,
				squareSize,
				squareSize,
				0,
				0,
				squareSize,
				squareSize,
			);

			const resizeCanvas = document.createElement("canvas");
			resizeCanvas.width = EXPECTED_IMAGE_WIDTH;
			resizeCanvas.height = EXPECTED_IMAGE_HEIGHT;

			await pica.resize(cropCanvas, resizeCanvas);

			resolve(resizeCanvas.toDataURL("image/jpeg", 1).split(";base64,")[1]);
		};
	});
}
