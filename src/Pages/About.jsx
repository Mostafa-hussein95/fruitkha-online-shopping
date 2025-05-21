import React from "react";
import Header from "../Components/Header";
import WhyFruithka from './../Components/WhyFruithka';
import Sale from './../Components/Sale';
import OwnerCarousel from './../Components/OwnerCarousel';
import OurTeam from './../Components/OurTeam';

export default function About() {
  return (
    <>
      <Header
        title="We sale fresh fruits"
        pageHdr="About Us"
        fruitBtn={false}
        contactBtn={false}
      />
      <WhyFruithka/>
      <Sale/>
      <OurTeam/>
      <OwnerCarousel/>
    </>
  );
}
