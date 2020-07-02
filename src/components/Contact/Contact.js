import React from 'react';
import email from '../Icons/email.svg';
import phone from '../Icons/phone.svg';
import whatsapp from '../Icons/whatsapp.svg';
import fb from '../Icons/facebook.svg';
import instagram from '../Icons/instagram.svg';

const CONTACT = [
{
	id:1,
	link:'tel:112',
	img: phone
},
{
	id:2,
	link:'https://wa.me/201202973528',
	img: whatsapp
},
{
	id:3,
	link:'mailto:mohammedshousha2000@gmail.com',
	img: email
},
{
	id:4,
	link:'https://www.facebook.com/PhoniX.Store101',
	img: fb
},
{
	id:5,
	link:'https://www.instagram.com/phonix.store101/',
	img: instagram
},]

const Contact =() =>{
	return(
		<div>
			<h2>Contact Us</h2>
			{CONTACT.map(c =>{
				return(
					<a key={c.id} href={c.link} className='pa3'> 
						<img src={c.img} alt='contact' className='h3 w3 mh4 mv3'/>
					</a>
				)
			})}
		</div>

	)
}

export default Contact;