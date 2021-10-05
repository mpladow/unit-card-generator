import './SectionCardTitle.scss';
import '../../../../../scss/Colors.scss';
import '../../../../../scss/Themes.scss'

const CardTitle = (props) => {

	let unitType = props.unitType.id;
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
			{ unitType == 1 && (
				<div>
					<div className={ classTeamName }>
						<span
							className={ props.currentTheme.textColor }>
							{ props.teamName }
						</span>
					</div>
					<div className={ classTeamClassification } >
						<span className={ props.currentTheme.textColor } >
							{ props.teamClass }

						</span>
					</div>
				</div>
			) }
			{ unitType != 1 && (
				<div>
					<div className={ classTeamClassification } >
						<span className={ props.currentTheme.textColor } >
							{ props.teamClass }

						</span>
					</div>
					<div className={ classTeamName }>
						<span
							className={ props.currentTheme.textColor }>
							{ props.teamName }
						</span>
					</div>
				</div>
			) }

		</div>
		<div className='cardTitleIcon'><div className={ classIcon }></div></div>
	</div>
}

export default CardTitle;