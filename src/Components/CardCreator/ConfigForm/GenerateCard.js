import download from 'downloadjs';

import * as htmlToImage from 'html-to-image';

const GenerateCard = (props) => {
	const convertCardFronthandler = () => {
		let elementFront = document.getElementById('card-front');
		let elementBack = document.getElementById('card-back');
		let cardTitleFront = `cardFront_${props.teamName}`;
		let cardTitleBack = `cardBack_${props.teamName}`;


		htmlToImage.toPng(elementFront, { quality: 1})
			.then((dataUrl) => {
				// let img = new Image();
				// img.src = dataUrl;
				// document.body.appendChild(img);
				download(dataUrl, `${cardTitleFront}`)
			});
		htmlToImage.toPng(elementBack)
			.then((dataUrl) => {

				download(dataUrl, `${cardTitleBack}`)
			})

	}

	return <div>
		<button onClick={ convertCardFronthandler }>{ props.children }</button>

	</div>
}
export default GenerateCard;