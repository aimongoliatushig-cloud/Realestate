"use client"
import property_feature_list from "@/data/inner-data/PropertyFeatureListData"
import CommonBanner from "../listing-details-common/CommonBanner"
import MediaGallery from "./MediaGallery"
import PropertyOverview from "./PropertyOverview"
import VideoTour from "./VideoTour"
import FloorPlan from "./FloorPlan"
import NearbyList from "./NearbyList"
import SimilarProperty from "./SimilarProperty"
import ProPertyScore from "../listing-details-3/ProPertyScore"
import MortgageCalculator from "./MortgageCalculator"
import Location from "./Location"
import ReviewArea from "./ReviewArea"
import ReviewFormArea from "./ReviewFormArea"
import Sidebar from "../listing-details-1/Sidebar"

const ammenities_data: string[] = ["Агааржуулалт ба Халаалт", "Гараж", "Цэцэрлэг", "Хөгжлийн бэрхшээлтэй хандалт", "Усан сан", "Зогсоол", "Wifi", "Гэрийн тэжээвэр амьтан", "Таазны өндөр", "Зуух", "Тоглоомын талбай", "Цахилгаан шат"]

const ListingDetailsFiveArea = () => {
  return (
    <div className="listing-details-one theme-details-one mt-130 lg-mt-100 pb-150 xl-pb-120">
      <MediaGallery />
      <div className="container">
        <CommonBanner style_3={true} />
        <div className="property-feature-list position-relative z-2 mt-65 mb-75">
          <div className="dark-bg ps-3 ps-md-5 pe-3 pt-30 pb-30">
            <PropertyOverview />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8">
            <div className="accordion-style-two full-accordion">
              <div className="accordion" id="accordionTwo">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
                      Тойм
                    </button>
                  </h2>
                  <div id="collapseOneA" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg m0">Эрсдэлийн менежмент ба дагаж мөрдөлт нь стратегийн хувьд зөв хандвал боломжуудыг нээж чадна.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
                      Үл хөдлөх хөрөнгийн онцлогууд
                    </button>
                  </h2>
                  <div id="collapseTwoA" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg">Эрсдэлийн менежмент ба дагаж мөрдөлт нь стратегийн хувьд зөв хандвал боломжуудыг нээж чадна.</p>
                      <h5 className="pt-30 pb-25">Үл хөдлөх хөрөнгийн дэлгэрэнгүй</h5>
                      {property_feature_list.slice(0, 1).map((item) => (
                        <div key={item.id} className="feature-list-two">
                          <ul className="style-none d-flex flex-wrap justify-content-between">
                            {item.feature_list.map((list, i) => (
                              <li key={i}><span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
                      Тохилог байдал
                    </button>
                  </h2>
                  <div id="collapseThreeA" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p className="fs-20 lh-lg pb-25">Эрсдэлийн менежмент ба дагаж мөрдөлт нь стратегийн хувьд зөв хандвал боломжуудыг нээж чадна.</p>
                      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
                        {ammenities_data.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <VideoTour />
                <FloorPlan />
                <NearbyList/>
                <SimilarProperty />
                <ProPertyScore/>
                <MortgageCalculator/>
                <Location />
                <ReviewArea />
                <ReviewFormArea />
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ListingDetailsFiveArea
