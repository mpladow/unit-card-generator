import React, { useState } from 'react'
import Card from '../UI/Card';

const UnitCard = (props) => {
	
	return <div>
		<Card bgName={ props.bgColor}>
			<div>Hello World</div>
			<div></div>
		</Card>
	</div>
}

export default UnitCard;