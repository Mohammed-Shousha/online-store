import React from 'react'
import FlexContainer from '../../Components/FlexContainer'
import { Circle } from '../../Components/FeturesComponents'
import { FEATURES } from '../../Data/Database'
import { useTranslation } from 'react-i18next'


const Features = () => {

   const { t } = useTranslation() 

   return(
      <FlexContainer around responsive margin='5em auto'>
         {FEATURES.map(feature => (
            <Circle key={feature.tag} color={feature.color} data-aos='flip-up' data-aos-duration='1000' data-aos-delay='300'>
               <h1> {t(feature.tag)} </h1>
               <p> {t(feature.description)} </p>
               <img src={feature.img} alt='feature' />
            </Circle>
         ))}
      </FlexContainer>
   )
}

export default Features