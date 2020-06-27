import React from 'react';
import email from './email.svg';
import phone from './phone.svg';
import whatsapp from './whatsapp.svg';
import fb from './fb.svg';
import instagram from './instagram.svg';

const CONTACT = [
{
	link:'tel:112',
	img: phone
},
{
	link:'https://wa.me/201202973528',
	img: whatsapp
},
{
	link:'mailto:mohammedshousha2000@gmail.com',
	img: email
},
{
	link:'https://www.facebook.com/PhoniX.Store101',
	img: fb
},
{
	link:'https://www.instagram.com/phonix.store101/',
	img: instagram
},]

const Contact =() =>{
	return(
		<div>
			<h2>Contact Us</h2>
			{CONTACT.map(c =>{
				return(
					<a href={c.link} className='pa3'> 
						<img src={c.img} alt='contact' className='h3 w3 mh4 mv3'/>
					</a>
				)
			})}
		</div>

	)
}

export default Contact;