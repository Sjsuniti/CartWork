"use client"

import ListCard2 from "@/app/components/list-card-2"

import { reviewsData } from "./total-reviews-data";

export default function TotalReviewsArea(){
    console.log();

    return(
        <ListCard2 
            data={reviewsData}
            title={{ label: "Reviews"}}
            description={{ label: "Overall reviews" }} 
            className=" border-none shadow-none "
            showFooter={false}
            rightSideElement={<></>}
                         
            
        />
    );
}