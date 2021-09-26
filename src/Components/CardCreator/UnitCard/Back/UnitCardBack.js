import React, { useState } from 'react'

import '../../../../scss/Layout.scss';
import Card from '../../UI/Card';
import CardTitle from '../Generic/SectionCardTitle/CardTitle';








const UnitCardBack = (props) => {



	return <div>
		<Card currentTheme={ props.currentTheme }>

			<CardTitle
				onTeamNameChange={ props.onTeamNameChange }
				onTeamClassChange={ props.onTeamClassChange }
				teamName={ props.currentCard.teamName }
				teamClass={ props.currentCard.teamClass }
				currentTheme={ props.currentTheme }>

			</CardTitle>

		</Card>
	</div>
}

export default UnitCardBack;