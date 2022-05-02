import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import Products from '../../Containers/Products/Products'
import { LinkButton } from '../../Components/Buttons'
import Icon from '../../Components/Icon'
import Loading from '../../Components/Loading'
import { PRODUCTS_BY_NAME } from '../../Data/Queries'
import box from '../../Data/Icons/box.svg'


const SearchResults = () => {

   const { t } = useTranslation()

   const [products, setProducts] = useState([])

   let query = new URLSearchParams(useLocation().search)
   let name = query.get('q')

   const { loading } = useQuery(PRODUCTS_BY_NAME, {
      variables: { name: name.trim() },
      onCompleted({ productsByName }) {
         setProducts(productsByName)
      }
   })


   return (
      loading ? <Loading />
         :
         <>
            {products.length ?
               <Products
                  title={t("Search Results.title") + ' ' + name}
                  products={products}
               />
               :
               <div style={{ margin: "10vh 0vw" }}>
                  <Icon src={box} alt='box' />
                  <h1> We Couldn't Find What You Were Looking For </h1>
                  <p> Keep calm and search again. We have SO many other products that you will like! </p>
                  <LinkButton to='/'>
                     Continue Shopping
                  </LinkButton>
               </div>
            }
         </>
   )
}

export default SearchResults