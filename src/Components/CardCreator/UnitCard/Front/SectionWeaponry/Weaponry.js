import React from 'react'
import WeaponDetails from "./WeaponDetails";
import '../../../../../scss/Layout.scss';
import '../SectionWeaponry/Weaponry.scss';


const Weaponry = (props) => {

	const weapon = props.weaponry;
	const classesCard = `weaponryCard ${props.currentTheme.bgColor}`;
	const standardWeapon = !weapon.salvo && !weapon.artillery;
	let rofHalted = '';
	let rofMoving = '';
	return <div>
		<div className={ classesCard }>
			<div className='row'>
				<div className='weapon-column column-name'><div className="weaponry-label"><label>Weapon</label></div></div>
				<div className='weapon-column column-range'><div className="weaponry-label"><label>Range</label></div></div>
				{/* <div className='column-halted'><div className="weaponry-label"><label>Halted ROF</label></div></div>
				<div className='column-moving'><div className="weaponry-label"><label>Moving ROF</label></div></div> */}
				<div className='weapon-column column-rof'><div className="weaponry-label"><label><div>ROF</div> <div className='rof-inner'><div>Halted</div> <div>MOVING</div></div></label></div></div>
				<div className='weapon-column column-at'><div className="weaponry-label"><label>Anti-tank</label></div></div>
				<div className='weapon-column column-fp'><div className="weaponry-label"><label>Fire-power</label></div></div>
				<div className='weapon-column column-notes'><div className="weaponry-label"><label>Notes</label></div></div>
			</div>
			<div>
				{ weapon.map(x => {
					return <WeaponDetails weapon={ x } currentTheme={ props.currentTheme }></WeaponDetails>
				})
				}
			</div>

		</div>
	</div>;
}
export default Weaponry;