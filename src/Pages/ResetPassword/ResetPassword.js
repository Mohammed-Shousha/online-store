import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useParams } from "react-router-dom"
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import ErrorText from '../../Components/ErrorText'
import { FormButton, LinkButton } from '../../Components/Buttons'
import { HANDLE_RESET_PASSWORD, HANDLE_VERIFY_TOKEN } from '../../Data/Mutations'
import { passwordRegex } from '../../Data/Constants'


const ResetPassword = () => {

   let { token } = useParams()

   const [done, setDone] = useState(false)
   const [expired, setExpired] = useState(false)
   const [disabled, setDisabled] = useState(false)
   const [error, setError] = useState(false)

   const [handleResetPassword] = useMutation(HANDLE_RESET_PASSWORD, {
      onCompleted({ handleResetPassword }) { // 1 "Success" || 0 "Failed"
         if (handleResetPassword) {
            setDone(true)
         } else {
            setDisabled(false)
            setError(true)
            setTimeout(() => setError(false), 3000)
         }
      }
   })

   const [handleVerifyToken] = useMutation(HANDLE_VERIFY_TOKEN, {
      onCompleted({ handleVerifyToken }) { // 1 "Success" || 0 "Failed"
         if (!handleVerifyToken) {
            setExpired(true)
         }
      }
   })

   useEffect(() => {
      handleVerifyToken({ variables: { token } })
   })


   return (
      expired ?
         <h1>This link has been expired</h1>
         : done ?
            <>
               <h1>Your Password has been Successully Changed</h1>
               <LinkButton to='/signin'>
                  Sign In
               </LinkButton>
            </>
            :
            <Formik
               initialValues={{
                  password: '',
                  confirmPassword: ''
               }}
               validationSchema={Yup.object({
                  password: Yup.string()
                     .required('Required')
                     .matches(passwordRegex, 'Password must contain at least one letter, at least one number, and be longer than 8 charaters'),
                  confirmPassword: Yup.string()
                     .required('Required')
                     .oneOf([Yup.ref('password'), null], 'Passwords must match')
               })}
               onSubmit={({ password }) => {
                  setDisabled(true)
                  handleResetPassword({ variables: { token, password } })
               }}
            >
               {({ errors, touched }) => (
                  <Form>
                     <FormContainer>
                        <h1>Reset Password</h1>
                        <StyledField
                           name='password' type='password'
                           placeholder='Password'
                        />
                        {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
                        <StyledField
                           name='confirmPassword' type='password'
                           placeholder='Confirm Password'
                        />
                        {touched.confirmPassword && errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
                        {error && <ErrorText>An Error occurred while reseting your password</ErrorText>}
                        <FormButton disabled={disabled}>
                           Reset Password
                        </FormButton>
                     </FormContainer>
                  </Form>
               )}
            </Formik>
   )
}

export default ResetPassword