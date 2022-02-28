import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Square, Arrow, CategoriesContainer } from '../../Components/CategoriesComponents'
import FlexContainer from '../../Components/FlexContainer'
import { CATEGORIES as CAT } from '../../Data/Database'
import prev from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'


const Categories = () => {

   const CATEGORIES = CAT.filter(c => c.items.length > 0)

   const [index, setIndex] = useState(0)
   const [state, setState] = useState(CATEGORIES[index])
   const { name, category, items } = state
   const len = CATEGORIES.length

   const nextCategory = () => {
      setIndex(index + 1)
      setState(CATEGORIES[(index + 1) % len])
   }

   const prevCategory = () => {
      setIndex(index + len - 1)
      setState(CATEGORIES[(index + len - 1) % len])
   }

   const { i18n, t } = useTranslation()


   return (
      <CategoriesContainer>
         <Link to={`/categories/${category.toLowerCase()}`}>
            <h1>{t(name).toUpperCase()}</h1>
         </Link>
         <FlexContainer around>
            <Arrow alt='prev' src={i18n.language === 'en' ? prev : next} onClick={prevCategory} />
            <FlexContainer responsive>
               {items.map(({ name, img }) =>
                  <Link to={`/categories/${category.toLowerCase()}-${name.toLowerCase()}`} key={name}>
                     <Square data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='200'>
                        <img src={img} alt={img} />
                     </Square>
                  </Link>
               )}
            </FlexContainer>
            <Arrow alt='next' src={i18n.language === 'en' ? next : prev} onClick={nextCategory} />
         </FlexContainer>
      </CategoriesContainer>
   )
}

export default Categories