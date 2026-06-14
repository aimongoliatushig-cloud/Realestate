interface DataType {
   page: string;
   pricing_data: {
      id: number,
      class_name?: string;
      plan: string;
      price: string;
      desc: string;
      icon_details: {
         icon: string;
         icon_class?: string;
      }[];
      btn: string;
   }[];
}[];

const pricing_data: DataType[] = [
   {
      page: "pricing_1",
      pricing_data: [
         {
            id: 1,
            class_name: "active",
            plan: "ҮНЭГҮЙ ТӨЛӨВЛӨГӨӨ",
            price: "0",
            desc: "Хувь хүнд тохиромжтой",
            icon_details: [{ icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "active"
         },
         {
            id: 1,
            plan: "Алт төлөвлөгөө",
            price: "₮89",
            desc: "Гарааны бизнест тохиромжтой",
            icon_details: [{ icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "Эхлэх"
         },
         {
            id: 1,
            plan: "Бизнес төлөвлөгөө",
            price: "₮147",
            desc: "Том бизнест тохиромжтой",
            icon_details: [{ icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "Эхлэх"
         },
      ]
   },
   {
      page: "pricing_1",
      pricing_data: [
         {
            id: 1,
            class_name: "active",
            plan: "ҮНЭГҮЙ ТӨЛӨВЛӨГӨӨ",
            price: "0",
            desc: "Хувь хүнд тохиромжтой",
            icon_details: [{ icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "active"
         },
         {
            id: 1,
            plan: "Алт төлөвлөгөө",
            price: "₮189",
            desc: "Гарааны бизнест тохиромжтой",
            icon_details: [{ icon: "fa-sharp fa-regular fa-xmark" }, { icon: "fa-sharp fa-regular fa-xmark" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "Эхлэх"
         },
         {
            id: 1,
            plan: "Бизнес төлөвлөгөө",
            price: "₮347",
            desc: "Том бизнест тохиромжтой",
            icon_details: [{ icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" }, { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },],
            btn: "Эхлэх"
         },
      ]
   },
];

export default pricing_data;