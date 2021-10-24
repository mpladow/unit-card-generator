import React, { useEffect, useRef, useState } from 'react'
import DataStore from '../Data/DataStore';
import './CardCreator.scss';
import CardConfig from './ConfigForm/CardConfig';
import UnitCardBack from './UnitCard/Back/UnitCardBack';
import UnitCardFront from './UnitCard/Front/UnitCardFront';



const CardCreator = (props) => {

	// TEMP
	// DATABASE
	const [isLoading, setIsLoading] = useState(false);
	// const [RULES, setRules] = useState([])
	const THEMES = [
		{ id: 1, name: 'US', bgTheme: 'theme-us', icon: 'icon-us', bgColor: 'bg-navy-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ id: 2, name: 'German', bgTheme: 'theme-german', icon: 'icon-german', bgColor: 'bg-dark-grey', textColor: 'text-white', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ id: 3, name: 'Soviet', bgTheme: 'theme-soviet', icon: 'icon-soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-1' }
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
		{ id: 2, name: "Assault", label: "Assault" },
	];
	const HITON = [
		{ id: 1, name: "Careful 4+", value: "Careful 4+" },
		{ id: 2, name: "Aggressive 3+", value: "Aggressive 3+" },
		{ id: 3, name: "Reckless 2+", value: "Reckless 2+" },
	];
	let RULES = [
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
			displayFront: false
		},
		{
			id: 7,
			name: "Observer",
			description: "Unit Leader can Spot for any friendly Artillery Unit.",
		},
		{
			id: 8,
			name: "Slow Firing",
			description: "+1 To Hit for Moving ROF.",
			displayFront: false

		},
		{
			id: 9,
			name: "Bazooka Skirts",
			description: "A Tank Team with Bazooka Skirts increases its Side armour to 5 against weapons with Firepower 5+ or 6.",
			displayFront: false

		},
		{
			id: 10,
			name: "Forward Firing",
			description: " Weapons can only hit targets fully in front of the Team.",
			displayFront: false

		},
		{
			id: 11,
			name: "Gun",
			description: "Gun teams have a worse Assault rating.",
			displayFront: false
		},
		{
			id: 12,
			name: "Protected Ammo",
			description: "Tanks with Protected Ammo have a better Remount rating.",
			displayFront: false
		},
		{
			id: 13,
			name: "Stormtrooper",
			description: "A unit may attempt a second Movement Order after succeeding in its first Movement Order. The second Movement Order must be different from the first.",
			displayFront: true
		},
		{
			id: 14,
			name: "Limited 1",
			description: "Each time this Unit shoots, one of its Teams may shoot with this weapon.",
			displayFront: true
		},
		{
			id: 15,
			name: "Limited 2",
			description: "Each time this Unit shoots, two of its Teams may shoot with this weapon.",
			displayFront: true
		},
		{
			id: 16,
			name: "Pinned ROF 1",
			description: "Reduce ROF to 1 when Pinned Down.",
			displayFront: true
		},
		{
			id: 17,
			name: "Smoke Bombardment",
			description: "Once per game this unit can fire a Smoke Bombardment.",
			displayFront: true
		},
		{
			id: 18,
			name: "Large Gun",
			description: 'Cannot be placed from Ambush within 16" of the enemy.',
			displayFront: true
		},
		{
			id: 19,
			name: "Time on Target",
			description: 'If an artillery Unit with Time on Target ranges in on the first attempt, any Infantry or Gun Teams hit by the Bombardment must re-roll successful Saves.',
			displayFront: true
		},
		
		{
			id: 20,
			name: "Airborne",
			description: 'This Formation may make an Airborne Assault in missions that use the Airborne Assault rules (page 96 D-Day American page 96)',
			displayFront: true
		},
		{
			id: 21,
			name: "Seek, Strike and Destroy",
			description: 'This Unit may attempt a Shoot and Scoot Movement Order after succeeding with a Blitz Move Movement Order earlier in the same turn.',
			displayFront: true
		},
		{
			id: 22,
			name: "Scout",
			description: 'Scouts are Gone to Ground unless they Shoot or Assault. This means that if they are Concealed, the enemy will suffer an additional +1 penalty to hit them. Scouts have a worse Last Stand rating. Open or Wheeled Scout tanks have a worse Counterattack and Assault rating',
			displayFront: true
		}
		,
		{
			id: 23,
			name: "Gun Shield",
			description: `This team is in Bulletproof Cover when shot at from the front of the team's base. A Gun Shield does not offer any protection against Artillery Bombardments or if the team moved at Dash speed.`,
			displayFront: true
		}
		,
		{
			id: 24,
			name: "Tiger Ace",
			description: `Tiger Aces have a better Last Stand rating and a significantly better Remount rating.`,
			displayFront: true
		},
		{
			id: 25,
			name: "Bulldog",
			description: `Troops with Bulldog have a better Counterattack rating.`,
			displayFront: true
		},
		{
			id: 26,
			name: "Deadly",
			description: `Deadly troops ahve a better Assault rating.`,
			displayFront: true
		},
		{
			id: 27,
			name: "Infantry Tank",
			description: `Infantry Tanks have a better Counterattack rating.`,
			displayFront: true
		},
		{
			id: 28,
			name: "Night Attack",
			description: ` If a Force with Night Attack is the attacker in a mission where the defender has Minefields, the player may attack at night. If they do so, Night Fighting rules (see page 113 of the rulebook) are in effect at the start of the game.

British Units from a Formation with Night Attack can move freely from the start of the game. Friendly Units from other Formations or Support may not more out of their Deployment Area untill morning breaks.`,
			displayFront: true
		},
		{
			id: 29,
			name: "Overhead Fire",
			description: `Grenade launchers and light mortars are capable of Overhead Fire can fire over friendly teams.`,
			displayFront: true
		},
		{
			id: 30,
			name: "Spearhead",
			description: `Unit can move before the game to expand the Deployment Area.`,
			displayFront: true
		},
		{
			id: 31,
			name: "Overworked",
			description: `Overworked weapons add +1 to the scort To Hit when moving.`,
			displayFront: true
		}
		,
		{
			id: 32,
			name: "Brutal",
			description: `Infantry, Gun and Unarmoured Tank Teams re-roll successful Saves.`,
			displayFront: true
		}
		,
		{
			id: 33,
			name: "Transport Attachment",
			description: `Attachment are additional Teams associated with a Unit.
Infantry and Gun Units containing Transport Teams as a Tank Attachment (ore vice versa) are split into two Units, an Infantry or Gun Unit and an Transport Unit (each with their Unit Leader). Both parts of the Unit operate independently as seperate Units, supporting each other, altough they deploy as a single Unit`,
			displayFront: true
		}
		,
		{
			id: 34,
			name: "Unit Transport",
			description: `The Unit Leader of the Transport Attachment must end the Movement Step within 6"/15cm of the Unit Leader of its Passenger Unit while on the table. If it cannot do this, then the Transport Attachment must be Sent to the Rear.`,
			displayFront: true
		},
		{
			id: 35,
			name: "Softskin",
			description: `If transport destroyed, passengers ddestroyed. the rest are sent to the rear and passengers must dismount..`,
			displayFront: true
		}

	]
	const UNIT_TYPE = [
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
	// END TEMP

	const [cardTheme, setCardTheme] = useState(THEMES[0]);
	const [cardMotivation, setMotivation] = useState({})
	const [cardSkill, setSkill] = useState({});
	const [cardHitOn, setHitOn] = useState({});



	let [cardDetails, setCardDetails] = useState({
		theme: cardTheme,
		teamName: 'm4 sherman',
		teamClass: 'veteran tank company hq',
		unitType: {
			id: 1,
			name: "tank"
		},
		unitImage: '',
		stats: [
			{
				labelPrimary: "Motivation",
				statDetail: cardMotivation,
				linkedValue: []
				// cardSecondaryMotivation
			},

			{
				labelPrimary: "Skill",
				statDetail: cardSkill,
				linkedValue: [
					// { name: 'Tactics', value: "5+" }
				]
				// linkedValue: [
				// 	{
				// 		labelPrimary: "Text in italics"
				// 		, labelSecondary: "Italics, Bold",
				// 		statDetail: { id: 1, name: "Trained +4", value: "Trained +4" },
				// 	},
				// ]
			},
			{
				labelPrimary: "Is Hit On",
				statDetail: cardHitOn,
				linkedValue: []
			}
		],
		vehicleMovement: {
			"tactical": '10"/25cm',
			"terrain": '10"/30cm',
			"crossCountry": '10"/45cm',
			"road": '10"/30cm',
			"cross": "3+"
		},
		armour: {
			"front": '',
			"side": '',
			"top": ''
		},

		save: null,
		weaponry: [{
			id: 1,
			name: "75mm turret",
			range: "12mm",
			movingRof: "2",
			haltedRof: 2,
			haltedType: null,// salvo or arty
			movingType: null,// salvo or arty
			AT: 12,
			FP: "5+",
			artillery: true,
			salvo: false,
			main: true,
			rules: [
			]
		}
		],
		additionalRules: [// rules that appear on the card
		]
	})

	const textInputChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, [value.id]: [value.value] })
	}
	const teamNameChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamName: value });
	}
	const teamClassChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamClass: value });
	}
	const updateCardBgColorHandler = (value) => {
		// find the theme colour, set this colour as the theme
		setCardDetails({ ...cardDetails, theme: value })
	}

	const updateStatHandler = (result) => {
		let newStats = cardDetails.stats.map(stat => {
			if (stat.labelPrimary === result.statName) {
				return { ...stat, statDetail: result.selected };
			}
			return stat;
		})
		setCardDetails({ ...cardDetails, stats: newStats })
	}
	const updateArmourHandler = (result) => {
		setCardDetails({
			...cardDetails,
			armour: {
				"front": result.armourFront,
				"side": result.armourSide,
				"top": result.armourTop
			}
		})
	}
	const onSaveChangeHandler = (value) => {
		setCardDetails({
			...cardDetails,
			save: value
		})
	}
	const setVehicleMovement = (result) => {
		setCardDetails({
			...cardDetails,
			vehicleMovement: {
				"tactical": result.tactical,
				"terrain": result.terrain,
				"crossCountry": result.crossCountry,
				"road": result.road,
				"cross": result.cross
			}
		})
	}
	const updateAdditionalRulesHandler = (result) => {
		let additionalRules = result.map(x => {

			let entity = RULES.find(r => parseInt(r.id) == x.value)
			return entity;
		})
		setCardDetails({
			...cardDetails,
			additionalRules: additionalRules
		})
	}
	const updateUnitType = (result) => {
		let entity = UNIT_TYPE.find(x => parseInt(x.id) == result)

		setCardDetails({
			...cardDetails,
			unitType: entity
		})
	}
	const updateSecondaryStatHandler = (result) => {
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				stats: [...prevState.stats]
			}
			// change the values we need

			let linkedStats = prevState.stats.find(x => x.labelPrimary.toLowerCase() == result.stat).linkedValue
			let secondaryStat = linkedStats.find(x => x.id == result.value.id);
			let filteredStats = [...linkedStats];
			if (secondaryStat != null) {

				// 	// if the name is null, then remove this value
				if (result.name == '') {

					filteredStats = filteredStats.filter(x => {
						return x.id != parseInt(result.value.id);
					})
				}
				// else update this value
				else {
					filteredStats.forEach(stat => {
						if (stat.id == result.value.id) {
							stat.name = result.value.name;
							stat.value = result.value.value;
						}
						return stat;
					})
				}
				// else delete this item
			} else {
				filteredStats.push(result.value);
				// add this item to the array
			}

			temp.stats.find(x => x.labelPrimary.toLowerCase() == result.stat).linkedValue = filteredStats;
			return temp;
		});
	}
	const updateWeaponsHandler = (weaponUpdated) => {
		console.log("Updated weapon")
		// find details of rule and add to view model
		weaponUpdated.rules.forEach(r => {
			let rule = RULES.find(x => x.id == r.id);
			r.name = rule.name;
			r.description = rule.description;
		})
		setCardDetails((prevState) => {

			let temp = {
				...prevState,
				weaponry: [...prevState.weaponry]
			}
			Object.assign(temp.weaponry.find(x => x.id == parseInt(weaponUpdated.id)), weaponUpdated);

			// temp.weaponry.find(x => x.id == weaponUpdated.id) = weaponUpdated;
			return temp;
		})
	}
	const deleteWeaponHandler = (id) => {
		let itemToDelete = cardDetails.weaponry.find(x => parseInt(x.id) == parseInt(id));
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				weaponry: prevState.weaponry.filter(x => parseInt(x.id) != parseInt(id))
			}
			return temp;
		});
	}
	const addWeaponHandler = () => {
		console.log("Adding weapon")
		let lastWeapon = cardDetails.weaponry.at(-1);
		let newWeapon = {
			id: parseInt(lastWeapon["id"]) + 1,
			name: "new Weapon",
			range: "12mm",
			movingRof: 2,
			haltedRof: 2,
			AT: 0,
			FP: 0,
			rules: []
		};
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				weaponry: [...prevState.weaponry, newWeapon]
			}
			return temp;
		})
	}
	const onImageLoadedHandler = (image) => {
		console.log(image);
		setCardDetails({
			...cardDetails,
			unitImage: image
		})

	}
	// useEffect(() => {
	// 	fetch('https://unitcardgeneratordotnetapi.azurewebsites.net/rules').then(response => {
	// 		return response.json();
	// 	}).then(result => {
	// 		console.log(result);
	// 		setRules(result);
	// 	});
	// 	console.log(RULES);
	// })


	useEffect(() => {
		const AUTOSAVE_INTERVAL = 60000;
		const debounce = setTimeout(() => {
			autoSave()
		}, AUTOSAVE_INTERVAL);
		return () => clearTimeout(debounce);
		// autoSave();
	})
	const autoSave = () => {
		console.log('card autosaved');
		localStorage.setItem("autoSave", JSON.stringify(cardDetails))
	}
	// useEffect(() => {
	// 	getAutoSave();
	// }, [cardDetails])
	// const getAutoSave = () => {
	// 	let autosave = localStorage.getItem("autoSave");
	// 	if (autosave != null) {
	// 		let card = JSON.parse(autosave);
	// 		setCardDetails(card);
	// 	}
	// }
	const loadAutoSave = () => {
		let autosave = localStorage.getItem("autoSave");
		if (autosave != null) {
			let card = JSON.parse(autosave);
			setCardDetails(card);
			alert("Autosave Loaded");
		}
	}


	return (
		<div className='card-creator'>
			<div className="card-interface">

				<UnitCardFront
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentCard={ cardDetails }
				></UnitCardFront>
				<UnitCardBack
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentCard={ cardDetails }>

				</UnitCardBack>
			</div>
			<div className="card-form">
				<CardConfig
					rulesList={ RULES }
					skillSecondaryList={ SKILL_SECONDARY}
					onCardBgColorChange={ updateCardBgColorHandler }
					onMotivationChange={ updateStatHandler }
					onSkillChange={ updateStatHandler }
					onHitOnChange={ updateStatHandler }
					onArmourChange={ updateArmourHandler }
					onVehicleMovementChange={ setVehicleMovement }
					onSecondaryStatChange={ updateSecondaryStatHandler }
					onWeaponUpdate={ updateWeaponsHandler }
					onWeaponDelete={ deleteWeaponHandler }
					onWeaponAdd={ addWeaponHandler }
					onAdditionalRulesChange={ updateAdditionalRulesHandler }
					onUnitTypeChange={ updateUnitType }
					onTextInputChangeHandler={ textInputChangeHandler }
					onImageLoadedHandler={ onImageLoadedHandler }
					onSaveChange={ onSaveChangeHandler }
					onLoadAutosaveHandler={ loadAutoSave }
					currentCard={ cardDetails }
				></CardConfig>
			</div>
		</div>
	);
}

export default CardCreator;