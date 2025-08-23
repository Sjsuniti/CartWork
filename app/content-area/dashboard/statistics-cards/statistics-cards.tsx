import StatCards3 from "@/app/components/stat-cards";
import React from "react";
import { STATISTIC_CARDS_DATA } from "./stat-cards-data";




function StatisticsCards(){
    return(
        <div>
            <StatCards3 
                cards={STATISTIC_CARDS_DATA}
                className="gap-4 border-name"
                showMetricDelta={false}
                cardClassName="border-none shadow-none rounded-2xl"
                showIcons={true}
                layoutOrientation="vertical"
            />
        </div>
    )
}

export default StatisticsCards;