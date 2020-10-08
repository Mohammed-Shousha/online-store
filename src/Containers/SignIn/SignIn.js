import React, { useContext, useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FormButton } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import { DataContext } from '../../Data/DataContext'
import { editData, editAddresses, editCartItems, editOrders } from '../../Data/DataActions'


const SignIn = () => {
    const { setData, setIsSignedIn } = useContext(DataContext)

    const history = useHistory()

    const { t } = useTranslation()

    const [wrongData, setWrongData] = useState(false)
    const signInPasswordInput = useRef(null)
    const signInButton = useRef(null)

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
            onSubmit={async ({ email, password }) => {
                const response = await fetch('http://localhost:8888/signin', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
                const user = await response.json()
                if (user._id) {
                    history.push('/')
                    setIsSignedIn(true)
                    const { name, email, password, phone, addresses, cartItems, orders } = user
                    setData(editData(name, email, password, phone))
                    setData(editAddresses(addresses))
                    setData(editCartItems(cartItems))
                    setData(editOrders(orders))
                } else {
                    setWrongData(true)
                    setTimeout(()=> setWrongData(false), 3000)
                }
            }}
        >
            {({ errors, touched, isSubmitting }) => (
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
                        <FormButton ref={signInButton} disabled={isSubmitting}>
                            {t('Form.Sign In')}
                        </FormButton>
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