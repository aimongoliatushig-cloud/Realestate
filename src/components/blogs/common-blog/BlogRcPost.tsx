import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import rcPostImg_1 from "@/assets/images/blog/blog_img_08.jpg"
import rcPostImg_2 from "@/assets/images/blog/blog_img_09.jpg"
import rcPostImg_3 from "@/assets/images/blog/blog_img_10.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   date: string;
}

const rc_data: DataType[] = [
   {
      id: 1,
      img: rcPostImg_1,
      title: "Зочид өөрсдийгөө өсгөх 10 өдрийн сорилт.",
      date: "2022 оны 7-р сарын 23",
   },
   {
      id: 2,
      img: rcPostImg_2,
      title: "WordCamp US-д зайнаас оролцох нь.",
      date: "2022 оны 7-р сарын 23",
   },
   {
      id: 3,
      img: rcPostImg_3,
      title: "2022 оны 12-р сарын сар тутмын тойм.",
      date: "2022 оны 7-р сарын 23",
   },
]

const BlogRcPost = () => {
   return (
      <div className="recent-news bg-white bg-wrapper mb-30">
         <h5 className="mb-20">Сүүлийн мэдээнүүд</h5>
         {rc_data.map((item) => (
            <div key={item.id} className="news-block d-flex align-items-center pb-25">
               <div><Image src={item.img} alt="" className="lazy-img" /></div>
               <div className="post ps-4">
                  <h4 className="mb-5">
                     <Link href="/blog_details" className="title tran3s">{item.title}</Link>
                  </h4>
                  <div className="date">{item.date}</div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default BlogRcPost
