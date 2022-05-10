import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { SlideContainer, SlidePhoto } from '../../Components/SlideshowComponents'
import { slideShowImages } from '../../Data/Database'
import prev from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'


const Slideshow = () => {

   const carouselRef = useRef(null)
   const { i18n } = useTranslation()

   const handleOnDragStart = (e) => e.preventDefault()

   const nextPhoto = () => {
      if (i18n.language === 'en') {
         carouselRef.current.slideNext()
      } else {
         carouselRef.current.slidePrev()
      }
   }

   const prevPhoto = () => {
      if (i18n.language === 'en') {
         carouselRef.current.slidePrev()
      } else {
         carouselRef.current.slideNext()
      }
   }

   const photos = slideShowImages.map(img => (
      <SlidePhoto src={img} alt={img} onDragStart={handleOnDragStart} />
   ))

   return (
      <SlideContainer>
         <img src={i18n.language === 'en' ? prev : next} alt='arrow' onClick={prevPhoto} />
         <AliceCarousel
            items={photos}
            ref={carouselRef}
            disableButtonsControls={true}
            disableDotsControls={true}
            autoPlay={true}
            autoPlayInterval={2500}
            autoPlayDirection={i18n.language === 'en' ? 'ltr' : 'rtl'}
         />
         <img src={i18n.language === 'en' ? next : prev} alt='arrow' onClick={nextPhoto} />
      </SlideContainer>
   )
}

export default Slideshow