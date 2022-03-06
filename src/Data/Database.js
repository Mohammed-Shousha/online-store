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

const img1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320312/Photos/1_md6vka.jpg'
const img2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320406/Photos/2_bpqfed.jpg'
const img3 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320310/Photos/3_sxxgsl.jpg'
const img4 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320295/Photos/4_qxsmzb.jpg'

const powerbank1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320415/Photos/powerbank-1_ymgwl1.jpg'
const powerbank2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320669/Photos/powerbank-3_zcx8le.jpg'

const beatsHeadset = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320347/Photos/headset-beats_axdg4t.jpg'
const sonyHeadset = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320378/Photos/headset-sony_ersvdc.jpg'
const jblHeadset = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320383/Photos/headset-jbl_c8fnwk.jpg'

const boseSpeaker1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320395/Photos/speaker-bose-1_n59v6r.jpg'
const boseSpeaker2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320398/Photos/speaker-bose-2_ijxmec.jpg'
const jblSpeaker = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320343/Photos/speaker-jbl_sbp8in.jpg'

const huaweiCover1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320302/Photos/cover-huawei-1_sncnk5.jpg'
const huaweiCover2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320336/Photos/cover-huawei-2_g9dbji.jpg'
const samsungCover1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320370/Photos/cover-samsung-1_rdyiad.jpg'
const samsungCover2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320384/Photos/cover-samsung-2_wraivo.jpg'
const appleCover1 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320350/Photos/cover-iphone-1_lxpw68.jpg'
const appleCover2 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320377/Photos/cover-iphone-2_m91fpd.jpg'
const appleCover3 = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320371/Photos/cover-iphone-3_q42aeu.jpg'

const appleSmartwatch = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320400/Photos/smartwatch-apple_q1klmq.jpg'
const miSmartwatch = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320381/Photos/smartwatch-mi_cakz0e.jpg'
const fitbitSmartwatch = 'https://res.cloudinary.com/dn8thrc9l/image/upload/v1646320390/Photos/smartwatch-fitbit_golbgj.jpg'

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
   type: 'power banks',
   brand: 'anker',
   name: 'Anker Power Bank',
   price: 300,
   photo: powerbank2,
   description: 'nothing'
}
]