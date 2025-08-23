 
 

"use client"

import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";

type Card = {
  title: string;
  value: string;
  icon: ReactNode;
};

type CardsProps = {
  cards?: Card[];
  className?: string; // Additional className for container
  cardClassName?: string; // Additional className for individual cards
};

type SingleStatCardProps = {
  card: Card;
  className?: string;
};

export default function Card1({
  cards = [
    {
      title: "Total Metrics",
      value: "1,234",
      icon: <FaChartBar />,
    },
    {
      title: "Performance",
      value: "87%",
      icon: <FaChartPie />,
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      icon: <FaChartLine />,
    },
  ],
  className = "",
  cardClassName = "",
}: CardsProps) {
  // Generate responsive grid class based on columns prop
  const gridClass = `flex max-sm:flex-col   gap-6 p-6 ${className}`;

  return (
    <div className={gridClass}>
      {cards.map((card, index) => (
        <SingleCard key={index} card={card} className={cardClassName} />
      ))}
    </div>
  );
}

function SingleCard({ card, className = "" }: SingleStatCardProps) {
  return (
    <Card
      className={`p-4 w-full  flex flex-col gap-2 shadow-none ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-600">
          {card.title}
        </span>
        <div
          className={`size-9 rounded-md flex items-center justify-center text-sm  
         bg-primary/10  font-bold  text-primary`}
        >
          {card.icon}
        </div>
      </div>

      {/* Amount */}
      <div className={`text-3xl font-bold`}>{card.value}</div>
    </Card>
  );
}
