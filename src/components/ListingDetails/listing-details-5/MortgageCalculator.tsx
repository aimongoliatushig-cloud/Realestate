
const MortgageCalculator = () => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineA" aria-expanded="true" aria-controls="collapseNineA">
                Зээлийн тооцоолуур
            </button>
         </h2>
         <div id="collapseNineA" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="mortgage-calculator">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <div className="input-box-three mb-25">
                        <div className="label">Байрны үнэ*</div>
                        <input type="tel" placeholder="1,32,789" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Урьдчилгаа*</div>
                        <input type="tel" placeholder="₮" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Зээлийн хүү*</div>
                        <input type="tel" placeholder="3.5%" className="type-input rounded-0" />
                     </div>
                     <div className="input-box-three mb-25">
                        <div className="label">Зээлийн хугацаа (жил)</div>
                        <input type="tel" placeholder="24" className="type-input rounded-0" />
                     </div>
                     <button className="btn-five text-uppercase sm rounded-0 w-100 mb-10">ТООЦОХ</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MortgageCalculator
