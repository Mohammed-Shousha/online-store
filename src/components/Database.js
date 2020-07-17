import img1 from './Photos/1.jpg'
import img2 from './Photos/2.jpg'
import img3 from './Photos/3.jpg'
import img4 from './Photos/4.jpg'
import img5 from './Photos/5.jpg'
import img6 from './Photos/6.jpg'
import img7 from './Photos/7.jpg'

import money from './Icons/money.png'
import refund from './Icons/refund.png'
import shipping from './Icons/shipping.png'

import email from './Icons/email.svg'
import phone from './Icons/phone.svg'
import whatsapp from './Icons/whatsapp.svg'
import fb from './Icons/facebook.svg'
import instagram from './Icons/instagram.svg'

export const slideShowImages = [img1, img2, img3, img4, img5, img6, img7]

export const Addresses = [{
	id: 1,
	label:'home',
	Name: 'Mohammed Shousha',
	Address: 'Second Floor, Apartment 3 Mohamed El Adawy - Mansoura Qism 2 - Mansoura - Dakahlia Governorate',
	Phone: '01202973528'
},
{
	id:2,
	label:'work',
	Name:'Mohammed Shousha',
	Address: 'Second Floor, Apartment 3 Mohamed El Adawy - Mansoura Qism 2 - Mansoura - Dakahlia Governorate',
	Phone: '01202973528'
}]

export const STEPS=[{
	id:1,
	name:'Shipping Address'
},
{
	id:2,
	name:'Payment'
},
{
	id:3,
	name:'Order Placed'
}]

export const CATEGORIES = [{
	category:'HEADPHONES',
	items:['Jbl', 'Sony', 'Mi']
},
{
	category:'COVERS',
	items:['IPhone', 'Sony', 'Samsung']	
},
{
	category:'SMART WATCHES',
	items:['Jbl', 'Mi']
}]

export const CONTACT = [
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

export const FEATURES =[
{
	tag:'Free Shipping',
	img: shipping,
	color : '#005c91',
	description:'All orders of 200.00 EGP or more qualify for FREE Shipping.'
},
{
	tag:'Cash on Delivery',
	img: money,
	color : '#009124',
	description:'Pay for your order in cash at the moment the shipment is delivered to your doorstep.'
},
{
	tag:'Free Refund',
	img: refund,
	color:'#ffb726',
	description:'Changed your mind, you can return your product and get a full refund.'
}]


export const Pro = [{
	id: 0,
	photos: [img6, img3],
	price: 100,
	description: 'blah blah blah',
	productName : 'Headset'
},
{
	id: 1,
	photos:[img7, img2],
	price: 20000,
	description: 'blah blah blah',
	productName: 'IPhone11'
},
{
	id: 2,
	photos: [img3, img6],
	price: 120,
	description: 'blah blah blah',
	productName: 'Headset'
},
{
	id: 3,
	photos: [img2, img7],
	price: 21000,
	description: 'blah blah blah',
	productName: 'IPhone11'
}]