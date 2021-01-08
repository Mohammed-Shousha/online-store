import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryTitle, ProductDetailsContainer, AddToCartButton } from '../../Components/ProductPageComponent'
import { ProductsList } from '../../Data/Database'
import Alert from '../../Components/Alert'


const ProductPage = () =>{
    let { id } = useParams()

    const Product = ProductsList.filter(product => ''+product.id === id)[0]

    const { type, brand } = Product

    const [alert, setAlert] = useState(false)


    return(
        <>
            <CategoryTitle align='left'>{`${type.toUpperCase()} > ${brand.toUpperCase()}`}</CategoryTitle> 
            <ProductDetailsContainer>
                <img src={Product.photo} alt={`product ${id}`}/>
                <div>
                    <p>{brand.toUpperCase()}</p>
                    <h1>{Product.name}</h1>
                    <h2>{Product.description}</h2>
                    <h1>{Product.price} EGP</h1>
                </div>
            </ProductDetailsContainer>
            <AddToCartButton
                productId={Product.id}
                setAlert={setAlert}
            />
            {alert && <Alert setAlert={setAlert} />}
        </>
    )
}

export default ProductPage