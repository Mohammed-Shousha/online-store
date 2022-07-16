import { gql } from '@apollo/client'

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
               id
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
   mutation HandleGoogleSignIn($token: String!){
      handleGoogleSignIn(token: $token){
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
               id
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
                  id
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

export const HANDLE_SIGN_OUT = gql`
   mutation HandleSignOut{
      handleSignOut
   }
`


export const HANDLE_ADDING_ITEMS = gql`
mutation HandleAddingItems($productId: ID!){
   handleAddingItems(productId: $productId){
      result
      cartItems{
         productId
         qty
      }
   }
}
`

export const HANDLE_REMOVING_ITEMS = gql`
mutation HandleRemovingItems($productId: ID!){
   handleRemovingItems(productId: $productId){
      result
      cartItems{
         productId
         qty
      }
   }
}
`

export const HANDLE_CLEAR_CART = gql`
mutation HandleClearCart{
   handleClearCart{
      result
      cartItems{
            productId
            qty
         }
      }
   }
`

export const HANDLE_ADDING_ORDER = gql`
   mutation handleAddingOrder{
      handleAddingOrder{
         result
         orders{
            id
            time
            order{
               productId
               qty
            }
         }
         cartItems{
            productId
            qty
         }
      }
   }
`

export const HANDLE_CONFIRMATION = gql`
mutation HandleConfirmation{
      handleConfirmation
   }
`

export const HANDLE_RESEND_EMAIL = gql`
   mutation HandleResendEmail{
      handleResendEmail
   }
`

export const HANDLE_FORGET_PASSWORD = gql`
   mutation HandleForgetPassword($email: String!){
      handleForgetPassword(email: $email){
         result
         message
      }
   }
`

export const HANDLE_RESET_PASSWORD = gql`
   mutation HandleResetPassword($token: String!, $password: String!){
      handleResetPassword(token: $token, password: $password)
   }
`

export const HANDLE_VERIFY_TOKEN = gql`
   mutation HandleVerifyToken($token: String!){
      handleVerifyToken(token: $token)
   }
`

export const HANDLE_CHANGE_DATA = gql`
   mutation HandleChangeData($name: String!, $phone: String!){
      handleChangeData( name: $name, phone: $phone){
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
   mutation HandleChangePassword($password: String!, $newPassword: String!){
      handleChangePassword(password: $password, newPassword: $newPassword){
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
   mutation HandleAddingAddress($name: String!, $phone: String!, $address: String!){
      handleAddingAddress(name: $name, phone: $phone, address: $address){
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
   mutation HandleDeletingAddress($addressId: ID!){
      handleDeletingAddress(addressId: $addressId){
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