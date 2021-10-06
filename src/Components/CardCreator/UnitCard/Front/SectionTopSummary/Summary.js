import './Summary.scss';

const Summary = (props) => {
	let x = props.additionalRules;
	let count = x.count;
	let rules = props.additionalRules.map((r, i) => {
		return <span> { i !== 0 && <span>&#183;</span> } { r.name } { (count === i + 1) && <span>&#183;</span>} </span>
	});

	return <div className='section-top'>
		{ rules }
	</div>
}

export default Summary;