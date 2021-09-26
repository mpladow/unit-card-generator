import React, { useState } from 'react'
import Card from '../../UI/Card'
import '../../../../scss/Layout.scss';
import SectionCard from '../Generic/SectionCard/SectionCard'

import CardTitle from '../Generic/SectionCardTitle/CardTitle'
import SectionMovement from './SectionMovement/SectionMovement';



const UnitCardFront = (props) => {



	return <div>
		<Card currentTheme={ props.currentTheme }>
			<CardTitle
				onTeamNameChange={ props.onTeamNameChange }
				onTeamClassChange={ props.onTeamClassChange }
				teamName={ props.currentCard.teamName }
				teamClass={ props.currentCard.teamClass }
				currentTheme={ props.currentTheme }>

			</CardTitle>

			<div className='row-5'>
				<div className='row justify-space-between'>
					<div className='column-2'>
						<SectionCard
							currentTheme={ props.currentTheme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Motivation") }></SectionCard>
						<SectionCard
							currentTheme={ props.currentTheme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Skill") }></SectionCard>
					</div>
					<div className='column-6'>

					</div>
					<div className='column-2'>
						<SectionCard 
						currentTheme={ props.currentTheme } 
						stat={ props.currentCard.stats.find(x => x.labelPrimary === "Hit On") }></SectionCard>

					</div>
				</div>
			</div>
			<div className='row-5'>
				<SectionMovement currentTheme={ props.currentTheme } movementStat={ props.currentCard.movementStats }></SectionMovement>
			</div>

		</Card>
	</div>
}

export default UnitCardFront;