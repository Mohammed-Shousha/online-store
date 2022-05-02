import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import ErrorText from '../../Components/ErrorText'
import { FormButton } from '../../Components/Buttons'
import { HANDLE_FORGET_PASSWORD } from '../../Data/Mutations'


const ForgetPassword = () => {

   const [error, setError] = useState(null)
   const [done, setDone] = useState(false)
   const [email, setEmail] = useState(null)
   const [disabled, setDisabled] = useState(false)

   const [handleForgetPassword] = useMutation(HANDLE_FORGET_PASSWORD, {
      onCompleted({ handleForgetPassword }) {
         const { result, message } = handleForgetPassword
         if (result) { // 1 "Success" || 0 "Failed"
            setDone(true)
         } else {
            setDisabled(false)
            setError(message)
            setTimeout(() => setError(null), 3000)
         }
      }
   })

   const { t } = useTranslation()

   return (
      done ?
         <>
            <h1>An Email has been sent to {email}</h1>
            <h1>with instruction to reset your password</h1>
         </>
         :
         <Formik
            initialValues={{
               email: '',
            }}
            validationSchema={Yup.object({
               email: Yup.string()
                  .email(t('Form.EmailErr'))
                  .required(t('Form.Required'))
            })}
            onSubmit={({ email }) => {
               setDisabled(true)
               handleForgetPassword({ variables: { email } })
               setEmail(email)
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <FormContainer>
                     <h1>Forget Password</h1>
                     <h3>Please enter your email</h3>
                     <StyledField
                        name='email' type='email'
                        placeholder={t("Form.Email")}
                     />
                     {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                     {error && <ErrorText> {error} </ErrorText>}
                     <FormButton disabled={disabled}>
                        Continue
                     </FormButton>
                  </FormContainer>
               </Form>
            )}
         </Formik>
   )
}

export default ForgetPassword