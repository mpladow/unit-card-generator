import './Weaponry.scss';


const WeaponDetails = (props) => {

	const weapon = props.weapon;
	const classesCardInner = `weaponryCard-inner ${weapon.main == true ? 'main' : ''}`;
	const standardWeapon = !weapon.salvo && !weapon.artillery;
	let rofHalted = '';
	let rofMoving = '';
	if (standardWeapon) {

		rofHalted = <div className='column-halted'>
			<div className='weaponry-value'>
				{ weapon.haltedRof }
			</div>
		</div>

		rofMoving = <div className='column-moving'>
			<div className="weaponry-value">
				{ weapon.movingRof }
			</div>
		</div>
	}
	const weaponNotes = weapon.rules != null ? weapon.rules.map(x => x.name).join(", ") : '';
	return <div>
		<div className={ classesCardInner } >
			<div className='row align-center'>
				<div className='column-name'>
					<div className="weaponry-value">
						{ weapon.name }
					</div>
				</div>
				<div className='column-range'>
					<div className="weaponry-value">
						{ weapon.range }
					</div>
				</div>

				{ weapon.salvo && (
						<div className='column-barrage'>
							<div className='weaponry-value'>
								SALVO
							</div>
						</div>

				) }
				{ weapon.artillery && (
						<div className='column-barrage'>
							<div className='weaponry-value'>
								ARTILLERY
							</div>
						</div>
				) }
				{rofHalted}{rofMoving}
				<div className='column-at'>
					<div className="weaponry-value">
						{ weapon.AT }
					</div>
				</div>
				<div className='column-fp'>
					<div className="weaponry-value">
						{ weapon.FP }
					</div>
				</div>
				<div className='column-notes'>
					<div className="weaponry-value notes">
						{ weaponNotes }
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default WeaponDetails;