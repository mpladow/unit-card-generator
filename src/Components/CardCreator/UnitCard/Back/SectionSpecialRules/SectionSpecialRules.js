import React, { useState } from 'react'

import '../../../UI/Card.scss';
import '../SectionSpecialRules/SectionSpecialRules.scss';
const SectionSpecialRules = (props) => {

	let rules = props.rules;
	const classesCardInner = `sectionSpecialRulesCard`;
	const classesCard = `sectionSpecialRulesCard ${props.currentTheme.bgColor}`;


	// let linkedStats = props.stat.linkedValue.map(sta =>
	// 	<div className="sectionCardSecondary">
	// 		<label>${ sta.labelPrimary }</label>
	// 		<label>${ sta.labelSecondary }</label>
	// 		<input value={ sta.value }></input>
	// 	</div>);


	return <div>
		<div className={ classesCard }>
			<div className="stat-label"><label>Special Rules</label></div>
			<div className="sectionSpecialRulesCard-inner">
				{ rules.map(rule => <div>{ <span style={{ fontWeight: 'bold', textStyle: 'italic'}}>{rule.name}: </span>}{rule.description}</div>)}
			<div><div>{ }</div></div>

		</div>
	</div>
	</div >;
}

export default SectionSpecialRules;