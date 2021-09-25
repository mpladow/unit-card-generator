import React, { useState } from 'react'
import Card from '../UI/Card'
import CardTitle from './Generic/SectionCardTitle/CardTitle'


const UnitCard = (props) => {

	

	return <div>
		<Card currentTheme={ props.currentTheme }>
			<CardTitle onTeamNameChange={ props.onTeamNameChange } teamName={props.currentCard.teamName} teamClassification = {props.currentCard.teamClassification} currentTheme={props.currentTheme}></CardTitle>
		</Card>
	</div>
}

export default UnitCard;