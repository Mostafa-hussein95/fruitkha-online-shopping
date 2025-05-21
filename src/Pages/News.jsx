import React from "react";
import Header from "./../Components/Header";
import AllNews from "./../Components/AllNews";
import Pajination from "./../Components/Pajination";

export default function News() {
  return (
    <>
      <Header
        title="Organic Information"
        pageHdr="News Article"
        fruitBtn={false}
        contactBtn={false}
      />
      <AllNews />
      <Pajination />
    </>
  );
}
