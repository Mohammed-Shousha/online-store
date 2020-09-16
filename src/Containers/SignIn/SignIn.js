import React, { useContext, useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory, Link } from 'react-router-dom'
import { FormButton } from '../../Components/Buttons'
import ErrorText from '../../Components/ErrorText'
import { FormContainer, StyledField } from '../../Components/FormComponents'
import { DataContext } from '../../Data/DataContext'
import { editData, editAddresses, editCartItems, editOrders } from '../../Data/DataActions'


const SignIn = () => {
    const { setData, setIsSignedIn } = useContext(DataContext)

    const history = useHistory()

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
            e.preventDefault();
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
                    .required('Required')
                    .email('Invalid Email'),
                password: Yup.string()
                    .required('Required')
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
            {({ errors, touched }) => (
                <Form onKeyDown={handleKeyDown}>
                    <FormContainer>
                        <h1>Sign In</h1>
                        <StyledField
                            name='email' type='email'
                            placeholder="Email" onKeyUp={handleKeyUp}
                        />
                        {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
                        <StyledField
                            name='password' type="password"
                            placeholder="Password" innerRef={signInPasswordInput} onKeyUp={handleKeyUp}
                        />
                        {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
                        {wrongData && <ErrorText>Wrong Email or Password</ErrorText>}
                        <FormButton ref={signInButton}>
                            Sign In
                        </FormButton>
                        <p>
                            New User?
                            <Link to='/signup'> <strong> Sign Up </strong> </Link>
                        </p>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}

export default SignIn