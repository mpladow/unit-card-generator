import react from 'react';

const CardConfig = (props) => {

	const bgColourChangeHandler = (event) => {
		props.onCardBgColorChange(event.target.value);
	}
	return <div>
		<label>Card Background Color</label>
		<select onChange={ bgColourChangeHandler}>
			<option defaultValue value='blue'>Blue</option>
			<option value='grey'>German Grey</option>
		</select>
	</div>
}
export default CardConfig;