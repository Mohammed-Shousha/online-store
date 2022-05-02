import { gql } from '@apollo/client'

export const USER_BY_ID = gql`
   query UserById($id: ID!){
      userById(id: $id){
         name
         email
      }
   }
`

export const USER_BY_TOKEN = gql`
   query UserByToken{
      userByToken{
         _id
         name
         email
         phone
         confirmed
         password{
            length
         }
         addresses{
            address
            name
            phone
         }
         cartItems{
            productId
            qty
         }
         orders{
            id
            time
            order{
               productId
               qty
            }
         }
      }
   }
`

export const PRODUCTS = gql`
   query products {
      products {
         _id
         name
         type
         brand
         description
         price
         photo
      }
   }
`

export const PRODUCTS_BY_TYPE = gql`
   query productsByType($type: String!){
      productsByType(type: $type){
         _id
         name
         type
         brand
         price
         photo
         description
      }
   }
`

export const PRODUCTS_BY_BRAND = gql`
   query productsByBrand($type: String!, $brand: String!){
      productsByBrand(type: $type, brand: $brand){
         _id
         name
         type
         brand
         price
         photo
         description
      }
   }
`

export const PRODUCT_BY_ID = gql`
   query productById($id: ID!){
      productById(id: $id){
         _id
         name
         type
         brand
         price
         photo
         description
      }
   }
`

export const PRODUCTS_BY_NAME = gql`
   query productsByName($name: String!){
      productsByName(name: $name){
         _id
         name
         type
         brand
         price
         photo
         description
      }
   }
`