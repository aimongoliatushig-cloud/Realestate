interface DataType {
   id: number;
   title: string;
   feature_list: {
      title: string;
      count: string;
   }[];
}[];

const property_feature_list: DataType[] = [
   {
      id: 1,
      title: "Үл хөдлөх хөрөнгийн дэлгэрэнгүй",
      feature_list: [
         { title: "Унтлагын өрөө:", count: "03" },
         { title: "Тавилга:", count: "Хагас тавилгатай", },
         { title: "Угаалгын өрөө:", count: "02", },
         { title: "Баригдсан он:", count: "2010", },
         { title: "Давхар:", count: "Газар", },
         { title: "Гараж:", count: "03", },
         { title: "Таазны өндөр:", count: "3.2м", },
         { title: "Үл хөдлөх төрөл:", count: "Орон сууц", },
         { title: "Засвар:", count: "3.2м", },
         { title: "Төлөв:", count: "Худалдаанд", },
      ],
   },
   {
      id: 2,
      title: "Ашиглагдах дэлгэрэнгүй",
      feature_list: [
         { title: "Халаалт:", count: "Байгалийн хий", },
         { title: "Интерком:", count: "Тийм", },
         { title: "Агааржуулагч:", count: "Тийм", },
         { title: "Цонхны төрөл:", count: "Хөнгөн цагаан", },
         { title: "Зуух:", count: "--", },
         { title: "Кабель ТВ:", count: "--", },
         { title: "Цахилгаан шат:", count: "Тийм", },
         { title: "WiFi:", count: "Тийм", },
         { title: "Агаар сэлгэлт:", count: "Тийм", },
      ],
   },
   {
      id: 3,
      title: "Гадна тохилог байдал",
      feature_list: [
         { title: "Гараж:", count: "Тийм", },
         { title: "Зогсоол:", count: "Тийм", },
         { title: "Цэцэрлэг:", count: "30м2", },
         { title: "Хөгжлийн бэрхшээлтэй хандалт:", count: "Налуу зам", },
         { title: "Усан сан:", count: "--", },
         { title: "Хашаа:", count: "--", },
         { title: "Хамгаалалт:", count: "3 Камер", },
         { title: "Гэрийн тэжээвэр амьтан:", count: "Тийм", },
      ],
   }
];

export default property_feature_list;