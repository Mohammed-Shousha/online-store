import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Slideshow from './components/Slideshow/Slideshow';



class App extends React.Component {
	constructor(){
		super();
		this.state ={
			scrolled: false
		}
	}

	componentDidMount(){
		window.addEventListener('scroll', ()=>{
			if(window.scrollY>55){
				this.setState({scrolled: true})
			}else{
				this.setState({scrolled: false})
			}
		})
	}

	render(){
		return(
		    <div className="App">
		      	<Navigation/>
		      	<Slideshow/>
		      	<Footer/>
		    </div>
		)
	}
} 

export default App;
