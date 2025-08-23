//  FaCheckCircle,
//   FaShoppingBag,
//   FaTimesCircle,
// } from "react-icons/fa"; // 4.8k (gzipped: 2k)
// import { Button } from "@/components/ui/button";
// import Card1 from "@app/components/stat-cards-1";
// import {
//   initial_orders_data,
//   orderListHeader,
// } from "@app/data/orders/initial_orders_data";
// import { TransformOrders } from "@app/data/orders/transformed_data";

// export default function OrderPage() {
//   const initial_orderCards = [
//     {
//       title: "Total Orders",
//       value: "38", // ✅ updated here
//       icon: <FaShoppingBag className="w-5 h-5" />, // or <FaShoppingCart />
//       description: "All orders received",
//     },
//     {
//       title: "New Orders",
//       value: "2",
//       icon: <FaBoxOpen className="w-5 h-5" />,
//       description: "Orders awaiting processing",
//     },
//     {
//       title: "Delivered Orders",
//       value: "8",
//       icon: <FaCheckCircle className="w-5 h-5" />,
//       description: "Successfully delivered orders",
//     },
//     {
//       title: "Canceled Orders",
//       value: "2",
//       icon: <FaTimesCircle className="w-5 h-5" />,
//       description: "Canceled or returned orders",
//     },
//   ];
// }


// const [search, setSearch] = useState("");

// return (
//   <div className="px-6 pt-6">
//     <Card1
//       cards={initial_orderCards}
//       className="p-0 px-0"
//       cardClassName="border-none p-4 px-5"
//     />

//     <div className="mb-5">
//       <DataTable
//         headers={orderListHeader}
//         rows={TransformOrders(initial_orders_data)}
//         showActionsColumn={false}
//         rowHeight={44}
//         title="Orders List"
//         className="p-5 border-none rounded-lg shadow-none "
//         showBorderLine={false}
//         description={`${initial_orderCards.length} Orders`}
//         filterBy={["category", "status", "payment"]}
//         pagination={{
//           rowsPerPage: 8,
//           paginationRowsArray: [2, 4, 8, 10, 14, 20, 30, 50],
//         }}
//         columnsToHide={["initialStatus"]}
//         sortOrder="desc"
//         search={{
//             keyToSearchBy: "orderId",
//             placeholder: "Search By Order Id",
//             searchValue: search,
//             setSearchValue: setSearch,
//         }}
//         showCheckboxes={{ enable: false }}
//         showSortingButtons={true}
//         sort={{defaultProperty: "createdAt"}}
//         callToAction={<Button>Export</Button>}
//       />
//     </div>
//   </div>
// );


import {DataTable } from "@/app/components/data-table"
//import ChartCard1 from "./chart-card1";

import { useState } from "react";
import { FaCheckCircle, FaShoppingBag, FaTimesCircle, FaBoxOpen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card1 from "@/app/components/stat-cards-1";
import {
  initial_orders_data,
  orderListHeader,
} from "@/app/data/oders/initial_orders_data";
import { TransformOrders } from "@/app/data/oders/transformed_data";

export default function OrderPage() {
  const [search, setSearch] = useState("");

  const initial_orderCards = [
    {
      title: "Total Orders",
      value: "38",
      icon: <FaShoppingBag className="w-5 h-5" />,
      description: "All orders received",
    },
    {
      title: "New Orders",
      value: "2",
      icon: <FaBoxOpen className="w-5 h-5" />,
      description: "Orders awaiting processing",
    },
    {
      title: "Delivered Orders",
      value: "18",
      icon: <FaCheckCircle className="w-5 h-5" />,
      description: "Successfully delivered orders",
    },
    {
      title: "Canceled Orders",
      value: "2",
      icon: <FaTimesCircle className="w-5 h-5" />,
      description: "Canceled or returned orders",
    },
  ];

  return (
    <div className="px-6 pt-6">
      <Card1
        cards={initial_orderCards}
        className="p-0 px-0"
        cardClassName="border-none p-4 px-5"
      />

      <div className="mb-5">
        <DataTable
          headers={orderListHeader}
          rows={TransformOrders(initial_orders_data)}
          showActionsColumn={false}
          rowHeight={44}
          title="Orders List"
          className="p-5 border-none rounded-lg shadow-none "
          showBorderLine={false}
          
          description={` 38 Orders`}
          filterBy={["category", "status", "payment"]}
          pagination={{
            rowsPerPage: 8,
            paginationRowsArray: [2, 4, 8, 10, 14, 20, 30, 50],
          }}
          columnsToHide={["initialStatus"]}
          sortOrder="desc"
          search={{
            keyToSearchBy: "orderId",
            placeholder: "Search By Order Id",
            searchValue: search,
            setSearchValue: setSearch,
          }}
          showCheckboxes={{ enable: false }}
          showSortingButtons={true}
          sort={{ defaultProperty: "createdAt" }}
          callToAction={<Button>Export</Button>}
        />
      </div>
    </div>
  );
}












