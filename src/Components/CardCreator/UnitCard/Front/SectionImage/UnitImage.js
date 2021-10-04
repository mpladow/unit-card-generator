const UnitImage = (props) => {
	let image = props.unitImage;
	return <div>
		{ image != '' && (
			<div>
				<img alt='croppedDemo' src={ image } />
			</div>

		) }
	</div>
}
export default UnitImage;