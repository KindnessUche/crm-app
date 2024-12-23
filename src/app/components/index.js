import { PiRocketLaunch } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { LuNotebookPen } from "react-icons/lu";
import { HiOutlineFolder } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { AiOutlineFileSync } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { LuFileClock } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { PiFileCloud } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";
import { title } from "process";
import Activity from "./Activity";

export const layoutData = [
  {
    header: "My Work",
    data: [
      {
        title: "Sales Accelerator",
        icon: PiRocketLaunch,
        address: "/sales-accelerator",
        id: 1,
      },
      { title: "Dashboard", icon: RxDashboard, address: "./dashboards", id: 2 },
      {
        title: "Activities",
        icon: LuNotebookPen,
        address: "/activities",
        id: 3,
      },
    ],
    id: 1,
  },
  {
    header: "Customers",
    data: [
      {
        title: "Accounts",
        icon: HiOutlineFolder,
        address: "/accounts",
        id: 1,
      },
      {
        title: "Contacts",
        icon: IoPersonOutline,
        address: "/contacts",
        id: 2,
      },
    ],
    id: 2,
  },
  {
    header: "Sales",
    data: [
      {
        title: "Leads",
        icon: LiaPhoneVolumeSolid,
        address: "/sales/leads",
        id: 1,
      },
      {
        title: "Opportunities",
        icon: AiOutlineFileSync,
        address: "/sales/opportunities",
        id: 2,
      },
      {
        title: "Competitors",
        icon: BsPersonGear,
        address: "/sales/competitors",
        id: 3,
      },
    ],
    id: 3,
  },
  {
    header: "Collateral",
    data: [
      { title: "Quotes", icon: LuFileClock, address: "/quotes", id: 1 },
      { title: "Orders", icon: FiFileText, address: "/orders", id: 2 },
      {
        title: "Invoices",
        icon: LiaFileInvoiceDollarSolid,
        address: "/invoices",
        id: 3,
      },
      { title: "Products", icon: BsBoxSeam, address: "/products", id: 4 },
      {
        title: "Sales Literature",
        icon: BiBarChartSquare,
        address: "/sales-literature",
        id: 5,
      },
    ],
    id: 4,
  },
  {
    header: "Marketing",
    data: [
      {
        title: "Marketing Lists",
        icon: PiFileCloud,
        address: "/marketing-lists",
        id: 1,
      },
      {
        title: "Quick Campaigns",
        icon: BsMegaphone,
        address: "/quick-campaigns",
        id: 2,
      },
    ],
    id: 5,
  },
];
export const statistics = [
  { type: "Won", amount: "$18m", color: "bg-green-300", id: 1 },
  { type: "Committed", amount: "$8m", color: "bg-sky-300", id: 2 },
  { type: "Best case", amount: "$7m", color: "bg-purple-400", id: 3 },
  { type: "Qualified", amount: "$3m", color: "bg-amber-400", id: 4 },
  { type: "Leads", amount: "$75m", color: "bg-gray-200", id: 5 },
];

export const ClientDatas = [
  {
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    img: "/images/dam.jpg",
    msg: "Jane may be interested in upgrading expresso machines for her in-store coffee shops",
    m1: "Expand business",
    m2: "High buying intent",
    id: 1,
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development",
    company: "Contoso Coffee",
    img: "/images/kini.jpg",
    msg: "Preparefor high-buying intent meeting Copilot scheduled for 2PM regarding service upgrading service contract",
    m1: "Upcoming meeting",
    m2: "Due today",
    id: 2,
  },
  {
    name: "Josiah Love",
    title: "Operations Manager",
    company: "Microsoft",
    img: "/images/rachel.jpg",
    msg: "Josiah is exploring ways to optimize operations for increased efficiency in cloud services.",
    m1: "Operational efficiency",
    m2: "Cloud services",
    id: 3,
  },
  {
    name: "Harrison Curtis",
    title: "Software Engineer",
    company: "Meta Platforms",
    img: "/images/charles.jpg",
    msg: "Harrison is interested in learning about integrating AI tools to enhance user engagement.",
    m1: "AI integration",
    m2: "User engagement",
    id: 4,
  },
  {
    name: "Jermaine Berrett",
    title: "Senior Software Engineer",
    company: "Amazon",
    img: "/images/rica.jpg",
    msg: "Jermaine is focused on improving backend systems for the upcoming holiday season.",
    m1: "Backend optimization",
    m2: "Holiday readiness",
    id: 5,
  },
  {
    name: "Gerald Stephens",
    title: "Chief Engineer",
    company: "YouTube",
    img: "/images/dam.jpg",
    msg: "Gerald is spearheading the development of a new feature to improve video streaming quality.",
    m1: "Feature development",
    m2: "Streaming quality",
    id: 6,
  },
  {
    name: "Alex Baker",
    title: "CEO",
    company: "Guinness Plc",
    img: "/images/kini.jpg",
    msg: "Alex is exploring innovative strategies to expand Guinness's presence in emerging markets.",
    m1: "Market expansion",
    m2: "Innovation strategies",
    id: 7,
  },
];
export const DataKeyActivities = [
  {
    timeLeft: "8 days",
    company: "Woodland Bank",
    activity: "Cafe A100 for Woodland Bank",
    price: "$280,000",
    action: "Review draft and reply to Chris Naiedo",
    id: 1,
  },
  {
    timeLeft: "12 days",
    company: "Fabrikam",
    activity: "Partnership opportunity for Fabrikam",
    price: "$5,000,000",
    action: "Prepare me for Fabrikams key stakeholder meeting",
    id: 2,
  },
  {
    timeLeft: "13 days",
    company: "Google",
    activity: "Project in team Google",
    price: "$600,000",
    action: "Participate in GDSC projects",
    id: 3,
  },
  {
    timeLeft: "18 days",
    company: "Microsoft",
    activity: "Seminar for Microsoft",
    price: "$12,000,000",
    action: "Hold a seminar for the MLSA group",
    id: 4,
  },
  {
    timeLeft: "26 days",
    company: "Facebook",
    activity: "New project for Facebook",
    price: "$115,000",
    action: "Open a Facebook account",
    id: 5,
  },
];
export const TableData = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    date: "4/02/2024 12:00 PM",
    id: 1,
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    date: "3/30/2024 7:45 AM",
    id: 2,
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on ExpressoMaster",
    status: "New",
    date: "3/28/2024 3:30 PM",
    id: 3,
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    date: "3/25/2024 11:05 AM",
    id: 4,
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    date: "3/23/2024 4:50 PM",
    id: 5,
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    date: "3/21/2024 10:20 AM",
    id: 6,
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    date: "3/19/2024 1:15 PM",
    id: 7,
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    date: "3/17/2024 8:00 AM",
    id: 8,
  },
  {
    name: "Lilly Pyles",
    topic: "CafeA100 bulk rate",
    status: "New",
    date: "3/13/2024 2:45 PM",
    id: 9,
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    date: "3/10/2024 9:30 AM",
    id: 10,
  },
];
