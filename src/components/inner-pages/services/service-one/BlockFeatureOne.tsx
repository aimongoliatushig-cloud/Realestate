import Image from "next/image"
import Link from "next/link";

import featureImg_1 from "@/assets/images/assets/screen_11.png";
import featureImg_2 from "@/assets/images/media/img_54.jpg";
import featureImg_3 from "@/assets/images/shape/shape_40.svg";
import featureImg_4 from "@/assets/images/media/img_53.jpg";
import featureImg_5 from "@/assets/images/shape/title_shape_05.svg";

const BlockFeatureOne = () => {
   return (
      <div className="block-feature-eight position-relative z-1 mt-170 xl-mt-120">
         <div className="container">
            <div className="position-relative">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="pe-xl-5 wow fadeInLeft">
                        <div className="row align-items-end">
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_1} alt="" className="lazy-img screen_03 mb-40" />
                                 <Image src={featureImg_2} alt="" className="lazy-img main-img w-100" />
                                 <Image src={featureImg_3} alt="" className="lazy-img shapes shape_01" />
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_4} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="block-two ms-xxl-5 wow fadeInRight">
                        <div className="bg-wrapper md-mt-60">
                           <div className="title-one m0">
                              <h3>120k+  <span>Үйлчлүүлэгчид<Image src={featureImg_5} alt="" className="lazy-img" /></span> бидэнд итгэдэг.</h3>
                           </div>
                           <p className="fs-22 mt-45 mb-60 xl-mb-40 pe-xxl-5">Бид үл хөдлөх хөрөнгийн зах зээлд олон жилийн туршлагатай баг бүрэлдэхүүнтэйгээр үйл ажиллагаа явуулж байна.</p>
                           <ul className="list-style-one fs-22 color-dark style-none">
                              <li>Зээл, бага хүүгийн нөхцөл</li>
                              <li>100к+ Үл хөдлөх хөрөнгийн зар нэмэгдсэн</li>
                              <li>Мэргэжлийн зөвлөхүүдийн үйлчилгээ</li>
                           </ul>
                           <div className="mt-60 lg-mt-40">
                              <Link href="/contact" className="btn-two">Холбоо барих</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureOne
