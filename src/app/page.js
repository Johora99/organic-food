import AboutSupport from "@/components/AboutSupport/AboutSupport";
import Slider from "@/components/Slider/Slider";
import bgImg from '../../public/bg-2.png'
import Image from "next/image";
import FeatureProducts from "@/components/FeaturedProducts/FeatureProducts";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
  <>
   <section>
    <Slider></Slider>
   </section>
   <section className="w-full bg-white relative">
    <Image src={bgImg} alt="" className="absolute bottom-0 left-0"/>
     <AboutSupport></AboutSupport>
    <FeatureProducts></FeatureProducts>
   </section>
   <section>
     <Categories></Categories>
   </section>
  
  </>
  );
}
