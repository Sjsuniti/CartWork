import { format } from "date-fns" ;

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