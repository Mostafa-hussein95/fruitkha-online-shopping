import React from 'react'
import Header from './../Components/Header';
import ContactUs from './../Components/ContactUs';

export default function Contact() {
  return (
    <>
     <Header title="Get 24/7 Support" pageHdr="Contact us" fruitBtn={false} contactBtn={false} />
      <ContactUs/>
    </>
  )
}
