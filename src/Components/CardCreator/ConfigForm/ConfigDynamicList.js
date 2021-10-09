import { useEffect, useState } from 'react'
import Select from 'react-select';
import './CardConfig.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConfigDynamicList = (props) => {

	let currentWeapon = props.weapon;

	const valueChangeHandler = (event) => {
		console.log(event);

		let id = event.currentTarget.id;
		let stat = id.substring(0, id.indexOf('_'));
		let updatedValue = event.currentTarget.value;

		if (event.currentTarget.type == "checkbox") {
			updatedValue = event.currentTarget.checked;
		}

		let temp = {
			...currentWeapon,
			[stat]: updatedValue
		}
		props.onWeaponUpdate(temp);
	}

	const rulesChangeHandler = (event) => {
		let updatedRulesArray = event.map(x => {
			return {
				id: parseInt(x.value)
			}
		})
		let temp = {
			...currentWeapon,
			rules: updatedRulesArray
		}
		props.onWeaponUpdate(temp);
	}
	const onDeleteWeaponClick = (event) => {
		let id = event.currentTarget.id;
		props.onWeaponDelete(id);
	}
	const getDefaultRules = () => {
		let currentRules = currentWeapon.rules.map(x => {
			return { value: x.id, label: x.name }
		})
		return currentRules;
	}


	let id = currentWeapon.id;
	let idName = `name_${id}`;
	let idRange = `range_${id}`;
	let idMovingRof = `movingRof_${id}`;
	let idHaltedRof = `haltedRof_${id}`;
	let idAt = `AT_${id}`;
	let idFp = `FP_${id}`;
	let idRules = `rules_${id}`;
	let idSalvo = `salvo_${id}`;
	let idArtillery = `artillery_${id}`;


	return <div className='weapon-component'>
		<div className='label'><label>{ props.formFieldLabel }</label></div>
		<div className='row'>
			<input type='hidden' value={ props.weapon.id }></input>
			<div className='inputField column'>
				<div className='label-secondary'><label>Name</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } id={ idName } type='text' value={ currentWeapon.name }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label>Range</label></div>
				<div className='input'>
					<input style={ { width: '50px' } } onChange={ valueChangeHandler } id={ idRange } type='text' value={ currentWeapon.range }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label>Moving ROF</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idMovingRof } type='text' value={ currentWeapon.movingRof }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label>Halted ROF</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idHaltedRof } type='text' value={ currentWeapon.haltedRof }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label>Anti-tank</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idAt } type='text' value={ currentWeapon.AT }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label>Fire Power</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idFp } type='text' value={ currentWeapon.FP }></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label for={ idSalvo }>Salvo</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idSalvo } name={ idSalvo } type='checkbox' checked={ currentWeapon.salvo } value='salvo'></input>
				</div>
			</div>
			<div className='flex inputField column'>
				<div className='label-secondary'><label for={ idArtillery }>Artillery</label></div>
				<div className='input'>
					<input onChange={ valueChangeHandler } style={ { width: '50px' } } id={ idArtillery } name={ idArtillery } type='checkbox' checked={ currentWeapon.artillery } value='artillery'></input>
				</div>
			</div>
		</div>
		<div className='row'>
			<div className='inputField column width-50'>
				<div className='label-secondary'>Notes</div>
				<div className='input'>
					<Select
						isMulti
						options={ props.rules }
						id={ idRules }
						name={ idRules }
						onChange={ rulesChangeHandler }
						value={ getDefaultRules() }></Select>
				</div>
			</div>
			{/* <div className='label-secondary'>Notes</div> */ }
			{
				props.count != 1 && (
					<div className='flex inputField column' style={ { "align-self": "center", "margin-left": "24px", "margin-top": "24px" } }>
						<button className='button button-sm danger' id={ currentWeapon.id } onClick={ onDeleteWeaponClick }> <FontAwesomeIcon icon='times' style={ { 'margin-right': '4px' } }></FontAwesomeIcon>Delete</button>
					</div>
				)
			}
		</div>
	</div>
}

export default ConfigDynamicList;