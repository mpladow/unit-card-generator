import react from 'react';
import './CardConfig.scss';
import ConfigDynamicList from './ConfigDynamicList';
import ConfigSelect from './ConfigSelect';
import Select from 'react-select';

const CardConfig = (props) => {

	// DATABASE
	const THEMES = [
		{ id: 1, name: 'US', bgTheme: 'theme-us', icon: 'icon-us', bgColor: 'bg-navy-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ id: 2, name: 'German', bgTheme: 'theme-german', icon: 'icon-german', bgColor: 'bg-dark-grey', textColor: 'text-white', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ id: 3, name: 'Soviet', bgTheme: 'theme-soviet', icon: 'icon-soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-1' }
	]
	const UNIT_TYPES = [
		{ id: 1, name: "Tank", value: "Tank" },
		{
			id: 1, name: "Gun", value: "Gun"
		},
		{ id: 1, name: "Infantry", value: "Infantry" },
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
		{ id: 2, name: "Trained 4+", value: "Trained 4+" },
		{ id: 3, name: "Veteran 3+", value: "Veteran 3+" }
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
	const RULES = [
		{
			id: 1,
			name: "Stabilizers",
			description: "+1 To Hit for Moving ROF.",
		},
		{
			id: 2,
			name: "Self-defence AA",
			description: "Weapon can fire at Aircraft with ROF 1.",
		},
		{
			id: 3,
			name: "No HE",
			description: "No HE targeting Infantry or Guns adds +1 to the score needed To Hit.",
		},
		{
			id: 4,
			name: "Smoke",
			description: "Can Shoot Smoke ammunication.",
		},
		{
			id: 5,
			name: "Assault 4+",
			description: "Team hits on 4+ in Assaults",
		},
		{
			id: 6,
			name: "Heavy Weapon",
			description: "Team cannot Charge into Contact",
		},
		{
			id: 7,
			name: "Observer",
			description: "Unit Leader can Spot for any friendly Artillery Unit.",
		},
		{
			id: 8,
			name: "Slow Firing",
			description: "+1 To Hit for Moving ROF .",
		}
	]
	const currentCard = props.currentCard;
	// GENERATE OPTIONS MENUS
	const generateRuleMultiselect = () => {
		let options = RULES.map(r => {
			let option = {
				value: parseInt(`${r.id}`),
				label: `${r.name}`
			}
			return option;
		})
		return options;
	}
	const bgColourChangeHandler = (event) => {
		let selected = THEMES.find(c => c.id === parseInt(event.target.value));
		props.onCardBgColorChange(selected);
	}
	const motivationChangeHandler = (event) => {
		let selected = MOTIVATION.find(c => c.id === parseInt(event.target.value));
		props.onHitOnChange({ selected: selected, statName: "Motivation" })

	}
	const skillChangeHandler = (event) => {
		let selected = SKILL.find(c => c.id === parseInt(event.target.value))
		props.onHitOnChange({ selected: selected, statName: "Skill" })
	}
	const hitOnChangeHandler = (event) => {
		let selected = HITON.find(x => x.id === parseInt(event.target.value))
		props.onHitOnChange({ selected: selected, statName: "Is Hit On" })
	}
	const unitTypeChangeHandler = (event) => {
		let selected = UNIT_TYPES.find(x => x.name === event.target.value)
	}
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




	return <div>
		<div className='flex row'>
			<div className=' form-container flex column'>
				<div className='inputField horizontal'>
					<div className='label'><label>Card Background Color</label></div>
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
				<div className='flex inputField vertical'>
					<div className='label'><label>Armour</label></div>
					<div className='label'><label>Front</label></div>
					<div className='input'>
						<input onChange={ armourChangeHandler } id='armourFront' type='number'></input>
					</div>
					<div className='label'><label>Side & Rear</label></div>
					<div className='input'>
						<input onChange={ armourChangeHandler } id='armourSide' type='number'></input>
					</div>
					<div className='label'><label>Top</label></div>
					<div className='input'>
						<input onChange={ armourChangeHandler } id='armourTop' type='number'></input>
					</div>
				</div>

			</div>


			<div className='form-container flex column'>
				<div className='label'><label>Movement</label></div>
				<div className='flex row'>
					<div className='flex inputField column'>
						<div className='label'><label>Tactical</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='tactical' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label'><label>Terrain Dash</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='terrain' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label'><label>Cross Country</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='crossCountry' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>
						<div className='label'><label>Road Dash</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='road' type='text'></input>
						</div>
					</div>
					<div className='flex inputField column'>

						<div className='label'><label>Cross</label></div>
						<div className='input'>
							<input className='numeric' onChange={ movementChangeHandler } id='cross' type='text'></input>
						</div>
					</div>
				</div>

				{ currentCard.weaponry.map(x => <ConfigDynamicList
					fieldName="Weapons"
					weapon={ x }
					onWeaponUpdate={ updateWeaponsHanlder }
					onWeaponDelete={ deleteWeaponHandler }
					rules={ generateRuleMultiselect() }>
				</ConfigDynamicList>) }
				<div className='inputField'>
					<button onClick={ addWeaponHandler }>Add Weapon</button>
				</div>
				<div className='form-container flex column'>
					<div className='label'><label>Additional Rules</label></div>
					<div className='input' id='additionalRules'>
						<Select isMulti options={ generateRuleMultiselect() } onChange={onAdditionalRulesChange}></Select>
					</div>


				</div>
			</div>
		</div>

	</div >
}
export default CardConfig;