import React from 'react'
import './Card.css';

const Card = (props) => {
	const classes = `card ${props.bgName}`
	return <div className={ classes }>
		{ props.children }
	</div>
}

export default Card;