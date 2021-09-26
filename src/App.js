import { useState } from 'react';

import './App.css';
import './scss/Layout.scss';
import CardCreator from './Components/CardCreator/CardCreator';
import ConfigForm from './Components/CardCreator/UI/ConfigForm';


function App() {
	const [darkMode, setDarkMode] = useState(true);
	const darkModeChangeHandler = (value) => {
		setDarkMode(value);
	}
	let classes = `App ${darkMode == true ? 'dark-mode' : 'light-mode'}`;
	return (
		<div className={ classes }>
			<CardCreator></CardCreator>
			<ConfigForm darkModeChange={ darkModeChangeHandler }></ConfigForm>
		</div >
	);
}

export default App;
