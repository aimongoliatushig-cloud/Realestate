interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const faq_data:DataType[] = [
   {
       id: 1,
       page: "home_2_faq_1",
       question: "Нарийвчилсан хайлт",
       answer: "Ердөө 5 минут л хангалттай. Тохиргоо нь хялбар бөгөөд таны хүссэн шүүлтүүрээр тохируулах боломжтой.",
       showAnswer: false,
    },
    {
       id: 2,
       page: "home_2_faq_1",
       question: "Мэргэжлийн зөвлөхүүд",
       answer: "Манай мэргэжлийн зөвлөхүүд таны асуултад түргэн шуурхай хариулж, зөв шийдлийг санал болгоно.",
       showAnswer: false,
    },
    {
       id: 3,
       page: "home_2_faq_1",
       question: "Аюулгүй төлбөр тооцоо",
       answer: "Таны төлбөр тооцоо бүрэн хамгаалагдаж, найдвартай гүйцэтгэгдэнэ.",
       showAnswer: false,
    },

   // home_2_faq_2

   {
       id: 1,
       page: "home_2_faq_2",
       question: "Үнэгүй зөвлөгөө хэрхэн авах вэ?",
       answer: "Бид үйлчлүүлэгч бүрт үнэ төлбөргүй зөвлөгөө өгч, хамгийн тохиромжтой шийдлийг санал болгоно.",
       showAnswer: false,
    },
    {
       id: 2,
       page: "home_2_faq_2",
       question: "Өөрийн хэрэгцээнд тохирсон үл хөдлөх хөрөнгийг хэрхэн олох вэ?",
       answer: "Та өөрийн хэрэгцээ, төсөв, байршлын шаардлагад үндэслэн манай каталогаас тохирох үл хөдлөх хөрөнгийг хялбархан олох боломжтой.",
       showAnswer: false,
    },
    {
       id: 3,
       page: "home_2_faq_2",
       question: "Үл хөдлөх хөрөнгө худалдаж авахад юу анхаарах вэ?",
       answer: "Бид танд үл хөдлөх хөрөнгө худалдан авах бүх үе шатанд мэргэжлийн зөвлөгөө өгч, хууль эрх зүйн асуудлыг шийдвэрлэхэд туслана.",
       showAnswer: false,
    },
    {
       id: 4,
       page: "home_2_faq_2",
       question: "Төлбөрийн ямар нөхцөлүүд байдаг вэ?",
       answer: "Бид бэлэн бус, банкны шилжүүлэг, ипотекийн зээл зэрэг төлбөрийн олон төрлийн нөхцөлийг санал болгож байна.",
       showAnswer: false,
    },

   // home_six
   
   {
      id: 1,
      page: "home_six",
      question: "Who we are?",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_six",
      question: "What’s our goal",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_six",
      question: "Our vision",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
];

export default faq_data;