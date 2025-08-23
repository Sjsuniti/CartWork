import { initial_orders_data} from "./initial_orders_data" ;

export type Order = (typeof initial_orders_data)[number];
export type OrderStatus = "Delivered" |"Pending" | "return";
export type Payment = "UPI" | "Credit Card" | "Master Card"