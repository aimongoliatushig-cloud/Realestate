import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import projectDetailsThumb_1 from '@/assets/images/project/img_27.jpg'
import projectDetailsThumb_2 from '@/assets/images/project/img_29.jpg'
import projectDetailsThumb_3 from '@/assets/images/project/img_30.jpg'
import projectDetailsThumb_4 from '@/assets/images/project/img_28.jpg'

import projectDetailsIcon_1 from '@/assets/images/icon/icon_43.svg'
import projectDetailsIcon_2 from '@/assets/images/icon/icon_44.svg'
import projectDetailsIcon_3 from '@/assets/images/icon/icon_45.svg'

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: string;
   project_details: {
      count: string;
      icon: StaticImageData;
      title: string;
      desc: string;
   }[];
}

const content_data: ContentType = {
   title_1: "Vintage City дахь орон сууц.",
   title_2: "Төслийн дэлгэрэнгүй",
   desc_1: "Таны үл хөдлөх хөрөнгийн тэргүүлэгч зөвлөх. Бидэнтэй хамт мөрөөдлийн гэрээ олоорой.",
   desc_2: "Таны үл хөдлөх хөрөнгийн тэргүүлэгч зөвлөх. Бидэнтэй хамт мөрөөдлийн гэрээ олоорой. 745,000 гаруй орон сууц, байшинг худалдаа, түрээсийн зориулалтаар санал болгож байна.",
   project_details: [
      {
         count: "01",
         icon: projectDetailsIcon_1,
         title: "Огноо",
         desc: "Ням, 2021 оны 7-р сарын 23",
      },
      {
         count: "02",
         icon: projectDetailsIcon_2,
         title: "Үйлчлүүлэгчийн нэр",
         desc: "Мариона Адиссон, Калифорниа",
      },
      {
         count: "03",
         icon: projectDetailsIcon_3,
         title: "Төслийн төрөл",
         desc: "Бизнес зөвлөгөө",
      },
   ]
}

const { title_1, title_2, desc_1, desc_2, project_details } = content_data;

const ProjectDetailsArea = () => {
   return (
      <div className="project-details-one mt-150 xl-mt-100 mb-170 xl-mb-100">
         <div className="container">
            <div className="row gx-xxl-5">
               <div className="col-lg-6 order-lg-first">
                  <figure className="image-wrapper">
                     <Image src={projectDetailsThumb_1} alt="" className="lazy-img w-100" />
                  </figure>
                  <figure className="image-wrapper">
                     <Image src={projectDetailsThumb_2} alt="" className="lazy-img w-100" />
                  </figure>
                  <figure className="image-wrapper">
                     <Image src={projectDetailsThumb_3} alt="" className="lazy-img w-100" />
                  </figure>
               </div>

               <div className="col-lg-6">
                  <div className="details-text ps-xxl-5 md-mt-40">
                     <div className="tag fw-500 text-uppercase">Орон сууц</div>
                     <h3>{title_1}</h3>
                     <p className="fs-24 pt-45 xl-pt-30 pb-45 xl-pb-30">{desc_1}</p>
                     <h4 className="mb-40">{title_2}</h4>
                     <div className="project-info-outline">
                        <div className="main-bg">
                           <ul className="style-none">
                              {project_details.map((item, index) => (
                                 <li key={index} className="position-relative z-1">
                                    <div className="num fw-light">{item.count}</div>
                                    <Image src={item.icon} alt="" className="lazy-img icon" />
                                    <strong>{item.title}</strong>
                                    <span>{item.desc}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     
                     <p className="fs-20 pt-50 pb-35">{desc_2}</p>
                     <ul className="style-none d-flex align-items-center social-icon">
                        <li>Хуваалцах :</li>
                        <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="bi bi-twitter-x"></i></Link></li>
                        <li><Link href="#"><i className="bi bi-instagram"></i></Link></li>
                     </ul>

                     <div className="page-pagination mt-45 pt-50">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="d-flex align-items-center page-title position-relative">
                              <Link href="#"><i className="fa-light fa-arrow-left"></i></Link>
                              <div className="ps-4">
                                 <span className="fs-16 opacity-50 d-block">Өмнөх</span>
                                 <strong className="fs-22 d-block">Galaxy Touch Sky</strong>
                              </div>
                           </div>
                           <div className="d-flex align-items-center page-title justify-content-end text-end position-relative">
                              <div>
                                 <span className="fs-16 opacity-50 d-block">Дараах</span>
                                 <strong className="fs-22 d-block">Swimming Pool Villa</strong>
                              </div>
                              <div className="ps-4">
                                 <Link href="#"><i className="fa-light fa-arrow-right"></i></Link>
                              </div>
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

export default ProjectDetailsArea
