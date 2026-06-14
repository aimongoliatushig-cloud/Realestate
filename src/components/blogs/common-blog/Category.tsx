import Link from "next/link"

const category_list: string[] = ["Дижитал (3)", "Маркетинг (4)", "Дизайн (2)", "WordPress (8)", "Залгаас (5)", "Хөгжүүлэгч (3)", "Бүртгэл (7)",]

const Category = () => {
   return (
      <div className="categories bg-white bg-wrapper mb-30">
         <h5 className="mb-20">Ангилал</h5>
         <ul className="style-none">
            {category_list.map((category, i) => (
               <li key={i}><Link href="#">{category}</Link></li>
            ))}
         </ul>
      </div>
   )
}

export default Category
