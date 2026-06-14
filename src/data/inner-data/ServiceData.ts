import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/images/icon/icon_69.svg";
import serviceIcon_2 from "@/assets/images/icon/icon_70.svg";
import serviceIcon_3 from "@/assets/images/icon/icon_71.svg";

interface DataType {
   id: number;
   page: string;
   icon: StaticImageData;
   title: string;
   desc: string;
   data_delay_time?: string;
   btn: string;
}[]

const service_data: DataType[] = [
   {
      id: 1,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Орон сууц худалдаж авах",
      btn: "Худалдаж авах",
      desc: "UA Properties-ийн 2 сая гаруй байшин, орон сууцнаас тохирохыг нь олоорой.",
   },
   {
      id: 2,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Орон сууц түрээслэх",
      btn: "Түрээслэх",
      desc: "Танд тохирох түрээсийн байраа манай 35+ шүүлтүүрээр хялбархан олоорой.",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Байшингаа худалдах",
      btn: "Худалдах",
      desc: "Зарлаж, худалдаж, амжилт гаргаарай - манай тэргүүлэгч агентлагтай хамт.",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Ипотекийн зээл",
      btn: "Зээл авах",
      desc: "Бага хүүтэй ипотекийн зээлийн нөхцөлөөр орон сууцаа зээлээр аваарай.",
   },
   {
      id: 5,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Зөвлөх үйлчилгээ",
      btn: "Зөвлөгөө авах",
      desc: "Мэргэжлийн зөвлөхүүд таны үл хөдлөх хөрөнгийн бүх асуудлыг шийдвэрлэнэ.",
      data_delay_time: "0.1s",
   },
   {
      id: 6,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Үл хөдлөх хөрөнгийн менежмент",
      btn: "Менежмент",
      desc: "Таны үл хөдлөх хөрөнгийг мэргэжлийн түвшинд удирдан, ашиг орлогыг нэмэгдүүлнэ.",
      data_delay_time: "0.2s",
   },
   
]

export default service_data;
