import React, {Fragment} from 'react'
import Particles from 'react-particles-js'
import Form from '../../components/Form/Form'
import {particles} from  '../../components/Database'


const SignIn =({onSignIn, signUpData, setSignUpData, marker, setMarker})=>(
	<Fragment>
   	<Form
   	 onSignIn={onSignIn}
   	 signUpData={signUpData}
       setSignUpData={setSignUpData}
       marker={marker}
       setMarker={setMarker}
      />
 		<Particles
 		 className='absolute top-0 left-0 w-100 h-100'
 		 params={particles} 
      />
	</Fragment>
)

export default SignIn