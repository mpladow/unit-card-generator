import react from 'react';
import './CardConfig.scss';

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
	const currentCard = props.currentCard;

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

	return <div>
		<div className='form'>
			<div className='inputField'>
				<label>Card Background Color</label>
				<select value={currentCard.theme.id} onChange={ bgColourChangeHandler }>
					{ THEMES.map(x => <option value={ x.id }>{ x.name }</option>) }
				</select>
			</div>
			<div className='inputField'>
				<label>Unit Type</label>
				<select value={currentCard.unitType.id} onChange={ unitTypeChangeHandler }>
					{UNIT_TYPES.map(x => <option value={x.id}>{x.name}</option>)}
				</select>
			</div>
			<label>Motivation</label>
			<div className='inputField'>
				<select value={ currentCard.stats.find(x => x.labelPrimary === "Motivation").statDetail.id } onChange={ motivationChangeHandler }>
					<option value=''>Select a motivation value</option>
					{ MOTIVATION.map((m => <option value={ m.id }>{ m.name }</option>)) }
				</select>
			</div>
			<label>Skill</label>
			<div className='inputField'>
				<select value={ currentCard.stats.find(x => x.labelPrimary === "Skill").statDetail.id } onChange={ skillChangeHandler }>
					<option>Select a skill value</option>
					{ SKILL.map((m => <option value={ m.id }>{ m.name }</option>)) }
				</select>
			</div>
			<label>Is Hit On</label>
			<div className='inputField'>
				<select value={ currentCard.stats.find(x => x.labelPrimary === "Is Hit On").statDetail.id } onChange={ hitOnChangeHandler }>
					<option>Select a skill value</option>
					{ HITON.map((m => <option value={ m.id }>{ m.name }</option>)) }
				</select>
			</div>
		</div>
	</div>
}
export default CardConfig;