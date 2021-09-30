import React from 'react'
import WeaponDetails from "./WeaponDetails";
import '../SectionWeaponry/Weaponry.scss';


const Weaponry = (props) => {

    const weapon = props.weaponry;
    const classesCard = `weaponryCard ${props.currentTheme.bgColor}`;

    return <div>
        <div className={classesCard}>
            <div className='row'>
                <div className='column-name'><div className="weaponry-label"><label>Weapon</label></div></div>
                <div className='column-range'><div className="weaponry-label"><label>Range</label></div></div>
                <div className='column-halted'><div className="weaponry-label"><label>Halted ROF</label></div></div>
                <div className='column-moving'><div className="weaponry-label"><label>Moving ROF</label></div></div>
                <div className='column-at'><div className="weaponry-label"><label>Anti-tank</label></div></div>
                <div className='column-fp'><div className="weaponry-label"><label>Fire-power</label></div></div>
                <div className='column-notes'><div className="weaponry-label"><label>Notes</label></div></div>
            </div>
            {weapon.map(x => {
                return <WeaponDetails weapon={x} currentTheme={props.currentTheme}></WeaponDetails>
            })
            }

        </div>
    </div>;
}
export default Weaponry;