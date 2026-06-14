interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "Сургууль & Коллеж:", count: "0.9км", },
   { title: "Хүнсний дэлгүүр:", count: "0.2км", },
   { title: "Метро буудал:", count: "0.7км", },
   { title: "Фитнесс:", count: "2.3км", },
   { title: "Их сургууль:", count: "2.7км", },
   { title: "Эмнэлэг:", count: "1.7км", },
   { title: "Худалдааны төв:", count: "1.1км", },
   { title: "Цагдаагийн хэлтэс:", count: "1.2км", },
   { title: "Автобусны буудал:", count: "1.1км", },
   { title: "Гол:", count: "3.1км", },
   { title: "Зах:", count: "3.4км", },
];

const NearbyList = () => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixA" aria-expanded="true" aria-controls="collapseSixA">
                Ойролцоо байршил
            </button>
         </h2>
         <div id="collapseSixA" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="property-nearby">
                  <p className="fs-20 lh-lg pb-30">Эрсдэлийн менежмент ба дагаж мөрдөлт нь стратегийн хувьд зөв хандвал боломжуудыг нээж чадна.</p>
                  <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
                     {list_data.map((list, i) => (
                        <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NearbyList
