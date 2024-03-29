import React, { useState, useContext, useRef } from 'react'
import { Formik, Form, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import { useGoogleLogin } from '@react-oauth/google'
import FlexContainer from '../../Components/FlexContainer'
import { FormButton, GoogleIcon } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { BackTitle } from '../../Components/ShippingComponents'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import GMap from '../GMap/GMap'
import { DataContext, } from '../../Data/DataContext'
import { editUser } from '../../Data/DataActions'
import { LocationContext } from '../../Data/LocationContext'
import { passwordRegex } from '../../Data/Constants'
import { HANDLE_SIGN_UP } from '../../Data/Mutations'
import back from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'


const SignUp = () => {

   const { setIsSignedIn, setData, setConfirmNav } = useContext(DataContext)
   const { address, setAddress } = useContext(LocationContext)

   let navigate = useNavigate()
   const { t, i18n } = useTranslation()

   const [detectAddress, setDetectAddress] = useState(false)
   const [addressFocused, setAddressFocused] = useState(false)
   const [usedEmail, setUsedEmail] = useState(false)
   const [invalidEmail, setInvalidEmail] = useState(false)
   const [disabled, setDisabled] = useState(false)

   const nameInput = useRef(null)
   const emailInput = useRef(null)
   const passwordInput = useRef(null)
   const phoneInput = useRef(null)
   const addressInput = useRef(null)
   const signUpButton = useRef(null)

   const handleKeyUp = (e) => {
      if (e.keyCode === 13) {
         switch (e.target.type) {
            case 'text':
               emailInput.current.focus()
               break
            case 'email':
               passwordInput.current.focus()
               break
            case 'password':
               phoneInput.current.focus()
               break
            case 'tel':
               addressInput.current.focus()
               setAddressFocused(true)
               break
            default:
               signUpButton.current.click()
         }
      }
   }

   const telKeyUp = (e) => {
      if (e.keyCode === 9) {
         addressInput.current.focus()
         setAddressFocused(true)
         e.preventDefault()
      }
   }

   const handleKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 13) {
         e.preventDefault()
      }
   }



   const ConfirmButton = () => {

      const { setFieldValue } = useFormikContext()

      const addressConfirm = () => {
         setFieldValue('address', address)
         setDetectAddress(false)
      }

      return (
         <FormButton grey onClick={addressConfirm}>
            {t('Form.Confirm')}
         </FormButton>
      )
   }

   const GoogleSignUp = () => {

      const { setFieldValue } = useFormikContext()
      const [done, setDone] = useState(false)

      const onSuccess = async (res) => {
         const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${res.access_token}`)
         const result = await response.json()
         const { email, name } = result
         setFieldValue('name', name)
         setFieldValue('email', email)
         setDone(true)
      }

      const onFailure = (res) => {
         console.log(res)
      }

      const signIn = useGoogleLogin({
         onSuccess,
         onFailure,
      })

      return (
         !done &&
         <FormButton
            onClick={signIn}
            rev
            type='button'
         >
            <FlexContainer center>
               <GoogleIcon />
               {t("Form.Google Sign Up")}
            </FlexContainer>
         </FormButton>
      )

   }

   const [handleSignUp] = useMutation(HANDLE_SIGN_UP, {
      onCompleted({ handleSignUp }) {
         const { user, emailSent, message } = handleSignUp
         if (user) {
            navigate('/')
            setIsSignedIn(true)
            setData(editUser(user))
            if (emailSent) {
               setConfirmNav(true)
            }
         } else if (message) {
            setDisabled(false)
            setUsedEmail(true)
            setTimeout(() => setInvalidEmail(false), 2500)
         }
      }
   })


   return (
      <>
         <Formik
            initialValues={{
               name: '',
               email: '',
               password: '',
               phone: '',
               address: '',
            }}
            validationSchema={Yup.object({
               name: Yup.string()
                  .min(2, t('Form.NameErr'))
                  .required(t('Form.Required')),
               email: Yup.string()
                  .email(t('Form.EmailErr'))
                  .required(t('Form.Required')),
               password: Yup.string()
                  .matches(passwordRegex, t('Form.PassErr'))
                  .required(t('Form.Required')),
               phone: Yup.string()
                  .matches(/^\d{11}$/, t('Form.PhoneErr'))
                  .required(t('Form.Required')),
            })}
            onSubmit={({ name, email, password, phone, address }) => {
               setDisabled(true)
               handleSignUp({
                  variables: {
                     name,
                     email,
                     password,
                     phone,
                     address
                  }
               })
               // const response = await fetch('http://localhost:8888/signup', {
               // 	method: 'post',
               // 	headers: { 'Content-Type': 'application/json' },
               // 	body: JSON.stringify({
               // 		name,
               // 		email,
               // 		password,
               // 		phone,
               // 		address
               // 	})
               // })
               // const result = await response.json()
               // if (result.user) {
               // 	navigate('/')
               // 	setIsSignedIn(true)
               // 	const { name, email, password, phone, addresses } = result.user
               // 	setData(editData(name, email, password, phone))
               // 	setData(editAddresses(addresses))
               // 	if(result.emailSent){
               // 		setConfirmNav(true)
               // 	}
               // } else if(result.invalidEmail) {
               // 	setInvalidEmail(true)
               // 	setTimeout(() => setInvalidEmail(false), 2500)
               // } else{
               // 	setUsedEmail(true)
               // 	setTimeout(() => setUsedEmail(false), 2500)
               // }
            }}
         >
            {({ errors, touched, values, handleChange }) => (
               <>
                  {!detectAddress ?
                     <Form onKeyDown={handleKeyDown} >
                        <FormContainer >
                           <h1>{t('Form.Create Account')}</h1>
                           <StyledField
                              name='name' type='text'
                              placeholder={t('Form.Name')} innerRef={nameInput} onKeyUp={handleKeyUp}
                           />
                           {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
                           <StyledField
                              name='email' type='Email'
                              placeholder={t('Form.Email')} innerRef={emailInput} onKeyUp={handleKeyUp}
                           />
                           {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                           {usedEmail && <ErrorText>{t('Form.EmailErrDb')}</ErrorText>}
                           {invalidEmail && <ErrorText> Invalid Email</ErrorText>}
                           <StyledField
                              name='password' type='password'
                              placeholder={t('Form.Password')} innerRef={passwordInput} onKeyUp={handleKeyUp}
                           />
                           {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
                           <StyledField
                              name='phone' type='tel'
                              placeholder={t('Form.Phone')} innerRef={phoneInput} onKeyUp={handleKeyUp} onKeyDown={telKeyUp}
                           />
                           {touched.phone && errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                           <StyledField
                              name='address' type='text' as='textarea' value={values.address} onChange={handleChange}
                              placeholder={t('Form.Address')} ref={addressInput} onKeyUp={handleKeyUp}
                              onClick={() => setAddressFocused(true)}
                           />
                           {addressFocused &&
                              <FormButton type='button' grey onClick={() => setDetectAddress(true)}>
                                 {t('Form.Location')}
                              </FormButton>
                           }
                           <FormButton ref={signUpButton} disabled={disabled}>
                              {t('Form.Sign Up')}
                           </FormButton>
                           <GoogleSignUp />
                           <p> {t('Form.Have Account')}
                              <Link to='/signin'> <strong> {t('Form.Sign In')} </strong> </Link>
                           </p>
                        </FormContainer>
                     </Form>
                     :
                     <>
                        <BackTitle onClick={() => setDetectAddress(false)}>
                           <img src={i18n.language === 'ar' ? next : back} alt='back' />
                           <h3>{t("Form.Back")}</h3> {/* Back to Sign Up*/}
                        </BackTitle>
                        <GMap
                           address={address}
                           setAddress={setAddress}
                        />
                        <ConfirmButton />
                     </>
                  }
               </>
            )}
         </Formik>
      </>
   )
}

export default SignUp