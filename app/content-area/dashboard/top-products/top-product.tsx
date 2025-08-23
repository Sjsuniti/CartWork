"use client"

import { ListCard } from "@/app/components/list-card"
import { TopProductsData } from "./top-products-data"

export default function TopProductsArea() {
    return(
        <ListCard 
            data={TopProductsData}
            description="Top 3 Products"
            skeletonRow={3}
            className="p-2 border-none shadow-none "
            rowHeight={80}
            isLoading={false}
            title={
                <span className="text-2xl font-semibold text-neutral-800">
                    Top Products
                </span>
            }
            />
    );
}