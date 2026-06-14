"use client"
const ScheduleForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="input-box-three mb-25">
            <div className="label">Таны нэр*</div>
            <input type="text" placeholder="Таны бүтэн нэр" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">И-мэйл*</div>
            <input type="email" placeholder="И-мэйл хаяг" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Утас*</div>
            <input type="tel" placeholder="Утасны дугаар" className="type-input" />
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Мессеж*</div>
            <textarea placeholder="Сайн байна уу, би [Калифорни дахь орон сууц]-ыг сонирхож байна"></textarea>
         </div>
         <button className="btn-nine text-uppercase rounded-3 w-100 mb-10">АЯЛАЛ ЗАХИАХ</button>
      </form>
   )
}

export default ScheduleForm
