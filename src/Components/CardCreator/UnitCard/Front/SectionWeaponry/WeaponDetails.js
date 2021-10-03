import './Weaponry.scss';


const WeaponDetails = (props) => {

    const weapon = props.weapon;
    const classesCardInner = `weaponryCard-inner ${weapon.main == true? 'main' : ''}`;

    const weaponNotes = weapon.rules != null? weapon.rules.map(x => x.name).join(", ") : '';
    return <div>
        <div className={classesCardInner} >
            <div className='row align-center'>
                <div className='column-name'>
                    <div className="weaponry-value weaponry-value-first">
                        {weapon.name}
                    </div>
                </div>
                <div className='column-range'>
                    <div className="weaponry-value">
                        {weapon.range}
                    </div>
                </div>
                <div className='column-halted'>
                    <div className='weaponry-value'>
                        {weapon.haltedRof}
                    </div>
                </div>
                <div className='column-moving'>
                    <div className="weaponry-value">
                        {weapon.movingRof}
                    </div>
                </div>
                <div className='column-at'>
                    <div className="weaponry-value">
                        {weapon.AT}
                    </div>
                </div>
                <div className='column-fp'>
                    <div className="weaponry-value">
                        {weapon.FP}
                    </div>
                </div>
                <div className='column-notes'>
                    <div className="weaponry-value notes weaponry-value-last">
                        {weaponNotes}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WeaponDetails;