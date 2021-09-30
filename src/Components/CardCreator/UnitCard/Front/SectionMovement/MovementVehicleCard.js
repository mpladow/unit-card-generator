import React, { useState } from 'react'

import '../../../UI/Card.scss';
import '../../../../../scss/Layout.scss';
import './MovementVehicleCard.scss';

const MovementVehicleCard = (props) => {

	let vehicleMovement = props.vehicleMovement;
	const classesCardInner = `movementVehicleCard-inner ${props.currentTheme.cardInner}`;
	const classesCard = `movementVehicleCard ${props.currentTheme.bgColor}`;
	// let linkedStats = props.stat.linkedValue.map(sta =>
	// 	<div className="sectionCardSecondary">
	// 		<label>${ sta.labelPrimary }</label>
	// 		<label>${ sta.labelSecondary }</label>
	// 		<input value={ sta.value }></input>
	// 	</div>);


	return <div>
		<div className={ classesCard }>
			<div className='row'>
				<div className='column-2'><div className="movement-label"><label>Tactical</label></div></div>
				<div className='column-2'><div className="movement-label"><label>Terrain Dash</label></div></div>
				<div className='column-2'><div className="movement-label"><label>cross country dash</label></div></div>
				<div className='column-2'><div className="movement-label"><label>road dash</label></div></div>
				<div className='column-2'><div className="movement-label"><label>cross</label></div></div>
			</div>
			<div className="movementCard-inner">
				<div className='row'>
					<div className='column-2'>
						<div className="movement-value movement-value-first">
							{ vehicleMovement.tactical }
						</div>
					</div>
					<div className='column-2'>
						<div className="movement-value">
							{ vehicleMovement.terrain }
						</div>
					</div>
					<div className='column-2'>
						<div className="movement-value">
							{ vehicleMovement.crossCountry }
						</div>
					</div>
					<div className='column-2'>
						<div className="movement-value">
							{ vehicleMovement.road }
						</div>
					</div>
					<div className='column-2'>
						<div className="movement-value movement-value-last">
							{ vehicleMovement.cross }
						</div>
					</div>
				</div>
				{/* { linkedStats } */ }
			</div>
		</div>
	</div>;
}

export default MovementVehicleCard;