"use client";
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import BLockFeatureOne from "./BLockFeatureOne"
import VideoBanner from "@/components/homes/home-seven/VideoBanner"
import BLockFeatureFive from "@/components/homes/home-one/BLockFeatureFive"
import Feedback from "@/components/homes/home-five/"
import AgentArea from "@/components/homes/home-one/AgentArea"
import Brand from "./Brand"
import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"

const AboutUsOne = () => {
   return (
      <>
         <HeaderTwo style_1={false} style_2={false} />
         <BreadcrumbOne title="Бидний тухай" sub_title="Бидний тухай" style={false} />
         <BLockFeatureOne />
         <VideoBanner />
         <BLockFeatureFive style={true} />
         <Feedback style={true} />
         <AgentArea style={false} />
         <Brand />
         <FancyBanner style={false} />
         <FooterFour />
      </>
   )
}

export default AboutUsOne
