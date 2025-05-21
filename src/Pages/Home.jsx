import Header from "./../Components/Header";
import Services from "./../Components/Services";
import OurProducts from "./../Components/OurProducts";
import Deal from "./../Components/Deal";
import OwnerCarousel from "./../Components/OwnerCarousel";
import AboutUs from "./../Components/AboutUs";
import Sale from "./../Components/Sale";
import OurNews from "./../Components/OurNews";

export default function Home() {
  return (
    <>
      <div>
        <Header
          title="Fresh & Organic"
          pageHdr="Delicious Seasonal Fruits"
          fruitBtn={true}
          contactBtn={true}
        />
        <Services />
        <OurProducts />
        <Deal />
        <OwnerCarousel />
        <AboutUs />
        <Sale />
        <OurNews />
      </div>
    </>
  );
}
