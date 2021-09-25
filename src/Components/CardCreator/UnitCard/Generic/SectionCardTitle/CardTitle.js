import './SectionCardTitle.scss';
import '../../../../../scss/Colors.scss';

const CardTitle = (props) => {

	let classTeamName = `tankTeamName`;
	let classTeamClassification = `tankTeamClassification`;
	let classSection = `cardTitle section ${props.currentTheme.sectionColorMain}`

	const teamNameChangeHandler = (event) => {
		let value = event.target.value;
		props.onTeamNameChange(value);
	}
	return <div className={ classSection }>
		<div className='cardTitleIcon'><div className="theme-icon"></div></div>
		<div className='team-name'>
			<div className={ classTeamName }>
				<input onChange={ teamNameChangeHandler } value={props.teamName} className={ props.currentTheme.textColor }></input>
			</div>
			<div className={ classTeamClassification } >
				<input className={ props.currentTheme.textColor } value={ props.classificationName }></input>
			</div>
		</div>
		<div className='cardTitleIcon'><div className="theme-icon"></div></div>
	</div>
}

export default CardTitle;