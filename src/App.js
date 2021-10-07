import { useState } from 'react';

import './App.scss';
import './scss/Layout.scss';
import CardCreator from './Components/CardCreator/CardCreator';
import ConfigForm from './Components/CardCreator/UI/ConfigForm';
import config from './Config/config.json';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faDownload, faTimes)


function App() {

	const [darkMode, setDarkMode] = useState('dark-mode');
	const [measurement, setMeasurement] = useState('imperial');
	const darkModeChangeHandler = (value) => {
		setDarkMode(value);
	}
	const mesurementChangeHandler = (value) => {
		setMeasurement(value);
	}
	let classes = `App ${darkMode == true ? 'dark-mode' : 'light-mode'}`;
	return (
		<div className={ classes }>
			<CardCreator></CardCreator>
			<ConfigForm darkModeChange={ darkModeChangeHandler } />
		</div >
	);
}

export default App;
