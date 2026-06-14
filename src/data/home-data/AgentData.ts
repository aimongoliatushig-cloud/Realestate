import { StaticImageData } from "next/image";

import agentThumb_1 from "@/assets/images/agent/img_01.jpg";
import agentThumb_2 from "@/assets/images/agent/img_02.jpg";
import agentThumb_3 from "@/assets/images/agent/img_03.jpg";
import agentThumb_4 from "@/assets/images/agent/img_04.jpg";
import agentThumb_5 from "@/assets/images/agent/img_05.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   desc: string;
}

const agent_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: agentThumb_1,
      title: "Э.Оюунтөмөр",
      desc: "Гүйцэтгэх захирал",
   },
   {
      id: 2,
      page: "home_1",
      thumb: agentThumb_2,
      title: "Б.Хатанбаатар",
      desc: "Үл хөдлөх хөрөнгийн зууч",
   },
   {
      id: 3,
      page: "home_1",
      thumb: agentThumb_3,
      title: "Л.Мөнхцэцэг",
      desc: "Маркетингийн мэргэжилтэн",
   },
   {
      id: 4,
      page: "home_1",
      thumb: agentThumb_4,
      title: "Г.Ариунзаяа",
      desc: "Брокер",
   },
   {
      id: 5,
      page: "home_1",
      thumb: agentThumb_5,
      title: "Ц.Батчимэг",
      desc: "Брокер",
   },
]

export default agent_data;