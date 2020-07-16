import React , {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './CONav.css'
import back from '../Icons/prev.svg'
import logo from '../Icons/store.png'
import check from '../Icons/check.svg'
import {STEPS} from '../Database'

const Back = ['Cart', 'Shipping', 'Payment']


const CONav = ({step, handleBack})=>{
	return(
		<Fragment>
			<nav className='checkout-nav'>
				<Link to={step===1 ?'/cart': location=> location} onClick={handleBack}>
					<div className='flex'>
						<img src={back} alt='back' className='back-arrow'/>
						<h2 className='checkout-text'>{Back[step-1] }</h2>
					</div>
				</Link>
				<h2 className='checkout-text'> Checkout </h2>
				<Link to='/'>
					<img src={logo} alt='logo' className='checkout-logo'/>
				</Link>
			</nav>

			<nav className='flex justify-around'>
				{STEPS.map(s=>{
					return(
						<div key={s.id} className={s.id === step?'checkout-step active-step': 'checkout-step'}>
							{s.id < step?
							<img src={check} className='done' alt='check'/> 
							:<div className={s.id===step?'num-circle active-circle':'num-circle'}>
								{s.id}
							</div>}
							{s.name}
						</div>
					)
				})}
			</nav>
		</Fragment>
	)
}

export default CONav