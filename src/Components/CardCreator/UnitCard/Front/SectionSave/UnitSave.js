import './UnitSave.scss';
// import '../../Generic/SectionCard/SectionCard.scss';

const UnitSave = (props) => {
	let save = props.currentCard.save;
	let unitType= props.currentCard.unitType.name;

	const classesCardInner = `saveCard-inner ${props.currentTheme.cardInner}`;
	const classesCard = `saveCard ${props.currentTheme.bgColor}`;
	const classesSaveMain = `part ${props.currentTheme.bgColor}`;
	unitType = unitType.charAt(0).toUpperCase() + unitType.slice(1);

	return <div>
		<div className={ classesCard }>
			<div className="save-label"><label>Save</label></div>
			<div className={ classesCardInner }>
				<div className="save-main">

					<div className={ classesSaveMain }>
						<div>{ unitType}</div>
						<div></div>
					</div>
					<div className='value'>{ save }</div>
				</div>


			</div>
		</div>
	</div>;
}
export default UnitSave;