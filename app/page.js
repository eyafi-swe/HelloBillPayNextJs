import Banner from "@/sections/Home/Banner";
import BottomSection from "@/sections/Common/BottomSection";
import FAQ from "@/sections/Home/FAQ";
import ThirdSection from "@/sections/Home/ThirdSection";
import SaveBill from "@/sections/Common/SaveBill";
import EasyPeasy from "@/sections/Common/EasyPeasy";
import AdvertisingWithCarousel from "@/sections/Common/AdvertisingWithCarousel";
import ExperienceCarriers from "@/sections/Home/ExperienceCarriers";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <ExperienceCarriers />
      <ThirdSection />
      <EasyPeasy />
      <SaveBill />
      <FAQ />
      <AdvertisingWithCarousel />
      <BottomSection />
    </div>


  )
}
