"use client"
const MortgageCalculator = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="input-box-three mb-25">
            <div className="label">Байрны үнэ*</div>
            <input type="tel" placeholder="1,32,789" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Урьдчилгаа*</div>
            <input type="tel" placeholder="₮" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Зээлийн хүү*</div>
            <input type="tel" placeholder="3.5%" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Зээлийн хугацаа (жил)</div>
            <input type="tel" placeholder="24" className="type-input" />
         </div>
         <button className="btn-five text-uppercase sm rounded-3 w-100 mb-10">ТООЦОХ</button>
      </form>
   )
}

export default MortgageCalculator
