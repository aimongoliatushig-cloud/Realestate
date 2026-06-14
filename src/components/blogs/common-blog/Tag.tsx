import Link from "next/link";

const tags: string[] = ["Санал", "Боловсрол", "Дизайн", "Хөгжүүлэлт", "Брэндинг"];
const Tag = () => {
   return (
      <div className="keyword bg-white bg-wrapper">
         <h5 className="mb-20">Түлхүүр үгс</h5>
         <ul className="style-none d-flex flex-wrap">
            {tags.map((tag, i) => <li key={i}><Link href="#">{tag}</Link></li>)}
         </ul>
      </div>
   )
}

export default Tag
