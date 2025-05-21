import React from "react";
import Header from "./../Components/Header";
import AllProducts from "./../Components/AllProducts";
import Pajination from "./../Components/Pajination";

export default function Shop() {
  return (
    <>
      <Header
        title="Fresh and Organic"
        pageHdr="Shop"
        fruitBtn={false}
        contactBtn={false}
      />
      <AllProducts />

      <Pajination />
    </>
  );
}
