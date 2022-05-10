import React, { useContext, useRef, useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import FlexContainer from '../../Components/FlexContainer'
import { FormButton, GoogleIcon } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import { DataContext } from '../../Data/DataContext'
import { editUser } from '../../Data/DataActions'
import { HANDLE_SIGN_IN, HANDLE_GOOGLE_SIGN_IN } from '../../Data/Mutations'


const SignIn = () => {

   const { setData, setIsSignedIn } = useContext(DataContext)

   const navigate = useNavigate()

   const { t } = useTranslation()

   const [wrongData, setWrongData] = useState(false)
   const [disabled, setDisabled] = useState(false)
   const signInPasswordInput = useRef(null)
   const signInButton = useRef(null)

   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

   const handleKeyUp = (e) => {
      if (e.keyCode === 13) {
         switch (e.target.type) {
            case 'email':
               signInPasswordInput.current.focus()
               break
            default:
               signInButton.current.click()
         }
      }
   }

   const handleKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 13) {
         e.preventDefault()
      }
   }


   const [handleSignIn] = useMutation(HANDLE_SIGN_IN, {
      onCompleted({ handleSignIn }) {
         const { _id, message } = handleSignIn
         if (_id) {
            navigate('/')
            setIsSignedIn(true)
            setData(editUser(handleSignIn))
         } else if (message) {
            setDisabled(false)
            setWrongData(true)
            setTimeout(() => setWrongData(false), 3000)
         }
      }
   })


   const [handleGoogleSignIn] = useMutation(HANDLE_GOOGLE_SIGN_IN, {
      onCompleted({ handleGoogleSignIn }) {
         const { _id, message } = handleGoogleSignIn
         if (_id) {
            navigate('/')
            setIsSignedIn(true)
            setData(editUser(handleGoogleSignIn))
         } else if (message) {
            setWrongData(true)
            setTimeout(() => setWrongData(false), 3000)
         }
      }
   })


   const onSuccess = (res) => {
      const { email } = res.profileObj
      handleGoogleSignIn({
         variables: {
            email
         }
      })
   }

   const onFailure = (res) => {
      console.log(res)
   }

   const { signIn } = useGoogleLogin({
      clientId,
      onSuccess,
      onFailure,
      cookiePolicy: 'single_host_origin'
   })


   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
         }}
         validationSchema={Yup.object({
            email: Yup.string()
               .email(t('Form.EmailErr'))
               .required(t('Form.Required')),
            password: Yup.string()
               .required(t('Form.Required'))
         })}
         onSubmit={({ email, password }) => {
            setDisabled(true)
            handleSignIn({ variables: { email, password } })
            // const response = await fetch('http://localhost:8888/signin', {
            //     method: 'post',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password
            //     })
            // })
            // const user = await response.json()
            // if (signInData.handleSignIn._id) {
            //     navigate('/')
            //     setIsSignedIn(true)
            //     const { name, email, password, phone, addresses, cartItems, orders } = signInData.handleSignIn
            //     setData(editData(name, email, password, phone))
            //     setData(editAddresses(addresses))
            //     setData(editCartItems(cartItems))
            //     setData(editOrders(orders))
            // } else if (signInData.handleSignIn.message) {
            //     setWrongData(true)
            //     setTimeout(()=> setWrongData(false), 3000)
            // }
         }}
      >
         {({ errors, touched }) => (
            <Form onKeyDown={handleKeyDown}>
               <FormContainer>
                  <h1>{t('Form.Sign In')}</h1>
                  <StyledField
                     name='email' type='email'
                     placeholder={t("Form.Email")} onKeyUp={handleKeyUp}
                  />
                  {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                  <StyledField
                     name='password' type="password"
                     placeholder={t("Form.Password")} innerRef={signInPasswordInput} onKeyUp={handleKeyUp}
                  />
                  {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
                  {wrongData && <ErrorText>{t('Form.Error')}</ErrorText>}
                  <FormButton ref={signInButton} disabled={disabled}>
                     {t('Form.Sign In')}
                  </FormButton>
                  <FormButton
                     onClick={signIn}
                     rev
                  >
                     <FlexContainer center>
                        <GoogleIcon />
                        Sign In with Google
                     </FlexContainer>
                  </FormButton>
                  <p>
                     <Link to='/forgetpassword'> Forget your password? </Link>
                  </p>
                  <p>
                     {t('Form.New User')}
                     <Link to='/signup'> <strong> {t('Form.Sign Up')} </strong> </Link>
                  </p>
               </FormContainer>
            </Form>
         )}
      </Formik>
   )
}

export default SignIn