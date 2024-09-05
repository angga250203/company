import BottomVidio from "@/components/About/BottomVidio/bottomVidio";
import Client from "@/components/About/Client/client";
import Index from "@/components/About/Hero";
import Introduction from "@/components/About/section1";
import OurTeam from "@/components/About/Team/OurTeam";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";


export default function About() {
  return (
    <>
      <Index/>
      <Introduction/>
      <OurTeam/>
      <Client/>
      <BottomVidio/>
      <Footer/>

     
    </>
  );
}
