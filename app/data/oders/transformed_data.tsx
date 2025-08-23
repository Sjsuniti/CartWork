
import { Order, OrderStatus, Payment } from "./order_types";
import { Badge } from "@/components/ui/badge";
//import { TbBrandPayPal } from "react-icons/tb";
import { HiCreditCard } from "react-icons/hi";
import { formatDate, formatPrice } from "../../utils/shared_utilities";
import { FaCcMastercard } from "react-icons/fa";




// ✅ Removed duplicate type redeclaration
// ❌ You were redeclaring Order, OrderStatus, Payment again inside this file

export function TransformOrders(initial_orders_data: Order[]) {
  return initial_orders_data.map((order) => ({
    ...order,
    initialStatus: order.status, // Keep the original statu
    status: <>{renderOrderStatusBadge(order.status as OrderStatus)}</>,
    payment: <>{renderPaymentBadge(order.payment as Payment)}</>,
    orderId: <span className="text-gray-500">{order.orderId}</span>,
    amount: <span className="font-medium">{formatPrice(order.amount)}</span>,
    createdAt: <span>{formatDate(order.createdAt)}</span>,
  }));
}

// ✅ Define renderOrderStatusBadge (missing in your code)
function renderOrderStatusBadge(status: OrderStatus) {
  const statusMap: Record<OrderStatus, JSX.Element> = {
    Delivered: <Badge className="bg-green-100 text-green-600">Delivered</Badge>,
    Pending: <Badge className="bg-yellow-100 text-yellow-600">Pending</Badge>,
    return: <Badge className="bg-red-100 text-red-600">Return</Badge>,
  };

  return (
    <Badge 
     className={`${statusMap[status]} shadow-none hover:${statusMap[status]} select-none`}
     >
        {status}
     </Badge>
);
}

function renderPaymentBadge(payment: Payment) {
  const paymentMap: Record<Payment, JSX.Element> = {
    UPI: <Badge variant="secondary">UPI</Badge>,
    "Credit Card": (
      <div className="flex items-center gap-1">
        <HiCreditCard /> Credit Card
      </div>
    ),
    "Master Card": (
      <div className="flex items-center gap-1">
        <FaCcMastercard /> Debit Card
      </div>
    ),
  };

  return (
    <div className="bg-promary/10 text-primary p-[3px] w-fit px-2 rounded-md gap-1 flex items-center">
        {paymentMap[payment]}
        <span>{payment}</span>
    </div>
  );
}

