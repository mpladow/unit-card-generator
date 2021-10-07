import react from 'react';
import './ConfigForm.scss';

const ConfigForm = (props) => {

	const darkModeChange = (event) => {
		props.darkModeChange(event.target.checked);
	}
	return <div className='container-config'>
		<div className='form'>
			{/* <div className='inputField'>
				<input type="checkbox" id='checkDarkMode' value="true" onClick={darkModeChange} />
				<label for="checkDarkMode">Measurements</label>
			</div> */}
			<div className='inputField'>
				<input type="checkbox" id='checkDarkMode' value="true" onClick={darkModeChange} />
				<label for="checkDarkMode">Dark Mode</label>
			</div>
		</div>
	</div>;
}
export default ConfigForm;