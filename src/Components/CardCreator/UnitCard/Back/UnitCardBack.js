import React, { useState } from 'react'

import '../../../../scss/Layout.scss';
import Card from '../../UI/Card';
import CardTitle from '../Generic/SectionCardTitle/CardTitle';








const UnitCardBack = (props) => {


let x = 0;
	return <div>
		<Card currentTheme={ props.currentCard.theme }>

			<CardTitle
				onTeamNameChange={ props.onTeamNameChange }
				onTeamClassChange={ props.onTeamClassChange }
				teamName={ props.currentCard.teamName }
				teamClass={ props.currentCard.teamClass }
				currentTheme={ props.currentCard.theme }>

			</CardTitle>

		</Card>
	</div>
}

export default UnitCardBack;