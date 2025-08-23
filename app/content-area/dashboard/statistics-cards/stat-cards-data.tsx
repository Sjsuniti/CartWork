import { FaChartLine, FaRupeeSign, FaShoppingBag } from "react-icons/fa";

export const STATISTIC_CARDS_DATA = [
  {
    title: "Total Revenue",
    value: "₹1,234,567",
    icon: <FaRupeeSign />,
    metricDelta: "0.12",
    positiveMetric: true,
    description: "Revenue this month",
  },
  {
    title: "Total Orders",
    value: "1,567",
    icon: <FaShoppingBag />,
    metricDelta: "0.15",
    positiveMetric: true,
    description: "Orders this month",
  },
  {
    title: "Avg. Order Value",
    value: "₹789",
    icon: <FaChartLine />,
    metricDelta: "-0.12",
    positiveMetric: false, // since it's down
    description: "Down from last month",
  },
];
