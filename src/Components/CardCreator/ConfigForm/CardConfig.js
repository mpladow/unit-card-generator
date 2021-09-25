import react from 'react';
import './CardConfig.scss';

const CardConfig = (props) => {

	const bgColourChangeHandler = (event) => {
		props.onCardBgColorChange(event.target.value);
	}
	return <div>
		<div className='form'>
			<div className='inputField'>
				<label>Card Background Color</label>
				<select onChange={ bgColourChangeHandler }>
					<option defaultValue value='US'>US</option>
					<option value='German'>German Grey</option>
					<option value='Soviet'>Soviet</option>
				</select>
			</div>
		</div>
	</div>
}
export default CardConfig;