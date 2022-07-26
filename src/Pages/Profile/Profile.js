import React, { useState, useRef, useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import FlexContainer from '../../Components/FlexContainer'
import Title from '../../Components/Title'
import Modal from '../../Components/Modal'
import ErrorText from '../../Components/ErrorText'
import { ProfileContainer, ProfileDetails, ProfileButton, ChangePasswordContainer, ChangePasswordButton } from '../../Components/ProfileComponents'
import { DataContext } from '../../Data/DataContext'
import { editData } from '../../Data/DataActions'
import { passwordRegex } from '../../Data/Constants'
import { HANDLE_CHANGE_DATA, HANDLE_CHANGE_PASSWORD } from '../../Data/Mutations'


const Profile = () => {

   const { data, setData } = useContext(DataContext)
   const { email, password } = data


   const [changePassword, setChangePassword] = useState(false)
   const [passwordError, setPasswordError] = useState('')
   const [disabledPass, setDisabledPass] = useState(false)
   const [disabledSave, setDisabledSave] = useState(false)


   const passwordValue = '•'.repeat(password.length)

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

   const [handleChangeData] = useMutation(HANDLE_CHANGE_DATA, {
      onCompleted({ handleChangeData }) {
         const { result, user } = handleChangeData
         if (result) {
            const { name, email, phone } = user
            setData(editData(name, email, password, phone))
            setDisabledSave(false)
         }
      }
   })

   const [handleChangePassword] = useMutation(HANDLE_CHANGE_PASSWORD, {
      onCompleted({ handleChangePassword }) {
         const { email, name, password, phone, message } = handleChangePassword
         if (email) {
            setData(editData(name, email, password, phone))
            setChangePassword(false)
            setDisabledPass(false)
         } else if (message) {
            setDisabledPass(false)
            setPasswordError(message)
            setTimeout(() => setPasswordError(''), 2500)
         }
      }
   })

   return (
      <>
         <Title h1> Profile </Title>
         <ProfileContainer>
            <h3> General Information </h3>
            <Formik
               initialValues={{
                  name: data.name,
                  phone: data.phone
               }}
               validationSchema={Yup.object({
                  name: Yup.string()
                     .min(2, 'Too Short')
                     .required("Can't Be Empty"),
                  phone: Yup.string()
                     .matches(/^\d{11}$/, 'Invalid Phone')
                     .required("Can't Be Empty"),
               })}
               onSubmit={({ name, phone }) => {
                  setDisabledSave(true)
                  handleChangeData({ variables: { name, phone } })
                  // const response = await fetch('http://localhost:8888/changedata', {
                  // 	method: 'put',
                  // 	headers: { 'Content-Type': 'application/json' },
                  // 	body: JSON.stringify({
                  // 		email: data.email,
                  // 		name,
                  // 		phone,
                  // 	})
                  // })
                  // const { result, user } = await response.json()
                  // if (result.nModified) {
                  // 	const { name, email, phone } = user
                  // 	setData(editData(name, email, data.password, phone))
                  // }
               }}
            >
               {({ errors, touched }) => (
                  <Form onKeyDown={handleKeyDown}>
                     <FlexContainer around noAlign responsive>
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
                        <ProfileButton
                           type='submit'
                           ref={saveButton}
                           disabled={disabledSave}
                        >
                           SAVE
                        </ProfileButton>
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
                  <input type='email' value={email} readOnly />
                  <h6> You can't change your email </h6>
               </ProfileDetails>
               <ProfileDetails readOnly>
                  <p> Password </p>
                  <input name='password' type='email' value={passwordValue} readOnly />
               </ProfileDetails>
            </FlexContainer>
            <FlexContainer flexEnd>
               <ProfileButton
                  onClick={() => setChangePassword(true)}
               >
                  CHANGE PASSWORD
               </ProfileButton>
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
                           .required('Required'),
                        newPassword: Yup.string()
                           .required('Required')
                           .matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters'),
                        confirmPassword: Yup.string()
                           .required('Required')
                           .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                     })}
                     onSubmit={({ password, confirmPassword }) => {
                        setDisabledPass(true)
                        handleChangePassword({
                           variables: {
                              password,
                              newPassword: confirmPassword
                           }
                        })
                        // const response = await fetch('http://localhost:8888/changepassword', {
                        // 	method: 'put',
                        // 	headers: { 'Content-Type': 'application/json' },
                        // 	body: JSON.stringify({
                        // 		email,
                        // 		password, 
                        // 		newPassword: confirmPassword
                        // 	})
                        // })
                        // const result = await response.json()
                        // if (result.user) {
                        // 	const { name, email, password, phone} = result.user
                        // 	setData(editData(name, email, password, phone))
                        // 	setChangePassword(false)
                        // }else if(result.message){
                        // 	setPasswordError(result.message)
                        // 	setTimeout(() => setWrongPassword(''), 2500)
                        // }
                     }}
                  >
                     {({ errors, touched }) => (
                        <Form onKeyDown={handleKeyDown}>
                           <ProfileDetails changePassword>
                              <p> Current Password </p>
                              <Field name='password' type='password' onKeyUp={handleKeyUp} />
                              {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
                              {passwordError === 'Wrong Password' && <ErrorText> {passwordError} </ErrorText>}
                           </ProfileDetails>
                           <ProfileDetails changePassword>
                              <p> New Password </p>
                              <Field
                                 name='newPassword' type='password'
                                 innerRef={newPasswordInput} onKeyUp={handleKeyUp}
                              />
                              {touched.newPassword && errors.newPassword && <ErrorText>{errors.newPassword}</ErrorText>}
                              {passwordError === 'You Need to Write a New Password' && <ErrorText> {passwordError} </ErrorText>}
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
                              <ChangePasswordButton
                                 color='#555752' type='button'
                                 onClick={() => setChangePassword(false)}
                              >
                                 CANCEL
                              </ChangePasswordButton>
                              <ChangePasswordButton
                                 color='blue' type='submit'
                                 ref={OKButton} disabled={disabledPass}
                              >
                                 OK
                              </ChangePasswordButton>
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