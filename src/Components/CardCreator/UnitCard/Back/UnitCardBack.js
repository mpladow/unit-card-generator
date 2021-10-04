import React, { useState } from 'react'

import '../../../../scss/Layout.scss';
import Card from '../../UI/Card';
import CardTitle from '../Generic/SectionCardTitle/CardTitle';
import SectionSpecialRules from './SectionSpecialRules/SectionSpecialRules';








const UnitCardBack = (props) => {
	let x = 0;

	let y = 1;

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
					<div className='column-50'>
						<SectionSpecialRules
							currentTheme={ props.currentCard.theme }
							rules={ props.currentCard.additionalRules }>
						</SectionSpecialRules>

					</div>
				</div>
			</div>
		</Card>
	</div>
}

export default UnitCardBack;