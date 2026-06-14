interface DataType{
   id:number;
   page:string;
   class_name:string;
   date:string;
   info_name:string;
   info_time:number;
   title:string;
   data_delay_time?:string;
}

const blog_data:DataType[]=[
{
   id:1,
   page:"home_2",
   class_name:"blog-item-1",
    date:"2 САР 09",
   info_name:"Rashed Ka .",
   info_time:6,
       title:"Үл хөдлөх хөрөнгөд хөрөнгө оруулах 13 зөвлөгөө.",
},
{
   id:2,
   page:"home_2",
   class_name:"blog-item-2",
   date:"8 САР 12",
   info_name:"Болорчимэг . ",
   info_time:7,
   title:"Орон сууц сонгохдоо анхаарах зүйлс.",
   data_delay_time:"0.1s",
},
{
   id:1,
   page:"home_4",
   class_name:"blog-item-1",
   date:"08 JAN",
   info_name:"Mark Quins . ",
   info_time:8,
   title:"Print, publishing qui visual ux layout mockups.",
},
{
   id:2,
   page:"home_4",
   class_name:"blog-item-2",
   date:"17 AUG",
   info_name:"Rashed Kabir . ",
   info_time:7,
   title:"Designer’s Checklist for Every UX/UI Project.",
   data_delay_time:"0.1s",
},

// home_4

{
   id:1,
   page:"home_4",
   class_name:"blog-item-1",
   date:"08 JAN",
   info_name:"Mark Quins . ",
   info_time:8,
   title:"Print, publishing qui visual ux layout mockups.",
},
{
   id:2,
   page:"home_4",
   class_name:"blog-item-2",
   date:"17 AUG",
   info_name:"Rashed Kabir . ",
   info_time:7,
   title:"Designer’s Checklist for Every UX/UI Project.",
},
{
   id:3,
    page:"home_4",
    class_name:"blog-item-3",
    date:"9 САР 21",
    info_name:"Бат-Эрдэнэ . ",
    info_time:8,
    title:"Үл хөдлөх хөрөнгөд хөрөнгө оруулах 13 зөвлөгөө.",
 },
]

export default blog_data;