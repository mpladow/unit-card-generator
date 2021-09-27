import React, { useState } from 'react'

import '../../../UI/Card.scss';
import '../../../../../scss/Layout.scss';
import './Armour.scss'

const Armour = (props) => {

	let armour = props.armour;

	const classesCardInner = `armourCard-inner ${props.currentTheme.cardInner}`;
	const classesCard = `armourCard ${props.currentTheme.bgColor}`;
	const classesArmourMainPart = `part ${props.currentTheme.bgColor}`
	// let linkedStats = props.stat.linkedValue.map(sta =>
	// 	<div className="sectionCardSecondary">
	// 		<label>${ sta.labelPrimary }</label>
	// 		<label>${ sta.labelSecondary }</label>
	// 		<input value={ sta.value }></input>
	// 	</div>);


	return <div>
		<div className={ classesCard }>
			<div className="armour-label"><label>Armour</label></div>
			<div className="armourCard-inner">

				<div className="armour-main">
					<div className={ classesArmourMainPart }>
						<div>Front</div>
						<div></div>
					</div>
					<div className='value'>{ props.armour.front }</div>
				</div>
				<div className="armour-main">
					<div className={ classesArmourMainPart }>
						<div>Side & Rear</div>
						<div></div>
					</div>
					<div className='value'>{ props.armour.side }</div>
				</div>
				<div className="armour-main">
					<div className={ classesArmourMainPart }>
						<div>Top</div>
						<div></div>
					</div>
					<div className='value'>{ props.armour.top }</div>
				</div>
				{/* { linkedStats } */ }
			</div>
		</div>
	</div>;
}

export default Armour;