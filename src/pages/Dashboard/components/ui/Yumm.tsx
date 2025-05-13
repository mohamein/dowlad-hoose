import { AiOutlineProduct } from "react-icons/ai";
import { FaSellsy } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdAnalytics, MdCategory, MdOutlinePayment } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbLayoutDashboardFilled, TbReportAnalytics } from "react-icons/tb";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        title: "Dashboard",
        icon: <TbLayoutDashboardFilled size={25} />,
      },
    ],
  },

  {
    links: [
      {
        name: "Shaqaale",
        // icon: <AiOutlineShoppingCart />,
        icon: <IoPeopleSharp size={25} />,
        // icon:<MdAnalytics />
      },
      {
        name: "Dagmooyin",
        icon: <AiOutlineProduct size={25} />,
      },

      {
        name: "Cashuur",
        icon: <FaSellsy size={25} />,
      },
      {
        name: "Dakhli",
        icon: <MdCategory size={25} />,
      },
      // {
      //   name: 'Purchases',
      //   icon: <MdOutlinePayment />,
      // },
      // {
      //   name: 'Receiveable',
      //   icon: <IoIosNotifications /> ,
      // },
      // {
      //     name: 'Payables',
      //     icon: <RiSecurePaymentLine />  ,
      //   },
      //   {
      //     name:'User',
      //     icon:<IoPeopleSharp />
      //   },
      //   {
      //     name:"Employees",
      //     icon:<IoPeopleSharp />
      //  },
      //  {
      //   name:"Expenses",
      //   icon:<MdOutlinePayment />,
      //  },
      {
        name: "Reports",
        icon: <TbReportAnalytics />,
      },
    ],
  },
];
