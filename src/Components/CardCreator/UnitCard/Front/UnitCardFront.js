import React, { useState } from 'react'
import Card from '../../UI/Card'
import '../../../../scss/Layout.scss';
import SectionCard from '../Generic/SectionCard/SectionCard'

import CardTitle from '../Generic/SectionCardTitle/CardTitle'
import MovementVehicleCard from './SectionMovement/MovementVehicleCard';
import Armour from './SectionArmour/Armour';
import Weaponry from './SectionWeaponry/Weaponry';
import Summary from './SectionTopSummary/Summary';
import UnitImage from './SectionImage/UnitImage';
import UnitSave from './SectionSave/UnitSave';




const UnitCardFront = (props) => {

	let x = 1;

	return <div>
		<Card id='card-front' currentTheme={ props.currentCard.theme }>
			<CardTitle
				onTeamNameChange={ props.onTeamNameChange }
				onTeamClassChange={ props.onTeamClassChange }
				teamName={ props.currentCard.teamName }
				teamClass={ props.currentCard.teamClass }
				unitType = {props.currentCard.unitType}
				currentTheme={ props.currentCard.theme }>
			</CardTitle>

			<div className='row-5 bg-aliceblue'>
				<div className='row height-100 justify-space-between'>
					<div className='column-25'>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Motivation") }>
						</SectionCard>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Skill") }>
						</SectionCard>
					</div>
					<div className='column-6' style={{position: "relative"}}>
						<Summary additionalRules={ props.currentCard.additionalRules }></Summary>
						<UnitImage unitImage={ props.currentCard.unitImage }></UnitImage>
					</div>
					<div className='column-25'>
						<SectionCard
							currentTheme={ props.currentCard.theme }
							stat={ props.currentCard.stats.find(x => x.labelPrimary === "Is Hit On") }>
						</SectionCard>
						{ props.currentCard.unitType.id == 1 && (
							<Armour
								currentTheme={ props.currentCard.theme }
								armour={ props.currentCard.armour }>
							</Armour>
						) }
						{ (props.currentCard.unitType.id == 2) &&(
							<UnitSave
								currentTheme={ props.currentCard.theme }
								currentCard={ props.currentCard }>
							</UnitSave>
						) }
						{ (props.currentCard.unitType.id == 3) && (
							<UnitSave
								currentTheme={ props.currentCard.theme }
								currentCard={ props.currentCard }>
							</UnitSave>
						) }
					</div>
				</div>
			</div>
			<div className='row-5'>
				<MovementVehicleCard
					currentTheme={ props.currentCard.theme }
					vehicleMovement={ props.currentCard.vehicleMovement }>
				</MovementVehicleCard>
				<Weaponry
					currentTheme={ props.currentCard.theme }
					weaponry={ props.currentCard.weaponry }>
				</Weaponry>
			</div>
		</Card>
	</div>
}

export default UnitCardFront;