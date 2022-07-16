import React from 'react'
import { useTranslation } from 'react-i18next'
import { FooterContainer, Contact } from '../../Components/FooterComponents'
import { CONTACT } from '../../Data/Database'


const Footer = ({ bottom }) => {

   const { t } = useTranslation()

   return(
      <>
         <Contact bottom={bottom}>
            <h2>{t("Footer.Contact Us")}</h2>
            <div>
               {CONTACT.map(c => (
                  <a key={c.id} href={c.link}>
                     <img src={c.img} alt='contact' />
                  </a>
               ))}
            </div>
         </Contact>
         <FooterContainer bottom={bottom}>
            <h1>{t("Footer.Rights")}</h1> {/*All Rights Reserved*/}
            <p>
               <span>{t("Footer.About")}</span> {/* About Us*/}
               &nbsp;|&nbsp;
                  <span>{t("Footer.Privacy")}</span> {/* Privacy Policy*/}
               &nbsp;|&nbsp;
               <span>{t("Footer.Use")}</span> {/*Terms of Use*/}
            </p>
         </FooterContainer>
      </>
   )
}

export default Footer