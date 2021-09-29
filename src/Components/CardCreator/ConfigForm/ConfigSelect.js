import react from 'react';


const ConfigSelect = (props) => {

	// DATABASE

	const selectChangeHandler = (event) => {
		let selected = event.target.value;
		let id = document.getElementById(statId).value;
		let name = document.getElementById(statName).value;
		let value = document.getElementById(statValue).value;
		props.onSelectChange({ id: id, name: name, value: value })
	}
	const options = props.options;
	let statId = `${props.statName}_${props.id}`
	let statName = `${props.statName}Name_${props.id}`;
	let statValue = `${props.statName}Value_${props.id}`;
	return <div>
		<div className='select'>
			<input type='hidden' id={statId} value={props.id}></input>
			<select onChange={ selectChangeHandler } id={ statName } class='motivation-secondary-name'>
				<option>Empty</option>
				{ options.map(o => <option value={ o.name }>{ o.name }</option>) }
			</select>
			<select onChange={ selectChangeHandler } id={ statValue } class='motivation-secondary-value'>

				<option value='3+'>3+</option>
				<option value='4+'>4+</option>
				<option value='3+'>5+</option>
			</select>
		</div>
	</div>
}
export default ConfigSelect;