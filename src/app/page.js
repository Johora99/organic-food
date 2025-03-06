import AboutSupport from "@/components/AboutSupport/AboutSupport";
import Slider from "@/components/Slider/Slider";
import bgImg from '../../public/bg-2.png'
import Image from "next/image";

export default function Home() {
  return (
  <>
   <section>
    <Slider></Slider>
   </section>
   <section className="w-full bg-white relative">
    <Image src={bgImg} alt="" className="absolute"/>
     <AboutSupport></AboutSupport>
   </section>
  </>
  );
}
