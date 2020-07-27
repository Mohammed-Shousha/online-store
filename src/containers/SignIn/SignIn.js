import React, {Fragment} from 'react'
import Particles from 'react-particles-js'
// import Form from '../../components/Form/Form'
import FormikForm from '../../components/Formik/Formik'
import {particles} from  '../../components/Database'


const SignIn =({onSignIn, signUpData, setSignUpData, setSignInData, marker, setMarker})=>(
	<Fragment>
   	<FormikForm
      onSignIn={onSignIn}
      signUpData={signUpData}
      setSignUpData={setSignUpData}
      setSignInData={setSignInData}
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