import React, {Fragment, useState, useRef} from 'react'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import './Profile.css'
import Footer from '../Footer/Footer'
import {passwordRegex} from '../Constants'


const Profile =({signInData, setSignInData, signUpData, setSignUpData})=> {

	const [changePassword, setChangePassword ] = useState(false)

	const handleKeyDown =(e)=> {
	  if ((e.charCode || e.keyCode) === 13) {
	    e.preventDefault()
	  }
	}

	const newPasswordInput = useRef(null)
	const confirmPasswordInput = useRef(null)
	const okButton = useRef(null)
	const phoneInput = useRef(null)
	const saveButton = useRef(null)

	const handleKeyUp =(e)=> {
		if(e.keyCode === 13){
			switch(e.target.name){
				case 'name':
					phoneInput.current.focus()
					break
				case 'phone':
					saveButton.current.click()
					break
				case 'password' :
					newPasswordInput.current.focus()
					break
				case 'newPassword':
					confirmPasswordInput.current.focus()
					break
				default :
					okButton.current.click()
			}
		}
  	}

	return(
		<Fragment>
		<h1 className='profile-title'> Profile </h1>
		<div className='profile-container'>
			<h3 className='tl'> General Information </h3>
			<Formik
			 initialValues={{name: signUpData.name , phone:signUpData.phone}}
			 validationSchema={Yup.object({
		        phone : Yup.string()
		        	.matches(/^\d{11}$/,'Invalid Phone')
		     })}
			 onSubmit={({name, phone}) => {
				setSignUpData({ ...signUpData,
					name: name,
					phone:phone
				})
			 }}
			>
			{({errors, touched})=>(
				<Form onKeyDown={handleKeyDown}>
					<div className='flex justify-around'>
						<div className='profile-details'>
							<p> Name </p>
							<Field name='name' as='input' onKeyUp={handleKeyUp} />
						</div>
						<div className='profile-details'>
							<p> Phone </p>
							<Field 
							 name='phone' as='input' 
							 innerRef={phoneInput} onKeyUp={handleKeyUp}
							/>
					       {touched.phone && errors.phone && <p className='i' style={{'color':'red'}}>{errors.phone}</p>}
						</div>
					</div>
					<div className='flex justify-end'>
						<button type='submit' className='profile-save-bt' ref={saveButton}> SAVE </button>
					</div>
				</Form>
			)}
			</Formik>
		</div>

		<div className='profile-container'>
			<h3 className='tl'> Security </h3>
			<div className='flex justify-around'>
				<div className='profile-details'>
					<p> Email </p>
					<input type='email' style={{'color': '#555752'}} value={signUpData.email || signInData.signInEmail} readOnly/>
					<p className='i'> You can't change your email </p>
				</div>
				<div className='profile-details'>
					<p> Password </p>
					<input type='password' style={{'color': '#555752'}} value={signUpData.password || signInData.signInPassword} readOnly/>	
				</div>
			</div>
			<div className='flex justify-end'>
				<button className='profile-save-bt' onClick={()=>setChangePassword(true)}> CHANGE PASSWORD </button>
			</div>
		</div>
		{changePassword &&
		<div className='modal'>
			<div className='change-password-container'>
				<div className='change-password-title'>
					<h3> Change Password </h3>
					<p> Enter your current password and new password to change the password </p>
				</div>
				<Formik
				 initialValues={{password:'' , newPassword:'', confirmPassword:''}}
				 validationSchema={Yup.object({
			        password: Yup.string()
			        	.required('Required')
			        	.test('match', 'Wrong Password', (password)=>(password===signUpData.password)),	
			        newPassword: Yup.string()
			        	.required('Required')
			        	.matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters'),
			        confirmPassword :Yup.string()
			        	.required('Required')
			        	.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
			     })}
				 onSubmit={({newPassword}) => {
					setSignUpData({ ...signUpData, password: newPassword})
					setChangePassword(false)
				 }}
				>
				{({errors, touched})=>(
					<Form onKeyDown={handleKeyDown}>
						<div className='change-password-details'>
							<p> Current Password </p>
							<Field 
							 name='password' as='input' type='password'
							 onKeyUp={handleKeyUp}
							/>
							{touched.password && errors.password && <h6>{errors.password}</h6>}
						</div>
						<div className='change-password-details'>
							<p> New Password </p>
							<Field 
							 name='newPassword' as='input' type='password' 
							 innerRef={newPasswordInput} onKeyUp={handleKeyUp}
							/>
							{touched.newPassword && errors.newPassword && <h6>{errors.newPassword}</h6>}
						</div>
						<div className='change-password-details'>
							<p>Confirm New Password </p>
							<Field 
							 name='confirmPassword' as='input' type='password' 
							 innerRef={confirmPasswordInput} onKeyUp={handleKeyUp}
							/>
							{touched.confirmPassword && errors.confirmPassword && <h6>{errors.confirmPassword}</h6>}
						</div>
						<div className='change-password-bts flex'>
							<button type='button' onClick={()=>setChangePassword(false)}> CANCEL </button>
							<button type='submit' ref={okButton} style={{'color': 'blue'}}> OK </button>
						</div>
					</Form>
				)}
				</Formik>
			</div>
		</div>}
		<Footer/>
		</Fragment>
	)
}

export default Profile