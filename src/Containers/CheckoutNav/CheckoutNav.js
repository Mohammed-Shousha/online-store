import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'
import FlexContainer from '../../Components/FlexContainer'
import { BackDiv, CheckoutStep, NumCircle } from '../../Components/CheckoutComponents'
import Logo from '../../Components/Logo'
import { STEPS } from '../../Data/Database'
import back from '../../Data/Icons/prev.svg'
import check from '../../Data/Icons/check.svg'

const CheckoutNav = ({ step, handleBack }) => (
   <>
      <Navbar>
         <BackDiv>
            <Link to={step === 1 ? '/cart' : location => location} onClick={handleBack}>
               <img src={back} alt='back' />
               <h3>{STEPS[step - 1].back}</h3>
            </Link>
         </BackDiv>
         <h3> Checkout </h3>
         <Logo />
      </Navbar>

      <FlexContainer around margin='1.5em 0'>
         {STEPS.map(s => (
            <CheckoutStep key={s.id} active={s.id === step}>
               {s.id < step ?
                  <img src={check} alt='check' />
                  :
                  <NumCircle active={s.id === step}> {s.id} </NumCircle>
               }
               {s.name}
            </CheckoutStep>
         ))}
      </FlexContainer>
   </>
)


export default CheckoutNav