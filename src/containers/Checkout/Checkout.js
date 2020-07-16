import React, {useState} from 'react'
import './Checkout.css'
import CONav from '../../components/CONav/CONav'
import Footer from '../../components/Footer/Footer'


const Checkout = ()=>{

	const [step, setStep] = useState(1)

	const handleNext =()=>{
		setStep(step+1)
	}

	const handleBack =()=>{
		setStep(step-1)
	}

	return (
		<div>
			<CONav step={step} handleBack={handleBack}/>
			<button className='checkout-continue' onClick={handleNext}> Continue </button>
			<Footer/>
		</div>
	)
}

export default Checkout