import img1 from './Photos/1.jpg'
import img2 from './Photos/2.jpg'
import img3 from './Photos/3.jpg'
import img4 from './Photos/4.jpg'
import img5 from './Photos/5.jpg'
import img6 from './Photos/6.jpg'
import img7 from './Photos/7.jpg'

import beatsHeadset1 from './Photos/headset-beats-1.jpg'
import jblHeadset1 from './Photos/headset-jbl-1.jpg'
import jblHeadset2 from './Photos/headset-jbl-2.jpg'
import sonyHeadset1 from './Photos/headset-sony-1.jpg'
import sonyHeadset2 from './Photos/headset-sony-2.jpg'

import jblSpeaker1 from './Photos/speaker-jbl-1.jpg'
import jblSpeaker2 from './Photos/speaker-jbl-2.jpg'
import boseSpeaker1 from './Photos/speaker-bose-1.jpg'
import boseSpeaker2 from './Photos/speaker-bose-2.jpg'

import appleCover1 from './Photos/cover-iphone-1.jpg'
import appleCover2 from './Photos/cover-iphone-2.jpg'
import appleCover3 from './Photos/cover-iphone-3.jpg'
import appleCover4 from './Photos/cover-iphone-4.jpg'
import samsungCover1 from './Photos/cover-samsung-1.jpg'
import samsungCover2 from './Photos/cover-samsung-2.jpg'
import huaweiCover1 from './Photos/cover-huawei-1.jpg'
import huaweiCover2 from './Photos/cover-huawei-2.jpg'

import appleSmartwatch1 from './Photos/smartwatch-apple-1.jpg'
import appleSmartwatch2 from './Photos/smartwatch-apple-2.jpg'
import fitbitSmartwatch1 from './Photos/smartwatch-fitbit-1.jpg'
import fitbitSmartwatch2 from './Photos/smartwatch-fitbit-2.jpg'
import miSmartwatch1 from './Photos/smartwatch-mi-1.jpg'

import powerbank1 from './Photos/powerbank-1.jpg'
import powerbank2 from './Photos/powerbank-2.jpg'

import money from './Icons/money.svg'
import refund from './Icons/refund.svg'
import shipping from './Icons/shipping.svg'

import email from './Icons/email.svg'
import phone from './Icons/phone.svg'
import whatsapp from './Icons/whatsapp.svg'
import fb from './Icons/facebook.svg'
import instagram from './Icons/instagram.svg'

export const slideShowImages = [img1, img2, img3, img4, img5, img6, img7]

export const searchSuggestions =[
{
	name: 'Sony Headset',
	category:'Headphones',
	brand:'Sony',
},
{
	name: 'JBL Headset',
	category:'Headphones',
	brand:'Jbl',
},
{
	name: 'Beats Headset',
	category:'Headphones',
	brand:'Beats',
},
]

export const properties = {
  duration: 3500,
  transitionDuration: 550,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
}

export const particles = {
  particles: {
    number:{
      value:300,
      density:{
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#003e45"
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#003e45",
      opacity: 0.4,
      width: 1
    },              
  }
}

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
	category:'Headphones',
	items:['Beats', 'JBL', 'Sony']
},
{
	category:'Speakers',
	items:['JBL', 'Bose']
},
{
	category:'Covers',
	items:['Apple', 'Samsung', 'Huawei']	
},
{
	category:'Smart Watches',
	items:['Apple', 'Fitbit', 'Mi']
},
{
	category:'Power Banks',
	items:[]
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


export const ProductsList = [{
	id: 0,
	type:'headphones',
	brand:'beats',
	name : 'Beats Headset',
	price: 350,
	photos: [img6, beatsHeadset1],
	description: 'blah blah blah',
},
{
	id: 1,
	type:'covers',
	brand:'apple',
	name: 'IPhone11 Cover',
	price: 100,
	photos:[img2],
	description: 'blah blah blah',
},
{
	id: 2,
	type:'speakers',
	brand:'bose',
	name: 'Bose Speaker',
	price: 800,
	photos: [boseSpeaker2, boseSpeaker1],
	description: 'blah blah blah',
},
{
	id: 3,
	type:'smart watches',
	brand:'apple',
	name: 'Apple Watch',
	price: 5000,
	photos: [appleSmartwatch1, appleSmartwatch2],
	description: 'blah blah blah',
},
{
	id: 4,
	type:'covers',
	brand:'samsung',
	name: 'Samsung Cover',
	price: 120,
	photos: [samsungCover2, samsungCover1],
	description: 'blah blah blah',
},
{
	id: 5,
	type:'headphones',
	brand:'sony',
	name: 'Sony Headset',
	price: 300,
	photos: [sonyHeadset1, sonyHeadset2],
	description: 'blah blah blah',
},
{
	id: 6,
	type:'covers',
	brand:'apple',
	name: 'IPhone X Cover',
	price: 200,
	photos: [appleCover3, appleCover4],
	description: 'blah blah blah',
},
{
	id: 7,
	type:'power banks',
	name: 'Power Bank',
	price: 400,
	photos: [powerbank1],
	description: 'blah blah blah',
},
{
	id: 8,
	type:'smart watches',
	brand:'fitbit',
	name: 'Fitbit Watch',
	price: 4000,
	photos: [fitbitSmartwatch1, fitbitSmartwatch2],
	description: 'blah blah blah',
},
{
	id: 9,
	type:'headphones',
	brand:'jbl',
	name: 'Jbl Headset',
	price: 300,
	photos: [jblHeadset1, jblHeadset2],
	description: 'blah blah blah',
},
{
	id: 10,
	type:'covers',
	brand:'huawei',
	name: 'Huawei Cover',
	price: 100,
	photos: [huaweiCover1, huaweiCover2],
	description: 'blah blah blah',
},
{
	id: 11,
	type:'speakers',
	brand:'jbl',
	name: 'Jbl Speaker',
	price: 700,
	photos: [jblSpeaker1, jblSpeaker2],
	description: 'blah blah blah',
},
{
	id: 12,
	type:'covers',
	brand:'apple',
	name: 'IPhone11 Cover',
	price: 200,
	photos: [appleCover1, appleCover2],
	description: 'blah blah blah',
},
{
	id: 13,
	type:'speakers',
	brand:'bose',
	name: 'Bose Speaker',
	price: 800,
	photos: [boseSpeaker1, boseSpeaker2],
	description: 'blah blah blah',
},
{
	id: 14,
	type:'covers',
	brand:'huawei',
	name: 'Huawei Cover',
	price: 100,
	photos: [huaweiCover2, huaweiCover1],
	description: 'blah blah blah',
},
{
	id: 15,
	type:'covers',
	brand:'samsung',
	name: 'Samsung Cover',
	price: 120,
	photos: [samsungCover1, samsungCover2],
	description: 'blah blah blah',
},
{
	id: 16,
	type:'smart watches',
	brand:'mi',
	name: 'Mi Watch',
	price: 1000,
	photos: [miSmartwatch1],
	description: 'blah blah blah',
},
{
	id: 17,
	type:'power banks',
	name: 'Solar Power Bank',
	price: 800,
	photos: [powerbank2],
	description: 'blah blah blah',
},]