import React, {Fragment, useState, useRef, useContext} from 'react'
import {DataContext} from '../../context/DataContext'
import {editData} from '../../context/DataActions'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {passwordRegex} from '../../components/Constants'
import FlexContainer from '../../components/StyledComponents/FlexContainer'
import Title from '../../components/StyledComponents/Title'
import Modal from '../../components/StyledComponents/Modal'
import { ProfileContainer, ProfileDetails, ProfileText, ProfileButton, ChangePasswordContainer,  ChangePasswordButton } from '../../components/StyledComponents/ProfileComponents'


const Profile =()=> {

	const {data, setData} = useContext(DataContext)

	const [changePassword, setChangePassword ] = useState(false)

	const handleKeyDown =(e)=> {
	  if ((e.charCode || e.keyCode) === 13) {
	    e.preventDefault()
	  }
	}

	const newPasswordInput = useRef(null)
	const confirmPasswordInput = useRef(null)
	const OKButton = useRef(null)
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
					OKButton.current.click()
			}
		}
  	}

	return(
		<Fragment>
		<Title> Profile </Title>
		<ProfileContainer>
			<h3> General Information </h3>
			<Formik
			 initialValues={{name: data.name , phone:data.phone}}
			 validationSchema={Yup.object({
		        phone : Yup.string()
		        	.matches(/^\d{11}$/,'Invalid Phone')
		     })}
			 onSubmit={({name, phone}) => {
				setData(editData(name, data.email, data.password, phone))
			 }}
			>
			{({errors, touched})=>(
				<Form onKeyDown={handleKeyDown}>
					<FlexContainer around>
						<ProfileDetails>
							<p> Name </p>
							<Field name='name' onKeyUp={handleKeyUp} />
						</ProfileDetails>
						<ProfileDetails>
							<p> Phone </p>
							<Field 
								name='phone'  
								innerRef={phoneInput} onKeyUp={handleKeyUp}
							/>
							{touched.phone && errors.phone && <ProfileText error>{errors.phone}</ProfileText>}
						</ProfileDetails>
					</FlexContainer>
					<FlexContainer end>
						<ProfileButton type='submit' ref={saveButton}> SAVE </ProfileButton>
					</FlexContainer>
				</Form>
			)}
			</Formik>
		</ProfileContainer>

		<ProfileContainer>
			<h3> Security </h3>
			<FlexContainer around>
				<ProfileDetails readOnly>
					<p> Email </p>
					<input type='email' value={data.email}/>
					<ProfileText> You can't change your email </ProfileText>
				</ProfileDetails>
				<ProfileDetails readOnly>
					<p> Password </p>
					<input type='password' value={data.password}/>	
				</ProfileDetails>
			</FlexContainer>
			<FlexContainer end>
				<ProfileButton onClick={()=>setChangePassword(true)}> CHANGE PASSWORD </ProfileButton>
			</FlexContainer>
		</ProfileContainer>

		{changePassword &&
		<Modal>
			<ChangePasswordContainer>
				<div>
					<h3> Change Password </h3>
					<p> Enter your current password and new password to change the password </p>
				</div>
				<Formik
				 initialValues={{password:'' , newPassword:'', confirmPassword:''}}
				 validationSchema={Yup.object({
			        password: Yup.string()
			        	.required('Required')
			        	.test('match', 'Wrong Password', (password)=>(password===data.password)),	
			        newPassword: Yup.string()
			        	.required('Required')
			        	.matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters'),
			        confirmPassword :Yup.string()
			        	.required('Required')
			        	.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
			     })}
				 onSubmit={({newPassword}) => {
					setData(editData(data.name, data.email, newPassword, data.phone))
					setChangePassword(false)
				 }}
				>
				{({errors, touched})=>(
					<Form onKeyDown={handleKeyDown}>
						<ProfileDetails changePassword>
							<p> Current Password </p>
							<Field 
							 name='password'  type='password'
							 onKeyUp={handleKeyUp}
							/>
							{touched.password && errors.password && <ProfileText error>{errors.password}</ProfileText>}
						</ProfileDetails>
						<ProfileDetails changePassword>
							<p> New Password </p>
							<Field 
							 name='newPassword'  type='password' 
							 innerRef={newPasswordInput} onKeyUp={handleKeyUp}
							/>
							{touched.newPassword && errors.newPassword && <ProfileText error>{errors.newPassword}</ProfileText>}
						</ProfileDetails>
								<ProfileDetails changePassword>
							<p>Confirm New Password </p>
							<Field 
							 name='confirmPassword'  type='password' 
							 innerRef={confirmPasswordInput} onKeyUp={handleKeyUp}
							/>
							{touched.confirmPassword && errors.confirmPassword && <ProfileText error>{errors.confirmPassword}</ProfileText>}
						</ProfileDetails>
						<FlexContainer around>
							<ChangePasswordButton color='#555752' type='button' onClick={()=>setChangePassword(false)}> CANCEL </ChangePasswordButton>
							<ChangePasswordButton color='blue' type='submit' ref={OKButton}> OK </ChangePasswordButton>
						</FlexContainer>
					</Form>
				)}
				</Formik>
			</ChangePasswordContainer>
		</Modal>}
		</Fragment>
	)
}

export default Profile