const DataStore = () => {
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
	];
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
			id: 12,
			name: "Stormtrooper",
			description: "A unit may attempt a second Movement Order after succeeding in its first Movement Order. The second Movement Order must be different from the first.",
			displayFront: true
		},
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
	const getInstance = () => {
		return new DataStore();
	}
	const getRules = () => {
		return RULES.sort((a, b) => a.name.localeCompare(b.name))
	}
	const getUnitType = () => {
		return UNIT_TYPE.sort((a, b) =>  a.id.localeCompare(b.id));
	}
}
export default DataStore;