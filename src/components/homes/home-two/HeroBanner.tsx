"use client"
import Link from "next/link";
import DropdownTwo from "@/components/search-dropdown/home-dropdown/DropdownTwo";

const HeroBanner = () => {

   const sloganStyle = { letterSpacing: "0.15em", color: "#D51017" };
   const descStyle = { color: "rgba(255,255,255,0.90)" };

   return (
      <>
         <div className="hero-banner-two z-1 position-relative">
            <div className="container">
               <div className="position-relative line-bg pt-200 md-pt-150 pb-130 xl-pb-100">
                  <div className="row">
                     <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-10">
                        <p className="fs-14 color-dark mb-2 text-uppercase fw-bold wow fadeInUp" style={sloganStyle}>БИДЭНТЭЙ ХАМТ ЯЛАЛТАД ХҮР.</p>
                         <h1 className="hero-heading wow fadeInUp" style={{ fontWeight: 700 }}>Үл хөдлөх хөрөнгө<br />зуучлан борлуулах<br />үйлчилгээг өндөр түвшинд.</h1>
                        <p className="fs-24 pt-35 md-pt-30 pb-35 mb-pb-20 wow fadeInUp" data-wow-delay="0.1s" style={descStyle}>UA Properties нь үл хөдлөх хөрөнгийн худалдаа,<br />түрээс болон хөрөнгө оруулалтын шийдлийг<br />мэргэжлийн түвшинд хүргэж,<br />харилцагч бүрт үнэ цэнийг бий болгоно.</p>
                        <div className="d-inline-flex align-items-center flex-wrap">
                           <Link href="/listing_07" className="btn-seven mb-20 me-4 me-xxl5" style={{ background: "#D51017", borderColor: "#D51017" }}><span>Үл хөдлөх хөрөнгө үзэх</span> <i className="bi bi-arrow-up-right"></i></Link>
                           <Link href="/contact" className="btn-seven mb-20 me-4 me-xxl5" style={{ background: "transparent", border: "2px solid #D51017", color: "#D51017" }}><span>Зөвлөгөө авах</span></Link>
                        </div>
                     </div>
                  </div>

                  <DropdownTwo />
               </div>
            </div>
         </div>
      </>
   )
}

export default HeroBanner
