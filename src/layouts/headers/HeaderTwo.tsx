"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import Offcanvas from "./Menu/Offcanvas"
import HeaderSearchbar from "./Menu/HeaderSearchbar"

import logo_1 from "@/assets/images/logo/logoua.png";
import logo_2 from "@/assets/images/logo/logoua.png";
import logo_3 from "@/assets/images/logo/logoua.png";

const HeaderTwo = ({ style_1, style_2 }: any) => {
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [lang, setLang] = useState<"mn" | "en">("mn");

   const btnClr = sticky ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)";

   return (
      <>
         <div className={`theme-main-menu menu-overlay sticky-menu ${style_2 ? "menu-style-four" : style_1 ? "menu-style-three" : "menu-style-two"} ${sticky ? "fixed" : ""}`}>
            <div className={`inner-content ${style_2 ? "gap-two" : "gap-one"}`}>
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                            <Image src={style_2 ? logo_3 : style_1 ? logo_2 : logo_1} alt="UA Properties" height={72} width={72} className="ua-logo" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                         <ul className="d-flex align-items-center style-none">
                            <li className="d-none d-md-flex align-items-center me-3">
                               <i className="fa-regular fa-phone-volume" style={{ color: sticky ? "#111" : "#fff", fontSize: "16px" }}></i>
                               <Link href="tel:77171111" className="tran3s" style={{ color: sticky ? "#111" : "#fff", fontWeight: 700, fontSize: "16px", marginLeft: "8px" }}>7717 1111</Link>
                            </li>
                            <li className="me-3">
                               <div style={{display:"inline-flex", borderRadius:"20px", border: sticky ? "1px solid rgba(0,0,0,0.2)" : "1px solid rgba(255,255,255,0.4)", overflow:"hidden", fontSize:"12px", fontWeight:700, transition:"all 0.3s ease"}}>
                                  <button onClick={() => setLang("mn")} style={{padding:"4px 12px", background: lang === "mn" ? "#D51017" : "transparent", color: lang === "mn" ? "#fff" : btnClr, border:"none", cursor:"pointer", transition:"all 0.2s"}}>MN</button>
                                  <button onClick={() => setLang("en")} style={{padding:"4px 12px", background: lang === "en" ? "#D51017" : "transparent", color: lang === "en" ? "#fff" : btnClr, border:"none", cursor:"pointer", transition:"all 0.2s"}}>EN</button>
                               </div>
                            </li>
                            {!style_2 ? (<><li className="d-flex align-items-center login-btn-one">
                              <i className="fa-regular fa-lock" style={{ color: sticky ? "#111" : "#fff" }}></i>
                              <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s" style={{ color: sticky ? "#111" : "#fff" }}>
                                                                   Нэвтрэх <span className="d-none d-sm-inline-block"> {""} / Бүртгүүлэх</span></Link>
                           </li>
                              <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                 <Link href="dashboard/add-property" className={style_1 ? "btn-ten" : "btn-two rounded-0"} target="_blank">
                                     <span>Зар нэмэх</span> <i className="fa-thin fa-arrow-up-right"></i>
                                 </Link>
                              </li>
                              <li className="d-none d-xl-block">
                                 <button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="sidenavbtn rounded-circle tran3s" type="button">
                                    <i className="fa-sharp fa-light fa-bars-filter"></i>
                                 </button>
                              </li></>) : (<>
                                 <li className="d-none d-md-flex align-items-center login-btn-one me-4 me-xxl-5">
                                    <i className="fa-regular fa-phone-volume"></i>
                                     <Link href="tel:77171111" className="tran3s">7717 1111</Link>
                                 </li>
                                 <li>
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></Link>
                                 </li>
                                 <li>
                                    <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                 </li>
                              </>)}
                         </ul>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className={`collapse navbar-collapse ${style_2 ? "ms-xl-5" : ""}`} id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal />
         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
