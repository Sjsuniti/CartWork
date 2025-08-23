import { format } from "date-fns";
import {Badge }  from "@/components/ui/badge";
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"
import { Status} from "./initial_products_data"


export function renderBadge(status: Status){
  const statusMap: Record<Status, string> ={
    Published: "bg-green-500",
    Draft: "bg-red-500",
  };

  return(
    <Badge className={`${statusMap[status]} shadow-none hover:${statusMap[status]} select-none`}>
      {status}
    </Badge>
  );
}

// utility function to render star rating
export function renderStarRating(rating: number, maxStars: number = 5) {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      // full star
      stars.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
    } else if (rating >= i - 0.5) {
      // half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 inline-block" />);
    } else {
      // empty star
      stars.push(<FaRegStar key={i} className="text-gray-400 inline-block" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}

//utility function 

export const formatDate = (dateString: string | Date) => {
  if (!dateString) return 'N/A';
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  if (isNaN(date.getTime())) return 'Invalid Date';

  return format(date, "MMM dd, yyyy");
};

export const formatPrice = (
  amount: number | string,
  currency: string = "INR"
): string => {
  let parsedAmount: number;

  if (typeof amount === "string") {
    // Remove ₹, commas, spaces
    const cleaned = amount.replace(/[₹,\s]/g, "");
    parsedAmount = parseFloat(cleaned);
  } else {
    parsedAmount = amount;
  }

  if (isNaN(parsedAmount)) return "Invalid Amount";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: parsedAmount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(parsedAmount);
};

export function truncateString(str: string, maxLength: number): string {
  if(str.length <= maxLength) return str;
  return str.substring(0, maxLength) + "...";
}


