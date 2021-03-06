import React, { useState } from 'react'

import '../../../UI/Card.scss';
import '../SectionCard/SectionCard.scss'

const SectionCard = (props) => {

	let stat = props.stat;
	let linkedValue = stat.linkedValue;
	const classesCardInner = `sectionCard-inner ${props.currentTheme.cardInner}`;
	const classesCard = `sectionCard ${props.currentTheme.bgColor}`;


	// let linkedStats = props.stat.linkedValue.map(sta =>
	// 	<div className="sectionCardSecondary">
	// 		<label>${ sta.labelPrimary }</label>
	// 		<label>${ sta.labelSecondary }</label>
	// 		<input value={ sta.value }></input>
	// 	</div>);


	return <div>
		<div className={ classesCard }>
			<div className="stat-label"><label>{ stat.labelPrimary }</label></div>
			<div className="sectionCard-inner">

				<div className="stat-main">
					<div> { stat.statDetail.value }</div>
				</div>
				{ linkedValue.map(x => {
					if (x.name != '')
					 return <div>
						<div className='stat-secondary'>
							{ x.name } { x.value }
						</div>
					</div>
				}) }
			</div>
		</div>
	</div>;
}

export default SectionCard;