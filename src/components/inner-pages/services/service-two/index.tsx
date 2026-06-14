import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import Brand from "@/components/homes/home-five/Brand"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"
import BLockFeatureOne from "./BLockFeatureOne"
import BlockFeatureThree from "../service-one/BlockFeatureTwo"
import BLockFeatureTwo from "./BLockFeatureTwo"
import FancyBanner from "@/components/common/FancyBanner"
import BLockFeatureThree from "./BLockFeatureThree"

const ServiceTwo = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Үйлчилгээнүүд" link="#" link_title="Хуудсууд" sub_title="Үйлчилгээ" style={false} />
         <BLockFeatureOne />
         <Brand />
         <BLockFeatureThree />
         <BlockFeatureThree style={true} />
         <BLockFeatureTwo />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ServiceTwo
