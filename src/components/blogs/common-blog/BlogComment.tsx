import Image from "next/image"
import Link from "next/link"

import commentImg_1 from "@/assets/images/blog/avatar_01.jpg"
import commentImg_2 from "@/assets/images/blog/avatar_02.jpg"
import commentImg_3 from "@/assets/images/blog/avatar_03.jpg"

const BlogComment = () => {
   return (
      <div className="blog-comment-area">
         <h3 className="blog-inner-title pb-35">2 Сэтгэгдэл</h3>
         <div className="comment position-relative d-flex">
            <Image src={commentImg_1} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Ал Хасан</div>
               <div className="date">2023 оны 8-р сарын 27, 16:10</div>
               <p>Маш сайн үйлчилгээ. Би өөрийн мөрөөдлийн байраа хурдан хугацаанд олсон. Бүх үйл явц тун хялбар байсан.</p>
               <Link href="#" className="reply-btn tran3s">Хариулах</Link>
               <div className="comment position-relative reply-comment d-flex">
                  <Image src={commentImg_2} alt="" className="lazy-img user-avatar rounded-circle" />
                  <div className="comment-text">
                     <div className="name fw-500">Рашид Ка.</div>
                     <div className="date">2023 оны 8-р сарын 29, 19:30</div>
                     <p>Танд талархал илэрхийлье. Бид үйлчлүүлэгч бүртээ хамгийн сайн үйлчилгээг хүргэхийг зорьдог.</p>
                     <Link href="#" className="reply-btn tran3s">Хариулах</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="comment position-relative d-flex">
            <Image src={commentImg_3} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Жубаер Ал Хасан</div>
               <div className="date">2023 оны 6-р сарын 12, 19:30</div>
               <p>Гайхалтай туршлага байлаа. Мэргэжлийн баг, хурдан шуурхай үйлчилгээ. Бүгдэд нь санал болгож байна.</p>
               <Link href="#" className="reply-btn tran3s">Хариулах</Link>
            </div>
         </div>
      </div>
   )
}

export default BlogComment
