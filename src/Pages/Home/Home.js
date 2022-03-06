import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import Slideshow from '../../Containers/Slideshow/Slideshow'
import Products from '../../Containers/Products/Products'
import Categories from '../../Containers/Categories/Categories'
import Features from '../../Containers/Features/Features'
import { PRODUCTS } from '../../Data/Queries'


const Home = () => {

   const { t } = useTranslation()

   const [products, setProducts] = useState([])

   useQuery(PRODUCTS, {
      onCompleted({ products }) {
         setProducts(products)
      }
   })

   return (
      <>
         <Slideshow />
         <Products
            title={t('Products.Popular')}
            num={4}
            products={products}
         />
         <Categories />
         <Features />
      </>
   )
}
export default Home