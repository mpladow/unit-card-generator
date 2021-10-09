import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = (props) => {
	let [src, setSrc] = useState('');
	let [cropped, setCropped] = useState('');
	let [crop, setCrop] = useState({
		unit: 'px', // default, can be 'px' or '%'
		locked: true,
		width: 322,
		height: 222
	});
	let [imageRef, setImageRef] = useState(new Image());


	// HANDLERS
	const imageChangeHandler = (event) => {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.addEventListener('load', () =>
				// props.onImageChange(reader.result)
				setSrc(reader.result)
			);
			reader.readAsDataURL(event.target.files[0]);

		}
	}

	const onCropChange = (onCropChange) => {
		setCrop({...crop, 
			x: onCropChange.x, y: onCropChange.y})
	}
	const onCropComplete = (crop) => {
		makeClientCrop(crop).then(x => {
			props.onImageLoaded(cropped);
		})
			;
	};
	const getCroppedImg = (image, crop, fileName) => {
		const canvas = document.createElement('canvas');
		const pixelRatio = window.devicePixelRatio;
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		const ctx = canvas.getContext('2d');

		canvas.width = crop.width * pixelRatio * scaleX;
		canvas.height = crop.height * pixelRatio * scaleY;

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		ctx.imageSmoothingQuality = 'high';

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width * scaleX,
			crop.height * scaleY
		);
		return new Promise((resolve, reject) => {
			// canvas.toBlob(
			// 	(blob) => {
			// 		if (!blob) {
			// 			//reject(new Error('Canvas is empty'));
			// 			console.error('Canvas is empty');
			// 			return;
			// 		}
			// 		blob.name = fileName;
			// 		// window.URL.revokeObjectURL(this.fileUrl);
			// 		let xx = window.URL.createObjectURL(blob);
			// 		resolve(xx);
			// 	},
			// 	'image/jpeg',
			// 	1
			// );
			let url = canvas.toDataURL();
			resolve(url);

		});
	}
	const onImageLoaded = (image) => {
		setImageRef(image);
		return false;
	}

	const makeClientCrop = async (crop) => {
		if (imageRef && crop.width && crop.height) {
			const croppedImageUrl = await getCroppedImg(
				imageRef,
				crop,
				'newFile.jpeg'
			);
			setCropped(croppedImageUrl);
		}

	}
	return <div>
		<input className='' onChange={imageChangeHandler} id='unitImage' type='file'></input>
		<div>
			{src && (
				<ReactCrop src={src}
					crop={crop}
					onImageLoaded={onImageLoaded}
					onChange={onCropChange}
					onComplete={onCropComplete}
					style={{"maxWidth": "500px"}} />

			)}
		</div>
	</div>

}
export default ImageCropper;