import Image from "next/image"
import Link from "next/link"

import featureImg from "@/assets/images/shape/title_shape_10.svg"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-eleven mt-150 xl-mt-100">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-5">
                  <div className="title-one md-mb-40">
                     <h3>1,230+ <span>Компаниуд <Image src={featureImg} alt="" className="lazy-img" /></span>бидэнд итгэдэг.</h3>
                  </div>
               </div>
               <div className="col-xxl-6 col-lg-7 ms-auto">
                  <p className="fs-24 lh-lg mb-30 color-dark">Таны үл хөдлөх хөрөнгийн тэргүүлэгч зөвлөх. Бидэнтэй хамт мөрөөдлийн гэрээ олоорой. 745,000 гаруй орон сууц, байшинг худалдаа, түрээсийн зориулалтаар санал болгож байна.</p>
                  <div className="d-inline-flex flex-wrap align-items-center">
                     <Link href="/about_us_02" className="btn-five md rounded-0 mt-20 me-5"><span>Дэлгэрэнгүй</span></Link>
                     <Link href="/contact" className="btn-three mt-20"><span>Зөвлөгөө авах</span> <i className="fa-light fa-arrow-right-long"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
