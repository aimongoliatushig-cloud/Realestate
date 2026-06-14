import FooterFour from "@/layouts/footers/FooterFour"
import ServiceDetailsArea from "./ServiceDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne style={true} />
          <BreadcrumbOne title="Үйлчилгээний дэлгэрэнгүй" link="#" link_title="Үйлчилгээ" sub_title="Орон сууц худалдаж авах" style={true} />
         <ServiceDetailsArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ServiceDetails;
