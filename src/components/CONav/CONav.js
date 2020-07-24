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
						<h3 className='checkout-text'>{Back[step-1] }</h3>
					</div>
				</Link>
				<h3 className='checkout-text'> Checkout </h3>
				<Link to='/'>
					<img src={logo} alt='logo' className='checkout-logo'/>
				</Link>
			</nav>

			<nav className='flex justify-around mv3'>
				{STEPS.map(s=>(
					<div key={s.id} className={`checkout-step ${s.id === step? 'active-step': ''}`}>
						{s.id < step?
						<img src={check} className='done' alt='check'/> 
						:<div className={`num-circle ${s.id===step? 'active-circle':''}`}>
							{s.id}
						</div>}
						{s.name}
					</div>
				))}
			</nav>
		</Fragment>
	)
}

export default CONav