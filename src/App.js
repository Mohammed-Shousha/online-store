import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';


class App extends React.Component{
	constructor(){
		super();
	}

	render() {
		return(
		    <div className="App">
		      	<Navigation/>
		    </div>
	    )
	};
}

export default App;
