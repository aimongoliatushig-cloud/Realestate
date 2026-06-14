interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Нүүр",
        link: "/",
        sub_menus: [
            
        ],
    },
    
    {
        id: 2,
        has_dropdown: true,
        title: "Үл хөдлөх хөрөнгө",
        link: "#",
        sub_menus: [
            
            { link: "/listing_07", title: "Худалдаа" },
            { link: "/listing_05", title: "Түрээс" },
            { link: "/listing_details_06", title: "Дэлгэрэнгүй" },
            { link: "/listing_09", title: "Бүх үл хөдлөх хөрөнгө" },
            
        ],
    },


    {
        id: 3,
        has_dropdown: true,
        title: "Төслүүд",
        link: "#",
        sub_menus: [
            { link: "/project_01", title: "Төслүүд" },
            { link: "/contact", title: "Холбоо барих" },
            { link: "/faq", title: "Түгээмэл асуултууд" },
            
        ],
    },




    {
        id: 4,
        has_dropdown: true,
        title: "Мэдээ",
        link: "#",
        sub_menus: [
            { link: "/blog_01", title: "Мэдээ нэг" },
            { link: "/blog_02", title: "Мэдээ хоёр" },
            { link: "/blog_03", title: "Мэдээ гурав" },
            { link: "/blog_details", title: "Мэдээ дэлгэрэнгүй" },
        ],
    },

    {
        id: 5,
        has_dropdown: false,
        title: "Үйлчилгээ",
        link: "/service_01",
        sub_menus: [],
    },

    {
        id: 6,
        has_dropdown: false,
        title: "Холбоо барих",
        link: "/contact",
        sub_menus: [],
    },
];
export default menu_data;
