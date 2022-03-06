import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CategoryTitle, ProductDetailsContainer, AddToCartButton } from '../../Components/ProductPageComponent'
import Alert from '../../Components/Alert'
import Loading from '../../Components/Loading'
import { PRODUCT_BY_ID } from '../../Data/Queries'


const ProductPage = () => {

   let { id } = useParams()

   const [product, setProduct] = useState('')

   const { loading } = useQuery(PRODUCT_BY_ID, {
      variables: { id },
      onCompleted({ productById }) {
         setProduct(productById)
      }
   })

   const { type, brand } = product

   let productBrand = ''
   let productType = ''

   if (type) {
      productType = type
   }

   if (brand) {
      productBrand = brand
   } else {
      productBrand = 'generic'
   }

   const [alert, setAlert] = useState(false)


   return (
      loading ?
         <Loading />
         :
         <>
            <CategoryTitle align='left'>{`${productType.toUpperCase()} > ${productBrand.toUpperCase()}`}</CategoryTitle>
            <ProductDetailsContainer>
               <img src={product.photo} alt={`product ${id}`} />
               <div>
                  <p>{productBrand.toUpperCase()}</p>
                  <h1>{product.name}</h1>
                  <h2>{product.description}</h2>
                  <h1>{product.price} EGP</h1>
               </div>
            </ProductDetailsContainer>
            <AddToCartButton
               productId={product._id}
               setAlert={setAlert}
            />
            {alert && <Alert setAlert={setAlert} />}
         </>
   )
}

export default ProductPage