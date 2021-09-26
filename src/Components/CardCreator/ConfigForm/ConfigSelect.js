import react from 'react';


const ConfigSelect = (props) => {

	// DATABASE

	const selectChangeHandler = (event) => {
		let selected = event.target.value;
		props.onSelectChange(selected)
	}
	const options = props.options;
	return <div>
		<div className='select'>
			<select onChange={ selectChangeHandler } id='' class='motivation-secondary-name'>
				<option>Empty</option>
				{ options.map(o => <option value={ o.id }>{ o.name }</option>) }
			</select>
			<select id='' class='motivation-secondary-value'>

				<option value='3+'>3+</option>
				<option value='4+'>4+</option>
				<option value='3+'>5+</option>
			</select>
		</div>
	</div>
}
export default ConfigSelect;