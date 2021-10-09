import react from 'react';
import './CardConfig.scss';
import ConfigDynamicList from './ConfigDynamicList';
import ConfigSelect from './ConfigSelect';
import Select, { mergeStyles } from 'react-select';

import FormActions from './FormActions';
import ImageCropper from './ImageCropper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardConfig = (props) => {

	// DATABASE
	const THEMES = [
		{ id: 1, name: 'US', bgTheme: 'theme-us', icon: 'icon-us', bgColor: 'bg-navy-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ id: 2, name: 'German', bgTheme: 'theme-german', icon: 'icon-german', bgColor: 'bg-dark-grey', textColor: 'text-white', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ id: 3, name: 'Soviet', bgTheme: 'theme-soviet', icon: 'icon-soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-2' },
		{ id: 4, name: 'British', bgTheme: 'theme-uk', icon: 'icon-uk', bgColor: 'bg-uk-blue', textColor: 'text-white', sectionColorMain: 'bg-uk-blue', cardInner: 'bg-lightbrown-1' }

	]
	const UNIT_TYPES = [
		{
			id: 1,
			name: "tank"
		},
		{
			id: 2,
			name: "infantry"
		},
		{
			id: 3,
			name: "gun"
		},
		{
			id: 4,
			name: "plane"
		},

	]

	const MOTIVATION = [{ id: 1, name: "Reluctant 5+", value: "Reluctant 5+" },
	{ id: 2, name: "Confident 4+", value: "Confident 4+" },
	{ id: 3, name: "Fearless 3+", value: "Fearless 3+" }
	];
	const MOTIVATION_SECONDARY = [
		{ id: 1, name: "Remount", value: "Remount" },
		{ id: 2, name: "Last Stand", value: "Last Stand" },
		{ id: 3, name: "Remount", value: "Remount" },
		{ id: 4, name: "Counterattack", value: "Counterattack" }
	];
	const SKILL = [
		{ id: 1, name: "Conscript 5+", value: "Conscript 5+" },
		{ id: 2, name: "Green 5+", value: "Green 5+" },
		{ id: 3, name: "Trained 4+", value: "Trained 4+" },
		{ id: 4, name: "Veteran 3+", value: "Veteran 3+" },
	];
	const SKILL_SECONDARY = [
		{ id: 1, name: "Tactics", label: "Tactics" },
	];
	const HITON = [
		{ id: 1, name: "Careful 4+", value: "Careful 4+" },
		{ id: 2, name: "Aggressive 3+", value: "Aggressive 3+" },
		{ id: 3, name: "Reckless 2+", value: "Reckless 2+" },
	]
	const HITON_SECONDARY = [
		{ id: 1, name: "Careful 4+", value: "Careful 4+" },
		{ id: 2, name: "Aggressive 3+", value: "Aggressive 3+" },
		{ id: 3, name: "Reckless 2+", value: "Reckless 2+" },
	]
	const weapons = [
		{
			id: "1",
			name: "75mm turret",
			range: "12mm",
			movingRof: "2",
			haltedRof: 2,
			haltedType: null,// salvo or arty
			movingType: null,// salvo or arty
			AT: 12,
			FP: "5+",
			artillery: false,
			main: true,
			rules: [
				{
					ruleId: 1,
					name: "Stabalizers",
					description: "Fires 2 shots at moving ROF, but hit is increased by 1",
					descriptionSecondary: "US Shermans wer equiped with stabalisers"

				},
				{
					ruleId: 1,
					name: "No HE",
					description: "unable to fire high explosive rounds"
				}
			]
		}
	]
	const RULES = props.rulesList
	const onLoadAutosaveHandler = () => {
		props.onLoadAutosaveHandler();
	}
	const currentCard = props.currentCard;
	// GENERATE OPTIONS MENUS
	const generateRuleMultiselect = () => {
		let options = RULES.sort((a, b) => a.name.localeCompare(b.name)).map(r => {
			let option = {
				value: parseInt(`${r.id}`),
				label: `${r.name}`
			}
			return option;
		})
		return options;
	}
	const textInputChangeHandler = (event) => {
		let value = event.target.value;
		let id = event.target.id;
		let result = { value: value, id: id }
		props.onTextInputChangeHandler(result);
	}
	const bgColourChangeHandler = (event) => {
		let selected = THEMES.find(c => c.id === parseInt(event.target.value));
		props.onCardBgColorChange(selected);
	}
	const motivationChangeHandler = (event) => {
		let selected = MOTIVATION.find(c => c.id === parseInt(event.target.value));
		props.onHitOnChange({ selected: selected, statName: "Motivation" })

	}
	const unitTypeChangeHandler = (event) => {
		let value = parseInt(event.target.value);
		props.onUnitTypeChange(value)
	}
	const skillChangeHandler = (event) => {
		let selected = SKILL.find(c => c.id === parseInt(event.target.value))
		props.onHitOnChange({ selected: selected, statName: "Skill" })
	}
	const hitOnChangeHandler = (event) => {
		let selected = HITON.find(x => x.id === parseInt(event.target.value))
		props.onHitOnChange({ selected: selected, statName: "Is Hit On" })
	}
	// const unitTypeChangeHandler = (event) => {
	// 	let selected = UNIT_TYPES.find(x => x.name === event.target.value)
	// }
	const motivationSecondaryChangeHandler = (value) => {
		console.log("secondary motivation selected", value)
		props.onSecondaryStatChange({ "stat": "motivation", value: value });
	}
	const skillSecondaryChangeHandler = (value) => {
		console.log("secondary motivation selected", value)
		props.onSecondaryStatChange({ "stat": "skill", value: value });
	}
	const skillHitOnSecondaryChangeHandler = (value) => {
		props.onSecondaryStatChange({ "stat": "hiton", value: value });
	}

	const armourChangeHandler = () => {
		const armourFront = document.getElementById('armourFront').value;
		const armourTop = document.getElementById('armourTop').value;
		const armourSide = document.getElementById('armourSide').value;

		let armourValue = { armourFront, armourTop, armourSide };
		props.onArmourChange(armourValue);
	}
	const saveChangeHandler = (event) => {
		let value = event.target.value;
		props.onSaveChange(value);
	}
	const movementChangeHandler = (result) => {
		let tactical = document.getElementById('tactical').value;
		let terrain = document.getElementById('terrain').value;
		let crossCountry = document.getElementById('crossCountry').value;
		let road = document.getElementById('road').value;
		let cross = document.getElementById('cross').value;
		let movementForm = { tactical, terrain, crossCountry, road, cross };
		props.onVehicleMovementChange(movementForm);
	}
	const deleteWeaponHandler = (id) => {
		props.onWeaponDelete(id);
	}
	const addWeaponHandler = () => {

		props.onWeaponAdd()
	}
	const updateWeaponsHanlder = (weapon) => {
		props.onWeaponUpdate(weapon);

		// let newWeapon = {
		// 	id: lastWeapon["id"],
		// 	name: "new Weapon",
		// 	range: "12mm",
		// 	movingRof: "2",
		// 	haltedRof: 2
		// };
		// weapons.push(newWeapon)
		// props.onWeaponUpdate(newWeapon)
	}
	const onAdditionalRulesChange = (value) => {
		props.onAdditionalRulesChange(value);

	}
	const onImageLoadedHandler = (url) => {
		props.onImageLoadedHandler(url);
	}





	return <div>
		<div className='flex row'>
			<div className=' form-container flex column'>
				<div className='inputField vertical'>
					<div className='label'><label>Team Name</label></div>
					<div className='select'>
						<div className='input'>
							<input onChange={ textInputChangeHandler } id='teamName' value={ currentCard.teamName }></input>
						</div>
					</div>
				</div>
				<div className='inputField vertical'>
					<div className='label'><label>Team Sub Heading</label></div>
					<div className='select'>
						<div className='input'>
							<input onChange={ textInputChangeHandler } id='teamClass' type='text' value={ currentCard.teamClass }></input>
						</div>
					</div>
				</div>
				<div className='inputField horizontal'>
					<div className='label'><label>Faction</label></div>
					<div className='select'>
						<select value={ currentCard.theme.id } onChange={ bgColourChangeHandler }>
							{ THEMES.map(x => <option value={ x.id }>{ x.name }</option>) }
						</select>
					</div>
				</div>
				<div className='inputField horizontal'>
					<div className='label'><label>Unit Type</label></div>
					<div className='select'>
						<select value={ currentCard.unitType.id } onChange={ unitTypeChangeHandler }>
							{ UNIT_TYPES.map(x => <option value={ x.id }>{ x.name }</option>) }
						</select>
					</div>
				</div>
				<div className='flex inputField vertical'>
					<div className='label'><label>Motivation</label></div>
					<div className='select'>
						<select value={ currentCard.stats.find(x => x.labelPrimary === "Motivation").statDetail.id } onChange={ motivationChangeHandler }>
							<option value=''>Select a motivation value</option>
							{ MOTIVATION.map((m => <option value={ m.id }>{ m.name }</option>)) }
						</select>
					</div>
					<div className='label-secondary'><label>Secondary</label></div>
					<div className='select'>
						<ConfigSelect
							id='1'
							statName='motivation'
							onSelectChange={ motivationSecondaryChangeHandler }
							options={ MOTIVATION_SECONDARY }>
						</ConfigSelect>
						<ConfigSelect
							id='2'
							statName='motivation'
							onSelectChange={ motivationSecondaryChangeHandler }
							options={ MOTIVATION_SECONDARY }>
						</ConfigSelect>
						<ConfigSelect
							id='3'
							statName='motivation'
							onSelectChange={ motivationSecondaryChangeHandler }
							options={ MOTIVATION_SECONDARY }>
						</ConfigSelect>
					</div>
				</div>
				<div className='flex inputField vertical'>
					<div className='label'><label>Skill</label></div>
					<div className='select'>
						<select value={ currentCard.stats.find(x => x.labelPrimary === "Skill").statDetail.id } onChange={ skillChangeHandler }>
							<option>Select a skill value</option>
							{ SKILL.map((m => <option value={ m.id }>{ m.name }</option>)) }
						</select>
					</div>
					<div className='label-secondary'><label>Secondary</label></div>
					<div className='select'>
						<ConfigSelect
							id='1'
							statName='skill'
							onSelectChange={ skillSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>						<ConfigSelect
							id='2'
							statName='skill'
							onSelectChange={ skillSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>
						<ConfigSelect
							id='3'
							statName='skill'
							onSelectChange={ skillSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>
					</div>
				</div>
				<div className='flex inputField vertical'>
					<div className='label'><label>Is Hit On</label></div>
					<div className='select'>
						<select value={ currentCard.stats.find(x => x.labelPrimary === "Is Hit On").statDetail.id } onChange={ hitOnChangeHandler }>
							<option>Select a skill value</option>
							{ HITON.map((m => <option value={ m.id }>{ m.name }</option>)) }
						</select>
					</div>
					<div className='label-secondary'><label>Secondary</label></div>
					<div className='select'>
						<ConfigSelect
							id='1'
							statName='hiton'
							onSelectChange={ skillHitOnSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>						<ConfigSelect
							id='2'
							statName='hiton'
							onSelectChange={ skillHitOnSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>
						<ConfigSelect
							id='3'
							statName='hiton'
							onSelectChange={ skillHitOnSecondaryChangeHandler }
							options={ SKILL_SECONDARY }>
						</ConfigSelect>
					</div>
				</div>
				{ currentCard.unitType.id == 1 && (
					<div className='flex inputField vertical'>
						<div className='label' style={ { 'text-align': 'left' } }><label>Armour</label></div>
						<div className='row'>
							<div className='flex inputField column'>
								<div className='label-secondary'><label>Front</label></div>
								<div className='input'>
									<input onChange={ armourChangeHandler } id='armourFront' className="input-number" type='number' value={ currentCard.armour.front }></input>
								</div>
							</div>
							<div className='flex inputField column'>
								<div className='label-secondary'><label>Side & Rear</label></div>
								<div className='input'>
									<input onChange={ armourChangeHandler } id='armourSide' className="input-number" type='number' value={ currentCard.armour.side }></input>
								</div>
							</div>
							<div className='flex inputField column'>
								<div className='label-secondary'><label>Top</label></div>
								<div className='input'>
									<input onChange={ armourChangeHandler } id='armourTop' className="input-number" type='number' value={ currentCard.armour.top }></input>
								</div>
							</div>
						</div>
					</div>
				) }
				{ currentCard.unitType.id != 1 && (
					<div className='flex inputField vertical'>
						<div className='label'><label>Save</label></div>
						<div className='input'>
							<input onChange={ saveChangeHandler } id='save' className="input-number" type='text' value={ currentCard.save }></input>
						</div>

					</div>
				) }

			</div>


			<div className='form-container flex inputField column'>
				<div className='inputField'>
					<div className='label'><label>Movement</label></div>
				</div>
				<div className='row'>
					<div className='flex inputField column'>
						<div className='label-secondary'><label>Tactical</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='tactical' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label-secondary'><label>Terrain Dash</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='terrain' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label-secondary'><label>Cross Country</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='crossCountry' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label-secondary'><label>Road Dash</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='road' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label-secondary'><label>Cross</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='cross' type='text'></input>
						</div>
					</div>
				</div>
				<div className='inputField'>
					<div className='label'>Weapons</div>
				</div>
				{ currentCard.weaponry.map((x, i) => <ConfigDynamicList
					fieldName="Weapons"
					weapon={ x }
					onWeaponUpdate={ updateWeaponsHanlder }
					onWeaponDelete={ deleteWeaponHandler }
					rules={ generateRuleMultiselect() }
					count={ currentCard.weaponry.length } >
				</ConfigDynamicList>) }
				<div className='inputField' style={ { "padding": "12px 6px" } }>
					<button className='button button-sm secondary' onClick={ addWeaponHandler }><FontAwesomeIcon icon='plus' style={ { 'margin-right': '4px' } }></FontAwesomeIcon>Add Weapon</button>
				</div>
				<div className='flex inputField column width-50'>
					<div className='label'><label>Additional Rules</label></div>
					<div className='input width-100' id='additionalRules'>
						<Select isMulti options={ generateRuleMultiselect() } onChange={ onAdditionalRulesChange }></Select>
					</div>
				</div>
				<div>
					<div className='flex inputField column'>

						<div className='label'><label>Unit Image</label></div>
						<div className='input'>
							<ImageCropper onImageLoaded={ onImageLoadedHandler }></ImageCropper>
						</div>
					</div>
				</div>
				<div style={ { 'margin-top': '12px' } }>
					<FormActions onLoadAutosaveHandler={ onLoadAutosaveHandler } teamName={ currentCard.teamName }><FontAwesomeIcon icon="download"></FontAwesomeIcon> Download Card</FormActions>
				</div>
			</div>
		</div>

	</div >
}
export default CardConfig;