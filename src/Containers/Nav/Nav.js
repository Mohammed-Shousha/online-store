import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery } from '@apollo/client'
import Sidebar from '../Sidebar/Sidebar'
import AutoComplete from '../AutoComplete/AutoComplete'
import Logo from '../../Components/Logo'
import { MainNav } from '../../Components/Navbar'
import FlexContainer from '../../Components/FlexContainer'
import { NavText, UserAction, CartCircle, UserActionsContainer, SearchIcon, MenuIcon } from '../../Components/NavComponents'
import { ConfirmNav } from '../../Components/ConfirmComponents'
import { DataContext } from '../../Data/DataContext'
import { signOut } from '../../Data/DataActions'
import { PRODUCTS } from '../../Data/Queries'
import { HANDLE_SIGN_OUT } from '../../Data/Mutations'
import cart from '../../Data/Icons/cart.svg'
import user from '../../Data/Icons/user.svg'
import list from '../../Data/Icons/list.svg'
import signout from '../../Data/Icons/signout.svg'
import x from '../../Data/Icons/x-white.svg'


const Nav = () => {
   
   let navigate = useNavigate()

   const { t, i18n } = useTranslation()

   const { isSignedIn, setIsSignedIn, data, setData, confirmNav, setConfirmNav } = useContext(DataContext)
   const { name, email, cartItems } = data
   const firstName = name.split(' ')[0]
   
   const [input, setInput] = useState("")
   const [suggestions, setSuggestions] = useState([])
   
   const [show, setShow] = useState(false)
   const [sidebar, setSidebar] = useState(false)

   const [handleSignOut] = useMutation(HANDLE_SIGN_OUT, {
      onCompleted({ handleSignOut }) {  // 1 "Success" || 0 "Failed"
         if (handleSignOut) {
            setIsSignedIn(false)
            setData(signOut())
         } else {
            console.log('error')
         }
      }
   })
   
   const toggleShow = () => {
      setShow(!show)
   }

   const searchItem = (value) => {
      if (value) {
         navigate(`/search?q=${value}`)
      }
      setInput('')
   }
   
   useQuery(PRODUCTS, {
      onCompleted({ products }) {
         setSuggestions(products)
      }
   })
   
   const userActions = useRef(null)
   
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
      if (lng === 'ar') {
         document.getElementsByTagName('html')[0].setAttribute("dir", "rtl")
      } else {
         document.getElementsByTagName('html')[0].setAttribute("dir", "ltr")

      }
   }
   
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (userActions.current && !userActions.current.contains(e.target)) {
            setShow(false)
         }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
         document.removeEventListener("mousedown", handleClickOutside)
      }
   }, [show])

   return (
      <>
         {confirmNav &&
            <ConfirmNav>
               <p> An Email Has Been Sent To{" "}<strong>{email}</strong>{" "}Check Your Email To Confirm Your Account</p>
               <img src={x} alt='x' onClick={() => setConfirmNav(false)} />
            </ConfirmNav>
         }
         <MainNav>

            <MenuIcon onClick={() => setSidebar(true)} />

            {sidebar &&
               <Sidebar
                  setSidebar={setSidebar}
               />
            }

            <Logo />

            {i18n.language === 'en' && <button onClick={() => changeLanguage('ar')}>AR</button>}
            {i18n.language === 'ar' && <button onClick={() => changeLanguage('en')}>EN</button>}

            <AutoComplete
               suggestions = {suggestions}
               input= {input}
               setInput = {setInput}
            />
            <SearchIcon
               onClick={() => searchItem(input)}
            />

            <NavText
               relative
               ref={userActions}
               onClick={isSignedIn ? toggleShow : undefined}
            >
               {isSignedIn ?
                  `${t('Nav.Hi')} ${firstName}`
                  :
                  <p>
                     <Link to='/signin'>{t('Nav.SignIn')}</Link>
                     &nbsp;
                     {t('Nav.or')}
                     &nbsp;
                     <Link to='/signup'>{t('Nav.SignUp')}</Link></p>
               }
               {isSignedIn && show &&
                  <UserActionsContainer>
                     <Link to='/orders'>
                        <UserAction>
                           <img src={list} alt='list' />
                           <p> {t('Nav.Orders')} </p>
                        </UserAction>
                     </Link>
                     <Link to='/profile'>
                        <UserAction>
                           <img src={user} alt='user' />
                           <p> {t('Nav.Profile')} </p>
                        </UserAction>
                     </Link>
                     <Link to='/' onClick={handleSignOut} >
                        <UserAction signOut>
                           <img src={signout} alt='signout' />
                           <p> {t('Nav.Sign Out')} </p>
                        </UserAction>
                     </Link>
                  </UserActionsContainer>}
            </NavText>

            {isSignedIn &&
               <Link to='/cart'>
                  <NavText>
                     <FlexContainer>
                        {t('Nav.Cart')}
                        <img alt='cart' src={cart} />
                        <CartCircle hide={cartItems.every(item => item.qty === 0)}>
                           {cartItems.reduce((t, item) => t + item.qty, 0)}
                        </CartCircle>
                     </FlexContainer>
                  </NavText>
               </Link>
            }
         </MainNav>
      </>
   )
}

export default Nav