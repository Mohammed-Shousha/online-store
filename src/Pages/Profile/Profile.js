import React, { useState, useRef, useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FlexContainer from '../../Components/FlexContainer'
import Title from '../../Components/Title'
import Modal from '../../Components/Modal'
import ErrorText from '../../Components/ErrorText'
import { ProfileContainer, ProfileDetails, ProfileButton, ChangePasswordContainer, ChangePasswordButton } from '../../Components/ProfileComponents'
import { DataContext } from '../../Data/DataContext'
import { editData } from '../../Data/DataActions'
import { passwordRegex } from '../../Data/Constants'


const Profile = () => {

	const { data, setData } = useContext(DataContext)

	const [changePassword, setChangePassword] = useState(false)

	const handleKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 13) {
			e.preventDefault()
		}
	}

	const newPasswordInput = useRef(null)
	const confirmPasswordInput = useRef(null)
	const OKButton = useRef(null)
	const phoneInput = useRef(null)
	const saveButton = useRef(null)

	const handleKeyUp = (e) => {
		if (e.keyCode === 13) {
			switch (e.target.name) {
				case 'name':
					phoneInput.current.focus()
					break
				case 'phone':
					saveButton.current.click()
					break
				case 'password':
					newPasswordInput.current.focus()
					break
				case 'newPassword':
					confirmPasswordInput.current.focus()
					break
				default:
					OKButton.current.click()
			}
		}
	}

	return (
		<>
			<Title h1> Profile </Title>
			<ProfileContainer>
				<h3> General Information </h3>
				<Formik
					initialValues={{ name: data.name, phone: data.phone }}
					validationSchema={Yup.object({
						name: Yup.string()
							.min(2, 'Too Short')
							.required("Can't Be Empty"),
						phone: Yup.string()
							.matches(/^\d{11}$/, 'Invalid Phone')
							.required("Can't Be Empty"),
					})}
					onSubmit={({ name, phone }) => {
						setData(editData(name, data.email, data.password, phone))
					}}
				>
					{({ errors, touched }) => (
						<Form onKeyDown={handleKeyDown}>
							<FlexContainer around responsive>
								<ProfileDetails>
									<p> Name </p>
									<Field name='name' onKeyUp={handleKeyUp} />
									{touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
								</ProfileDetails>
								<ProfileDetails>
									<p> Phone </p>
									<Field name='phone' innerRef={phoneInput} onKeyUp={handleKeyUp} />
									{touched.phone && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
								</ProfileDetails>
							</FlexContainer>
							<FlexContainer flexEnd>
								<ProfileButton type='submit' ref={saveButton}> SAVE </ProfileButton>
							</FlexContainer>
						</Form>
					)}
				</Formik>
			</ProfileContainer>

			<ProfileContainer>
				<h3> Security </h3>
				<FlexContainer around noAlign responsive>
					<ProfileDetails readOnly>
						<p> Email </p>
						<input type='email' value={data.email} readOnly />
						<h6> You can't change your email </h6>
					</ProfileDetails>
					<ProfileDetails readOnly>
						<p> Password </p>
						<input type='password' value={data.password} readOnly />
					</ProfileDetails>
				</FlexContainer>
				<FlexContainer flexEnd>
					<ProfileButton onClick={() => setChangePassword(true)}> CHANGE PASSWORD </ProfileButton>
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
							initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
							validationSchema={Yup.object({
								password: Yup.string()
									.required('Required')
									.test('match', 'Wrong Password', (password) => (password === data.password)),
								newPassword: Yup.string()
									.required('Required')
									.matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters'),
								confirmPassword: Yup.string()
									.required('Required')
									.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
							})}
							onSubmit={({ newPassword }) => {
								setData(editData(data.name, data.email, newPassword, data.phone))
								setChangePassword(false)
							}}
						>
							{({ errors, touched }) => (
								<Form onKeyDown={handleKeyDown}>
									<ProfileDetails changePassword>
										<p> Current Password </p>
										<Field name='password' type='password' onKeyUp={handleKeyUp} />
										{touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
									</ProfileDetails>
									<ProfileDetails changePassword>
										<p> New Password </p>
										<Field
											name='newPassword' type='password'
											innerRef={newPasswordInput} onKeyUp={handleKeyUp}
										/>
										{touched.newPassword && errors.newPassword && <ErrorText>{errors.newPassword}</ErrorText>}
									</ProfileDetails>
									<ProfileDetails changePassword>
										<p>Confirm New Password </p>
										<Field
											name='confirmPassword' type='password'
											innerRef={confirmPasswordInput} onKeyUp={handleKeyUp}
										/>
										{touched.confirmPassword && errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
									</ProfileDetails>
									<FlexContainer around>
										<ChangePasswordButton color='#555752' type='button' onClick={() => setChangePassword(false)}> CANCEL </ChangePasswordButton>
										<ChangePasswordButton color='blue' type='submit' ref={OKButton}> OK </ChangePasswordButton>
									</FlexContainer>
								</Form>
							)}
						</Formik>
					</ChangePasswordContainer>
				</Modal>
			}
		</>
	)
}

export default Profile