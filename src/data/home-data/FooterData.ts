interface DataType {
   id: number;
   page: string;
   widget_title: string;
   widget_class?: string;
   widget_class2?: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      widget_class: "xs-mt-50",
       widget_title: "Холбоосууд",
       footer_link: [{ link: "/", link_title: "Нүүр" }, { link: "/dashboard/membership", link_title: "Гишүүнчлэл" }, { link: "/about_us_01", link_title: "Бидний тухай" }, { link: "/blog_01", link_title: "Блог" }, { link: "/blog_02", link_title: "Ажлын байр" }, { link: "/pricing_02", link_title: "Үнэ төлөвлөгөө" }, { link: "/dashboard/dashboard-index", link_title: "Удирдлагын самбар" },]
    },
    {
       id: 2,
       widget_class: "xs-mt-30",
       page: "home_1",
       widget_title: "Хууль эрх зүй",
       footer_link: [{ link: "/faq", link_title: "Үйлчилгээний нөхцөл" }, { link: "/faq", link_title: "Күүки" }, { link: "/faq", link_title: "Нууцлалын бодлого" }, { link: "/faq", link_title: "Түгээмэл асуултууд" },]
    },
    {
       id: 3,
       widget_class: "xs-mt-30",
       page: "home_1",
       widget_title: "Шинэ зар",
       footer_link: [{ link: "/listing_01", link_title: "Орон сууц худалдаж авах" }, { link: "/listing_02", link_title: "Кондо худалдаж авах" }, { link: "listing_03", link_title: "Байшин түрээслэх" }, { link: "listing_04", link_title: "Үйлдвэрийн байр түрээслэх" }, { link: "/listing_05", link_title: "Вилл худалдаж авах" }, { link: "/listing_06", link_title: "Оффис түрээслэх" },]
    },

   // home two

   {
      id: 1,
      page: "home_3",
       widget_title: "Холбоосууд",
       footer_link: [{ link: "/", link_title: "Нүүр" }, { link: "/dashboard/membership", link_title: "Гишүүнчлэл" }, { link: "/about_us_01", link_title: "Бидний тухай" }, { link: "/blog_01", link_title: "Блог" }, { link: "/blog_02", link_title: "Ажлын байр" }, { link: "/pricing_02", link_title: "Үнэ төлөвлөгөө" }, { link: "/dashboard/dashboard-index", link_title: "Удирдлагын самбар" },]
    },
    {
       id: 2,
       widget_class: "col-xxl-3 col-xl-4",
       page: "home_3",
       widget_title: "Хууль эрх зүй",
       footer_link: [{ link: "/faq", link_title: "Үйлчилгээний нөхцөл" }, { link: "/faq", link_title: "Күүки" }, { link: "/faq", link_title: "Нууцлалын бодлого" }, { link: "/faq", link_title: "Түгээмэл асуултууд" },]
    },
    {
       id: 3,
       page: "home_3",
       widget_title: "Шинэ зар",
       footer_link: [{ link: "/listing_01", link_title: "Орон сууц худалдаж авах" }, { link: "/listing_02", link_title: "Кондо худалдаж авах" }, { link: "listing_03", link_title: "Байшин түрээслэх" }, { link: "listing_04", link_title: "Үйлдвэрийн байр түрээслэх" }, { link: "/listing_05", link_title: "Вилл худалдаж авах" }, { link: "/listing_06", link_title: "Оффис түрээслэх" },]
    },

   // home four

   {
      id: 1,
      page: "home_4",
      widget_class: "col-lg-2",
       widget_title: "Холбоосууд",
       footer_link: [{ link: "/", link_title: "Нүүр" }, { link: "/dashboard/membership", link_title: "Гишүүнчлэл" }, { link: "/about_us_01", link_title: "Бидний тухай" }, { link: "/blog_01", link_title: "Блог" },]
    },
    {
       id: 2,
       widget_class: "col-xl-2 col-lg-3",
       page: "home_4",
       widget_title: "Шинэ зар",
       footer_link: [{ link: "/listing_01", link_title: "Орон сууц худалдаж авах" }, { link: "/listing_02", link_title: "Кондо худалдаж авах" }, { link: "listing_03", link_title: "Байшин түрээслэх" }, { link: "listing_04", link_title: "Үйлдвэрийн байр түрээслэх" }, { link: "/listing_05", link_title: "Вилл худалдаж авах" }, { link: "/listing_06", link_title: "Оффис түрээслэх" },]
    },
    {
       id: 3,
       widget_class: "col-xl-2 col-lg-3",
       page: "home_4",
       widget_title: "Хууль эрх зүй",
      footer_link: [{ link: "/faq", link_title: "Terms & conditions" }, { link: "/faq", link_title: "Cookie" }, { link: "/faq", link_title: "Privacy policy" }, { link: "/faq", link_title: "Faq’s" },]
   },

   // home five

   {
      id: 1,
      page: "home_5",
      widget_class: "col-lg-3 ms-auto",
      widget_class2: "ps-xl-5",
       widget_title: "Холбоосууд",
       footer_link: [{ link: "/", link_title: "Нүүр" }, { link: "/dashboard/membership", link_title: "Гишүүнчлэл" }, { link: "/about_us_01", link_title: "Бидний тухай" }, { link: "/blog_01", link_title: "Блог" }, { link: "/blog_02", link_title: "Ажлын байр" }, { link: "/pricing_02", link_title: "Үнэ төлөвлөгөө" }, { link: "/dashboard/dashboard-index", link_title: "Удирдлагын самбар" },]
    },
    {
       id: 2,
       widget_class: "col-lg-3",
       page: "home_5",
       widget_title: "Хууль эрх зүй",
       footer_link: [{ link: "/faq", link_title: "Үйлчилгээний нөхцөл" }, { link: "/faq", link_title: "Күүки" }, { link: "/faq", link_title: "Нууцлалын бодлого" }, { link: "/faq", link_title: "Түгээмэл асуултууд" },]
    },
    {
       id: 3,
       widget_class: "col-lg-2",
       page: "home_5",
       widget_title: "Шинэ зар",
       footer_link: [{ link: "/listing_01", link_title: "Орон сууц худалдаж авах" }, { link: "/listing_02", link_title: "Кондо худалдаж авах" }, { link: "listing_03", link_title: "Байшин түрээслэх" }, { link: "listing_04", link_title: "Үйлдвэрийн байр түрээслэх" }, { link: "/listing_05", link_title: "Вилл худалдаж авах" }, { link: "/listing_06", link_title: "Оффис түрээслэх" },]
    },
]

export default footer_data;