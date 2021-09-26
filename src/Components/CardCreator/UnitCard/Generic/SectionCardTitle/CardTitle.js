import './SectionCardTitle.scss';
import '../../../../../scss/Colors.scss';
import '../../../../../scss/Themes.scss'

const CardTitle = (props) => {

	let classTeamName = `tankTeamName`;
	let classTeamClassification = `tankTeamClassification`;
	let classSection = `cardTitle section ${props.currentTheme.sectionColorMain}`
	let classIcon = `theme-icon theme ${props.currentTheme.icon}`;
	const teamNameChangeHandler = (event) => {
		let value = event.target.value;
		props.onTeamNameChange(value);
	}
	const teamClassChangeHandler = (event) => {
		let value = event.target.value;
		props.onTeamClassChange(value);
	}
	return <div className={ classSection }>
		<div className='cardTitleIcon'><div className={ classIcon }></div></div>
		<div className='team-name'>
			<div className={ classTeamName }>
				<input
					onChange={ teamNameChangeHandler }
					value={ props.teamName }
					className={ props.currentTheme.textColor }>
				</input>
			</div>
			<div className={ classTeamClassification } >
				<input onChange={ teamClassChangeHandler } className={ props.currentTheme.textColor } value={ props.teamClass }></input>
			</div>
		</div>
		<div className='cardTitleIcon'><div className={ classIcon }></div></div>
	</div>
}

export default CardTitle;