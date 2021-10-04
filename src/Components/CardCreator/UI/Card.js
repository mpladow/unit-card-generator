import React from 'react'
import '../../../scss/Colors.scss';
import '../../../scss/Themes.scss';
import './Card.scss';
// import './Card.css'

const Card = (props) => {
	const classesCardInner = `card-inner ${props.currentTheme.cardInner}`;
	const classesCard = `card theme ${props.currentTheme.bgTheme}`

	return <div className='card-container'>
		<div id={props.id} className={ classesCard }>
			<div className={ classesCardInner }>{ props.children }</div>
		</div>
	</div>
}

export default Card;