import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"
import BlogTwoArea from "./BlogTwoArea"
import FancyBanner from "@/components/common/FancyBanner"

const BlogTwo = () => {
   return (
      <>
         <HeaderFour />
          <BreadcrumbThree title="Мэдээний жагсаалт" link="#" link_title="Хуудсууд" sub_title="Мэдээ" style={false} />
         <BlogTwoArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default BlogTwo
