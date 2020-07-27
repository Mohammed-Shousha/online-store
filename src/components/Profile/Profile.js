import React, {Fragment} from 'react'
import './Profile.css'
import Footer from '../Footer/Footer'


const Profile =({signInData, setSignInData, signUpData, setSignUpData})=> (
	<Fragment>
	<h1 className='profile-title'> Profile </h1>
	<div className='profile-container'>
		<h3 className='tl'> General Information </h3>
		<div className='flex justify-around'>
			<div className='profile-general'>
				<p> Name </p>
				<textarea defaultValue={signUpData.name} rows={1} />
			</div>
			<div className='profile-general'>
				<p> Phone </p>
				<textarea defaultValue={signUpData.phone} rows={1}/>
			</div>
		</div>
		<div className='flex justify-end'>
			<button className='profile-save-bt'> SAVE </button>
		</div>
	</div>
	<div className='profile-container'>
		<h3 className='tl'> Security </h3>
		<div className='flex justify-around'>
			<div className='profile-general'>
				<p> Email </p>
				<input type='email' value={signUpData.email || signInData.signInEmail} readOnly/>
				<p className='i'> You can't change your email </p>
			</div>
			<div className='profile-general'>
				<p> Password </p>
				<input type='password' value={signUpData.password || signInData.signInPassword} readOnly/>	
			</div>
		</div>
		<div className='flex justify-end'>
			<button className='profile-save-bt'> CHANGE PASSWORD </button>
		</div>
	</div>
	<Footer/>
	</Fragment>

)

export default Profile