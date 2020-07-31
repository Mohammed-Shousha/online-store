import React, {Fragment} from 'react'
import Particles from 'react-particles-js'
import {particles} from  '../../components/Database'
import FormikForm from '../../components/Formik/Formik'


const SignIn =()=>(
	<Fragment>
	<FormikForm/>
	<Particles
	 className='absolute top-0 left-0 w-100 h-100'
	 params={particles} 
   />
	</Fragment>
)

export default SignIn