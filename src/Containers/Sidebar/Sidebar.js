import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContainer, BackContainer } from '../../Components/SidebarComponents'
import Modal from '../../Components/Modal'
import FlexContainer from '../../Components/FlexContainer'
import { CATEGORIES } from '../../Data/Database'
import prev from '../../Data/Icons/prev.svg'
import next from '../../Data/Icons/next.svg'
import x from '../../Data/Icons/x.svg'


const Sidebar = ({ setSidebar }) => {

   const [activeCategory, setActiveCategory] = useState(null)


   const sidebarRef = useRef(null)

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setSidebar(false)
         }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
         document.removeEventListener("mousedown", handleClickOutside)
      }
   }, [setSidebar])

   return (
      <Modal>
         <SidebarContainer ref={sidebarRef}>
            <BackContainer
               onClick={() => setActiveCategory(null)}
               hide={!activeCategory}
            >
               <img src={prev} alt='prev' />
               <p> BACK </p>
            </BackContainer>
            <img src={x} alt='x' onClick={() => setSidebar(false)} />
            <h2>{activeCategory || 'CATEGORIES'}</h2>
            {!activeCategory ?
               CATEGORIES.map(({ category, items }, i) => (
                  <FlexContainer between key={i}>
                     <>
                        <Link to={`/categories/${category.toLowerCase()}`} onClick={() => setSidebar(false)}>
                           <h4> {category.toUpperCase()} </h4>
                        </Link>
                        {items.length > 1 &&
                           <img src={next} alt='next' onClick={() => setActiveCategory(category.toUpperCase())} />
                        }
                     </>
                  </FlexContainer>
               ))
               : CATEGORIES.find(x => x.category.toLowerCase() === activeCategory.toLowerCase()).items.map(({ name }) => (
                  <Link
                     key={name}
                     onClick={() => setSidebar(false)}
                     to={`/categories/${activeCategory.toLowerCase()}-${name.toLowerCase()}`}
                  >
                     <h4>{name.toUpperCase()}</h4>
                  </Link>
               ))
            }
         </SidebarContainer>
      </Modal>
   )
}

export default Sidebar