import React, {  useContext, useRef } from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import { useHistory, Link } from 'react-router-dom'
import { USERS } from '../Database'
import { DataContext } from '../../context/DataContext'
import { editData, editAddresses } from '../../context/DataActions'
import FormButton from '../StyledComponents/FormButton'
import FormContainer from '../StyledComponents/FormContainer'
import StyledField from '../StyledComponents/StyledField'


const SignIn = () => {
    const {setData, setIsSignedIn} = useContext(DataContext)

    const history = useHistory()

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
                signInEmail: '',
                signInPassword: '',
            }}
            validationSchema={Yup.object({
                signInEmail: Yup.string()
                    .required('Required')
                    .test('match', 'Wrong Email', (signInEmail) => (USERS.some(user => user.email === signInEmail))),
                signInPassword: Yup.string()
                    .required('Required')
                    .test('match', 'Wrong Password', (signInPassword) => (USERS.some(user => user.password === signInPassword))),
            })}
            onSubmit={(data) => {
                setIsSignedIn(true)
                history.push('/')
                const { name, email, password, phone, addresses } = USERS.find(user => user.email === data.signInEmail)
                setData(editData(name, email, password, phone))
                setData(editAddresses(addresses))
            }}
        >
            {({ errors, touched }) => (
                <Form onKeyDown={handleKeyDown}>
                    <FormContainer>
                        <h1 className='header'>Sign In</h1>
                        <StyledField
                            name='signInEmail' type='email'
                            placeholder="Email" onKeyUp={handleKeyUp}
                        />
                        {touched.signInEmail && errors.signInEmail && <p className='error'>{errors.signInEmail}</p>}
                        <StyledField
                            name='signInPassword' type="password"
                            placeholder="Password" innerRef={signInPasswordInput} onKeyUp={handleKeyUp}
                        />
                        {touched.signInPassword && errors.signInPassword && <p className='error'>{errors.signInPassword}</p>}
                        <FormButton ref={signInButton}>
                            Sign In
                        </FormButton>
                        <p>
                            New User?
                            <Link to='/signup' className='link'> Sign Up </Link>
                        </p>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}
 
export default SignIn