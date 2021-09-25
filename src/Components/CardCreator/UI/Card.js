import React from 'react'
import '../../../scss/Colors.scss';
import './Card.scss';
// import './Card.css'

const Card = (props) => {
	const classesCardInner = `card-inner ${props.currentTheme.cardInner}`;
	const classesCard = `card ${props.currentTheme.bgColor}`
	
	return <div className='card-container'>
		<div className={ classesCard }>
			<div className={ classesCardInner }>{ props.children }</div>
		</div>
	</div>
}

export default Card;