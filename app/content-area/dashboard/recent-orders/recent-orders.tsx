"use client"

import { DataTable } from "@/app/components/data-table";
import { TransformOrders } from "@/app/data/oders/transformed_data";
import {
    initial_orders_data,
    orderListHeader,

} from "@/app/data/oders/initial_orders_data";

import {Button } from "@/components/ui/button";

export default function RecentOrderTable() {
    return(
        <DataTable
            headers={orderListHeader}
            rows={TransformOrders(initial_orders_data)}
            showActionsColumn={false}
            rowHeight={36}
            title="Recent Orders"
            columnsToHide={["items"]}
            className="p-5 border-none rounded-lg shadow-none"
            showBorderLine={true}
            description={`5 Last Orders`}
            callToAction={
                <Button variant={"link"} className="p-0 border h-0">
                    See More
                </Button>
            }
        />
    )

}