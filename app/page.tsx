
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Home/Hero/hero";

import NewsSummer from "@/components/Home/NewsSummer/newsSummers";
import Services from "@/components/Home/Services/services";
import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
      <Hero/>
   
      <Services/>
      <NewsSummer/>
      <Footer/>
    </>
  );
}
