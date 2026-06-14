import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

interface ContentType {
   sub_title: string;
   desc_1: JSX.Element;
   title_1: string;
   title_2: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
}

const feature_content: ContentType = {
   sub_title: "Бидний тухай",
   desc_1: (<>Бидний үүсгэн байгуулагчид Технологийн салбарт олон жилийн туршлагатай бөгөөд үл хөдлөх хөрөнгийн зах зээлд шинэ стандарт тогтоохоор ажиллаж байна.</>),
   title_1: "Бид хэн бэ?",
   title_2: "Бидний эрхэм зорилго",
   desc_2: (<>Бид үйлчлүүлэгчдэдээ хамгийн шилдэг үл хөдлөх хөрөнгийн үйлчилгээг үзүүлж, тэдний мөрөөдлийн гэр, бизнесийн байраа олоход туслахыг зорилгодоо тавьсан.</>),
   desc_3: (<>Бид ил тод, шударга, найдвартай үйлчилгээгээр үйлчлүүлэгчдийнхээ итгэлийг хүлээж, Монголын үл хөдлөх хөрөнгийн зах зээлд тэргүүлэгч байгууллага болохыг зорьж байна.</>),
}

const { sub_title, desc_1, title_1, title_2, desc_2, desc_3 } = feature_content;

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">{sub_title}</div>
                        <h3>Таны <span>мөрөөдлийн<Image src={titleShape} alt="" className="lazy-img" /></span> гэр.</h3>
                        <p className="fs-22">{desc_1}</p>
                     </div>
                      <Link href="/contact" className="btn-two">Холбоо барих</Link>
                     <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>%</div>
                                  <span>Бага хүүгийн түвшин</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                  <div className="main-count fw-500 color-dark">₮<span className="counter"><Count number={1.3} /></span>т+</div>
                                  <span>Хуримтлагдсан арилжааны хэмжээ</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>{title_1}</h5>
                        <p className="fs-22 lh-lg mt-20">{desc_2}</p>
                        <h5 className="top-line">{title_2} </h5>
                        <p className="fs-22 lh-lg mt-20">{desc_3}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
