import React, { useState } from 'react'
import Card from '../../UI/Card'
import '../../../../scss/Layout.scss';
import SectionCard from '../Generic/SectionCard/SectionCard'

import CardTitle from '../Generic/SectionCardTitle/CardTitle'
import SectionMovement from './SectionMovement/SectionMovement';



const UnitCardFront = (props) => {



	return <div>
		<Card currentTheme={ props.currentCard.theme }>
			<CardTitle
				onTeamNameChange={ props.onTeamNameChange }
				onTeamClassChange={ props.onTeamClassChange }
				teamName={ props.currentCard.teamName }
				teamClass={ props.currentCard.teamClass }
				currentTheme={ props.currentCard.theme }>

			</CardTitle>

			<div className='row-5'>
				<div className='row justify-space-between'>
					<div className='column-2'>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Motivation") }></SectionCard>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Skill") }></SectionCard>
					</div>
					<div className='column-6'>

					</div>
					<div className='column-2'>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Is Hit On") }></SectionCard>

					</div>
				</div>
			</div>
			<div className='row-5'>
				<SectionMovement currentTheme={ props.currentCard.theme } movementStat={ props.currentCard.movementStats }></SectionMovement>
			</div>

		</Card>
	</div>
}

export default UnitCardFront;