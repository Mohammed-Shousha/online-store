import img1 from './Photos/1.jpg'
import img2 from './Photos/2.jpg'
import img3 from './Photos/3.jpg'
import img4 from './Photos/4.jpg'

import beatsHeadset from './Photos/headset-beats.jpg'
import jblHeadset from './Photos/headset-jbl.jpg'
import sonyHeadset from './Photos/headset-sony.jpg'

import jblSpeaker from './Photos/speaker-jbl.jpg'
import boseSpeaker1 from './Photos/speaker-bose-1.jpg'
import boseSpeaker2 from './Photos/speaker-bose-2.jpg'

import appleCover1 from './Photos/cover-iphone-1.jpg'
import appleCover2 from './Photos/cover-iphone-2.jpg'
import appleCover3 from './Photos/cover-iphone-3.jpg'
import samsungCover1 from './Photos/cover-samsung-1.jpg'
import samsungCover2 from './Photos/cover-samsung-2.jpg'
import huaweiCover1 from './Photos/cover-huawei-1.jpg'
import huaweiCover2 from './Photos/cover-huawei-2.jpg'

import appleSmartwatch from './Photos/smartwatch-apple.jpg'
import fitbitSmartwatch from './Photos/smartwatch-fitbit.jpg'
import miSmartwatch from './Photos/smartwatch-mi.jpg'

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

import jbl from './Icons/jbl.svg'
import beats from './Icons/beats.svg'
import sony from './Icons/sony.svg'
import bose from './Icons/bose.svg'
import apple from './Icons/apple.svg'
import samsung from './Icons/samsung.svg'
import huawei from './Icons/huawei.svg'
import xiaomi from './Icons/xiaomi.svg'
import fitbit from './Icons/fitbit.svg'


export const slideShowImages = [img1, appleCover1, img2, img3, beatsHeadset, img4]


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
	name:'Shipping',
	back:'Cart'
},
{
	id:2,
	name:'Payment',
	back:'Shipping'
},
{
	id:3,
	name:'Done',
	back:'Payment'
}]

export const CATEGORIES = [{
   category:'Headphones',
	name:'Categories.Headphones',
	items: [{
		name: 'Beats',
		img: beats
	},
	{
		name: 'Jbl',
		img: jbl
	},
	{
		name: 'Sony',
		img: sony
	}
	]
},
{
   category: "Speakers",
   name:'Categories.Speakers',
	items: [{
		name: 'Jbl',
		img: jbl
	},
	{
		name: 'Bose',
		img: bose
	}]
},
{
   category:"Covers",
   name:'Categories.Covers',
	items: [{
		name: 'Apple',
		img: apple
	},
	{
		name: 'Samsung',
		img: samsung
	},
	{
		name: 'Huawei',
		img: huawei
	}]	
},
{
   category: 'Smart Watches',
   name:'Categories.Smart Watches',
	items: [{
		name: 'Apple',
		img: apple
	},
	{
		name: 'Fitbit',
		img: fitbit
	},
	{
		name: 'Xiaomi',
		img: xiaomi
	}]
},
{
   category: 'Power Banks',
   name:'Categories.Power Banks',
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
	tag:'Features.Free Shipping',
	img: shipping,
	color : '#005c91',
	description:'Features.Shipping Description'
},
{
	tag:'Features.Cash on Delivery',
	img: money,
	color : '#009124',
   description:'Features.Cash Description'
},
{
	tag:'Features.Full Refund',
	img: refund,
	color:'#ffb726',
   description:'Features.Refund Description'
}]


export const ProductsList = [{
	id: 0,
	type:'headphones',
	brand:'beats',
	name : 'Beats Headset',
	price: 350,
	photo: beatsHeadset,
	description: 'blah blah blah',
},
{
	id: 1,
	type:'covers',
	brand:'apple',
	name: 'IPhone11 Cover',
	price: 100,
	photo: appleCover1,
	description: 'blah blah blah',
},
{
	id: 2,
	type:'speakers',
	brand:'bose',
	name: 'Bose Speaker',
	price: 800,
	photo: boseSpeaker2,
	description: 'blah blah blah',
},
{
	id: 3,
	type:'smart watches',
	brand:'apple',
	name: 'Apple Watch',
	price: 5000,
	photo: appleSmartwatch,
	description: 'blah blah blah',
},
{
	id: 4,
	type:'covers',
	brand:'samsung',
	name: 'Samsung Cover',
	price: 120,
	photo: samsungCover2,
	description: 'blah blah blah',
},
{
	id: 5,
	type:'headphones',
	brand:'sony',
	name: 'Sony Headset',
	price: 300,
	photo: sonyHeadset,
	description: 'blah blah blah',
},
{
	id: 6,
	type:'covers',
	brand:'apple',
	name: 'IPhone X Cover',
	price: 200,
	photo: appleCover3,
	description: 'blah blah blah',
},
{
	id: 7,
	type:'power banks',
	name: 'Power Bank',
	price: 400,
	photo: powerbank1,
	description: 'blah blah blah',
},
{
	id: 8,
	type:'smart watches',
	brand:'fitbit',
	name: 'Fitbit Watch',
	price: 4000,
	photo: fitbitSmartwatch,
	description: 'blah blah blah',
},
{
	id: 9,
	type:'headphones',
	brand:'jbl',
	name: 'Jbl Headset',
	price: 300,
	photo: jblHeadset,
	description: 'blah blah blah',
},
{
	id: 10,
	type:'covers',
	brand:'huawei',
	name: 'Huawei Cover',
	price: 100,
	photo: huaweiCover1,
	description: 'blah blah blah',
},
{
	id: 11,
	type:'speakers',
	brand:'jbl',
	name: 'Jbl Speaker',
	price: 700,
	photo: jblSpeaker,
	description: 'blah blah blah',
},
{
	id: 12,
	type:'covers',
	brand:'apple',
	name: 'IPhone11 Cover',
	price: 200,
	photo: appleCover2,
	description: 'blah blah blah',
},
{
	id: 13,
	type:'speakers',
	brand:'bose',
	name: 'Bose Speaker',
	price: 800,
	photo: boseSpeaker1,
	description: 'blah blah blah',
},
{
	id: 14,
	type:'covers',
	brand:'huawei',
	name: 'Huawei Cover',
	price: 100,
	photo: huaweiCover2,
	description: 'blah blah blah',
},
{
	id: 15,
	type:'covers',
	brand:'samsung',
	name: 'Samsung Cover',
	price: 120,
	photo: samsungCover1,
	description: 'blah blah blah',
},
{
	id: 16,
	type:'smart watches',
	brand:'xiaomi',
	name: 'Xiaomi Watch',
	price: 1000,
	photo: miSmartwatch,
	description: 'blah blah blah',
},
{
	id: 17,
	type:'power banks',
	name: 'Solar Power Bank',
	price: 800,
	photo: powerbank2,
	description: 'blah blah blah',
},
]