import React, { lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AOS from "aos"
import "aos/dist/aos.css"
import PrivateRoute from './Containers/PrivateRoute/PrivateRoute'
AOS.init()

const Home = lazy(() => import('./Pages/Home/Home'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const Form = lazy(() => import('./Pages/Form/Form'))
const Confirm = lazy(() => import('./Pages/Confirm/Confirm'))
const Checkout = lazy(() => import('./Pages/Checkout/Checkout'))
const StoreItems = lazy(() => import('./Pages/StoreItems/StoreItems'))
const SearchResults = lazy(() => import('./Pages/SearchResults/SearchResults'))
const Orders = lazy(() => import('./Pages/Orders/Orders'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const ProductPage = lazy(() => import('./Pages/ProductPage/ProductPage'))
const ResetPassword = lazy(() => import('./Pages/ResetPassword/ResetPassword'))
const Nav = lazy(() => import('./Containers/Nav/Nav'))
const SNav = lazy(() => import('./Containers/SNav/SNav'))
const Footer = lazy(() => import('./Containers/Footer/Footer'))


const App = () => {

   const NavRoutes = () => (
      <>
         <Nav data-aos="fade-up" />
         <SNav data-aos="fade-up" />
         <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' element={
               <PrivateRoute>
                  <Cart />
               </PrivateRoute>
            } />
            <Route path='/orders' element={
               <PrivateRoute>
                  <Orders />
               </PrivateRoute>
            } />
            <Route path='/profile' element={
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            } />
            <Route path="/categories/:id" element={<StoreItems />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path='*' element={<Navigate to='/notfound' />} />
         </Routes>
         <Footer />
      </>
   )

   const { i18n } = useTranslation()

   const renderMultiRoutes = ({ element: Element, paths, ...rest }) =>
      paths.map((path) => <Route key={path} path={path} {...rest} element={Element} />);

   useEffect(() => {
      if (i18n.language === 'ar') {
         document.getElementsByTagName('html')[0].setAttribute("dir", "rtl")
      }
   }, [i18n.language])

   return (
      <>
         <Router>
            <Routes>
               <Route path='*' element={
                  <NavRoutes />
               } />
               {renderMultiRoutes({
                  paths: ['/signin', '/signup', 'forgetpassword'],
                  element: <Form />,
               })}

               <Route path='/checkout' element={
                  <PrivateRoute>
                     <Checkout />
                     <Footer />
                  </PrivateRoute>
               }
               />

               <Route path="/confirm/:id" element={
                  <>
                     <Confirm />
                     <Footer bottom={true} />
                  </>
               } />
               <Route path="/resetpassword/:token" element={
                  <ResetPassword />
               } />

               <Route path='/notfound' element={
                  <h1> 404 Not Found </h1>
               } />
            </Routes>
         </Router>
      </>
   )
}

export default App