const ammenities_data: string[] = ["Агааржуулалт ба Халаалт", "Гараж", "Цэцэрлэг", "Хөгжлийн бэрхшээлтэй хандалт", "Усан сан", "Зогсоол", "Wifi", "Гэрийн тэжээвэр амьтан", "Таазны өндөр", "Зуух", "Тоглоомын талбай", "Цахилгаан шат"]

const CommonAmenities = () => {
   return (
      <>
         <h4 className="mb-20">Тохилог байдал</h4>
         <p className="fs-20 lh-lg pb-25">Эрсдэлийн менежмент ба дагаж мөрдөлт нь стратегийн хувьд зөв хандвал
            боломжуудыг нээж чадна.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
            {ammenities_data.map((list, i) => (
               <li key={i}>{list}</li>
            ))}
         </ul>
      </>
   )
}

export default CommonAmenities
