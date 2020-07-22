import React, {Fragment, useState} from 'react'
import './Checkout.css'
import CONav from '../../components/CONav/CONav'
import Shipping from '../../components/Shipping/Shipping'
import Footer from '../../components/Footer/Footer'


const Checkout = ({signUpData,setSignUpData, marker, setMarker})=>{

	const [step, setStep] = useState(1)

	const handleNext =()=>{
		setStep(step+1)
	}

	const handleBack =()=>{
		setStep(step-1)
	}

	const [newAddress, setNewAddress]= useState(false)

	return (
		<Fragment>
			<CONav step={step} handleBack={handleBack}/>
			{step===1? 
				<Shipping 
				 signUpData={signUpData}
				 setSignUpData={setSignUpData}
				 marker={marker}
			     setMarker={setMarker}
			     newAddress={newAddress}
			     setNewAddress={setNewAddress}
				/>
			:step===2? 
				<h1> Hi </h1>
			:
				<h1> There </h1>
			}

			<button 
			 className={newAddress? 'hide checkout-continue':'checkout-continue'}
			 onClick={handleNext}
			>
				Continue 
			</button>
			<Footer/>
		</Fragment>
	)
}

export default Checkout