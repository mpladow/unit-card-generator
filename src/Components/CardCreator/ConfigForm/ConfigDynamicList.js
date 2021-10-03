import { useEffect, useState } from 'react'

const ConfigDynamicList = (props) => {

	let [currentWeapon, updateCurrentWeapon] = useState(props.weapon);


	const valueChangeHandler = (event) => {
		console.log(event);

		let id = event.currentTarget.id;
		let stat = id.substring(0, id.indexOf('_'));
		let updatedValue = event.currentTarget.value;


		updateCurrentWeapon(() => {
			let temp = {
				...currentWeapon,
				[stat]: `${updatedValue}`
			}
			props.onWeaponUpdate(temp);
			return temp;
		})
	}
	const onDeleteWeaponClick = (event) => {
		let id = event.currentTarget.id;
		props.onWeaponDelete(id);
	}
let id = currentWeapon.id;
	let idName = `name_${id}`;
	let idRange = `range_${id}`;
	let idMovingRof = `movingRof_${id}`;
	let idHaltedRof = `haltedRof_${id}`;
	let idAt = `AT_${id}`;
	let idFp = `FP_${id}`;
	let idRules = `rules_${id}`

	return <div>
		<div className='label'><label>{ props.formFieldLabel }</label></div>
		<div className='flex row'>
			<input type='hidden' value={ props.weapon.id }></input>
			<div className='flex column'>
				<div className='label'><label>Name</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } id={ idName } type='text' value={ currentWeapon.name }></input>
				</div>
			</div>
			<div className='flex column'>
				<div className='label'><label>Range</label></div>
				<div className='input'>
					<input style={ { width: '50px' } } onChange={ valueChangeHandler } id={ idRange } type='text' value={ currentWeapon.range }></input>
				</div>
			</div>
			<div className='flex column'>
				<div className='label'><label>Moving ROF</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idMovingRof } type='text' value={ currentWeapon.movingRof }></input>
				</div>
			</div>
			<div className='flex column'>
				<div className='label'><label>Halted ROF</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idHaltedRof } type='text' value={ currentWeapon.haltedRof }></input>
				</div>
			</div>
			<div className='flex column'>
				<div className='label'><label>Anti-tank</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idAt } type='text' value={ currentWeapon.AT }></input>
				</div>
			</div>
			<div className='flex column'>
				<div className='label'><label>Fire Power</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idFp } type='text' value={ currentWeapon.FP }></input>
				</div>
			</div>
			<div className='flex column'>
				<button id={ currentWeapon.id } onClick={ onDeleteWeaponClick }>Delete</button>
			</div>
		</div>
	</div>
}

export default ConfigDynamicList;