import download from 'downloadjs';
import '../../../scss/Forms.scss';

import * as htmlToImage from 'html-to-image';

const FormActions = (props) => {
	const convertCardFronthandler = () => {
		let elementFront = document.getElementById('card-front');
		let elementBack = document.getElementById('card-back');
		let cardTitleFront = `cardFront_${props.teamName}`;
		let cardTitleBack = `cardBack_${props.teamName}`;


		htmlToImage.toPng(elementFront, { quality: 1 })
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
	const onLoadAutosaveHandler = () => {
		props.onLoadAutosaveHandler(true)
	}

	return <div>
		<button className='button button-xlg primary' onClick={ convertCardFronthandler }>{ props.children }</button>
		<button className='button button-sm secondary' onClick={ onLoadAutosaveHandler }>Load Autosave</button>
	</div>
}
export default FormActions;