import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'
import DropDown from '../../Components/DropDown'
import { CATEGORIES } from '../../Data/Database'


const SNav = () => {

   const { t } = useTranslation()


   return (
      <Navbar small>
         {CATEGORIES.map(({ name, category, items }, i) => (
            <DropDown key={i}>
               <Link to={`/categories/${category.toLowerCase()}`}>
                  <p> {t(name).toUpperCase()} </p>
               </Link>
               {items.length > 1 &&
                  <div>
                     {items.map(({ name, img }) => (
                        <Link to={`/categories/${category.toLowerCase()}-${name.toLowerCase()}`} key={name}>
                           <img src={img} alt={img} />
                        </Link>
                     ))}
                  </div>
               }
            </DropDown>
         ))}
      </Navbar>
   )
}

export default SNav