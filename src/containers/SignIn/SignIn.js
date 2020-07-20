import React from 'react'
import Particles from 'react-particles-js'
import Form from '../../components/Form/Form'

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


const SignIn =({onSignIn, signUpData, setSignUpData, marker, setMarker})=>{
	return(
		<div>
      	<Form
      	 onSignIn={onSignIn}
      	 signUpData={signUpData}
         setSignUpData={setSignUpData}
         marker={marker}
         setMarker={setMarker}/>
    		<Particles
    		 className='particles absolute top-0 left-0 w-100 h-100'
    		 params={particles} />
		</div>
	)
}

export default SignIn