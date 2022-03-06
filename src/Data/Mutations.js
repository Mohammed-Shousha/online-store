import { gql } from '@apollo/client'

export const HANDLE_RESEND_EMAIL = gql`
   mutation HandleResendEmail($email: String!){
      handleResendEmail(email: $email)
   }
`

export const HANDLE_ADDING_ITEMS = gql`
   mutation HandleAddingItems($email: String!, $productId: ID!){
      handleAddingItems(email: $email, productId: $productId){
         result
         cartItems{
            productId
            qty
         }
      }
   }
`

export const HANDLE_REMOVING_ITEMS = gql`
   mutation HandleRemovingItems($email: String!, $productId: ID!){
      handleRemovingItems(email: $email, productId: $productId){
         result
         cartItems{
            productId
            qty
         }
      }
   }
`

export const HANDLE_SIGN_IN = gql`
   mutation HandleSignIn($email: String!, $password: String!){
      handleSignIn(email: $email, password: $password){
         ... on User {
            _id
            name
            email
            password{
               length
            }
            phone
            confirmed
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
         ... on Error {
            message
         }
      }
   }
`

export const HANDLE_GOOGLE_SIGN_IN = gql`
   mutation HandleGoogleSignIn($email: String!){
      handleGoogleSignIn(email: $email){
         ... on User {
            _id
            name
            email
            password{
               length
            }
            phone
            confirmed
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
         ... on Error {
            message
         }
      }
   }
`

export const HANDLE_SIGN_UP = gql`
   mutation HandleSignUp($name: String! ,$email: String!, $password: String!, $phone: String!, $address: String ){
      handleSignUp(name: $name, email: $email, password: $password, phone: $phone, address: $address){
         ... on Result {
            user{
               _id
               name
               email
               password{
                  length
               }
               phone
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
            emailSent
         }
         ... on Error {
            message
         }
      }
   }
`

export const HANDLE_CLEAR_CART = gql`
   mutation HandleClearCart($email: String!){
      handleClearCart(email: $email){
         result
         cartItems{
            productId
            qty
         }
      }
   }
`

export const HANDLE_CONFIRMATION = gql`
   mutation HandleConfirmation($id: ID!){
      handleConfirmation(id: $id)
   }
`

export const HANDLE_ADDING_ORDER = gql`
   mutation handleAddingOrder($email: String!){
      handleAddingOrder(email: $email){
         result
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

export const HANDLE_CHANGE_DATA = gql`
   mutation HandleChangeData($email: String!, $name: String!, $phone: String!){
      handleChangeData(email: $email, name: $name, phone: $phone){
         result
         user{
            name
            email
            phone
         }
      }
   }
`

export const HANDLE_CHANGE_PASSWORD = gql`
   mutation HandleChangePassword($email: String!, $password: String!, $newPassword: String!){
      handleChangePassword(email: $email, password: $password, newPassword: $newPassword){
         ... on Error{
            message
         }
         ... on User{
            email
            name
            phone
            password{
               hash
               length
            }
         }
      }
   }
`

export const HANDLE_ADDING_ADDRESS = gql`
   mutation HandleAddingAddress($email: String!, $name: String!, $phone: String!, $address: String!){
      handleAddingAddress(email: $email, name: $name, phone: $phone, address: $address){
         result
         addresses{
            id
            name
            address
            phone
         }
      }
   }
`
export const HANDLE_DELETING_ADDRESS = gql`
   mutation HandleDeletingAddress($email: String!, $addressId: ID!){
      handleDeletingAddress(email: $email, addressId: $addressId){
         result
         addresses{
            id
            name
            address
            phone
         }
      }
   }
`
export const HANDLE_UPDATING_ADDRESS = gql`
   mutation HandleUpdatingAddress($addressId: ID!, $name: String!, $phone: String!, $address: String!){
      handleUpdatingAddress(addressId: $addressId, name: $name, phone: $phone, address: $address){
         result
         addresses{
            id
            name
            address
            phone
         }
      }
   }
`