import react from 'react';

const ConfigForm = (props) => {

	const darkModeChange = (event) => {
		console.log("CHANGED");
		props.darkModeChange(event.target.checked);
	}
	return <div>
		<div className='form'>
			<div className='inputField'>
				<input type="checkbox" id='checkDarkMode' value="true" onClick={ darkModeChange } />
				<label for="checkDarkMode">Dark Mode</label>
			</div>
		</div>
	</div>;
}
export default ConfigForm;