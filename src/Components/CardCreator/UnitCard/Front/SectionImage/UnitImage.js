import '../SectionImage/SectionImage.scss';
const UnitImage = (props) => {
	let image = props.unitImage;
	return <div className='image-container'>
		{image != '' && (
			<div >
				<img alt='croppedDemo' src={image} />
				<div className='overlay'></div>
			</div>

		)}
	</div>
}
export default UnitImage;