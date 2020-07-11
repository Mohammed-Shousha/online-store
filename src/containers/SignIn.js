import React from 'react'
import Form from '../components/Form/Form'
import Particles from 'react-particles-js'

const particles = {
  particles: {
    number:{
      value:300,
      density:{
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#003e45"
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#003e45",
      opacity: 0.4,
      width: 1
    },              
  }
}

const SignIn =({onSignIn, onNameChange, name})=>{
	return(
		<div>
      	<Form
      	 onSignIn={onSignIn}
      	 onNameChange={onNameChange} 
      	 name={name} />
    		<Particles
    		 className='particles absolute top-0 left-0 w-100 h-100'
    		 params={particles} />
		</div>
	)
}

export default SignIn