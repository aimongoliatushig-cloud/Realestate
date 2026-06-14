"use client"
import { useState } from "react";
import NiceSelect from "@/ui/NiceSelect";

const tab_title: string[] = ["Худалдан авах", "Түрээслэх",];

const DropdownTwo = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_07';
   };

   return (
      <div className="search-wrapper-one layout-two mt-60 lg-mt-40 position-relative">
         <nav className="search-filter-nav-one d-flex">
            <div className="nav nav-tabs border-0" role="tablist">
               {tab_title.map((tab, index) => (
                  <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
               ))}
            </div>
         </nav>

         <div className="bg-wrapper border-0 rounded-0">
            <div className="tab-content">
               <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-xl-2 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Би хайж байгаа...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "apartments", text: "Орон сууц худалдаж авах" },
                                    { value: "condos", text: "Кондо түрээслэх" },
                                    { value: "houses", text: "Байшин худалдах" },
                                    { value: "industrial", text: "Үйлдвэрийн байр түрээслэх" },
                                    { value: "villas", text: "Вилл худалдах" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Байршил</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                    { value: "germany", text: "Баянзүрх, Улаанбаатар" },
                                    { value: "dhaka", text: "Сүхбаатар, Улаанбаатар" },
                                    { value: "mexico", text: "Хан-Уул, Улаанбаатар" },
                                    { value: "france", text: "Баянгол, Улаанбаатар" },
                                    { value: "india", text: "Чингэлтэй, Улаанбаатар" },
                                    { value: "giza", text: "Сонгинохайрхан, Улаанбаатар" },
                                    { value: "cuba", text: "Налайх, Улаанбаатар" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Түлхүүр үг</div>
                              <input type="text" placeholder="худалдаа, түрээс, орон сууц" className="type-input" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Үнийн диапазон</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "₮10,000 - ₮200,000" },
                                    { value: "2", text: "₮20,000 - ₮300,000" },
                                    { value: "3", text: "₮30,000 - ₮400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-1">
                           <div className="input-box-one lg-mt-10">
                              <button className="fw-500 text-uppercase tran3s search-btn-two"><i
                                 className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-xl-2 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Би хайж байгаа...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "industrial", text: "Үйлдвэрийн байр түрээслэх" },
                                    { value: "apartments", text: "Орон сууц худалдаж авах" },
                                    { value: "condos", text: "Кондо түрээслэх" },
                                    { value: "houses", text: "Байшин худалдах" },
                                    { value: "villas", text: "Вилл худалдах" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Байршил</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                    { value: "germany", text: "Баянзүрх, Улаанбаатар" },
                                    { value: "dhaka", text: "Сүхбаатар, Улаанбаатар" },
                                    { value: "mexico", text: "Хан-Уул, Улаанбаатар" },
                                    { value: "france", text: "Баянгол, Улаанбаатар" },
                                    { value: "india", text: "Чингэлтэй, Улаанбаатар" },
                                    { value: "giza", text: "Сонгинохайрхан, Улаанбаатар" },
                                    { value: "cuba", text: "Налайх, Улаанбаатар" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Түлхүүр үг</div>
                              <input type="text" placeholder="худалдаа, түрээс, орон сууц" className="type-input" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Үнийн диапазон</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "₮10,000 - ₮200,000" },
                                    { value: "2", text: "₮20,000 - ₮300,000" },
                                    { value: "3", text: "₮30,000 - ₮400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-1">
                           <div className="input-box-one lg-mt-10">
                              <button className="fw-500 text-uppercase tran3s search-btn-two"><i
                                 className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DropdownTwo
