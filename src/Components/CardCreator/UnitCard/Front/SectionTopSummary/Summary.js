import './Summary.scss';

const Summary = (props) => {
	let x = props.additionalRules;
	let rules = props.additionalRules.map(r => {
		return <span> | { r.name } | </span>
	});

	return <div className='main'>
		{ rules }
	</div>
}

export default Summary;