
"use client";

import { ReactNode } from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { FaChalkboard, FaChartPie, FaUserCheck } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

type StatCard = {
  title: string;
  value: string;
  metricDelta?: string;
  positiveMetric?: boolean;
  icon: ReactNode;
  className?: string;
  colors?: {
    bgColor?: string;
    iconColor?: string;
  };
};

type StatCardsProps = {
  cards?: StatCard[];
  isGrid?: boolean;
  columns?: number;
  showMetricDelta?: boolean;
  className?: string;
  cardClassName?: string;
  isLoading?: boolean;
  showIcons?: boolean;
  layoutOrientation?: "vertical" | "horizontal";
};

type SingleStatCardProps = {
  card: StatCard;
  showMetricDelta: boolean;
  isLoading: boolean;
  className?: string;
  isGridItem?: boolean;
  showIcons?: boolean;
  layoutOrientation?: "vertical" | "horizontal";
};

const DEFAULT_CARDS = [
  {
    title: "Total Metrics",
    value: "1,567",
    icon: <FaChalkboard />,
    colors: { bgColor: "bg-blue-100", iconColor: "text-blue-600" },
    metricDelta: "0.15",
    positiveMetric: true,
  },
  {
    title: "Performance",
    value: "91%",
    icon: <FaChartPie />,
    colors: { bgColor: "bg-green-100", iconColor: "text-green-600" },
    metricDelta: "0.45",
    positiveMetric: true,
  },
  {
    title: "User Engagement",
    value: "75%",
    icon: <FaUserCheck />,
    colors: { bgColor: "bg-yellow-100", iconColor: "text-yellow-600" },
    metricDelta: "0.05",
    positiveMetric: true,
  },
];

export default function StatCards3({
  cards = DEFAULT_CARDS,
  isGrid = false,
  columns = 2,
  className = "",
  cardClassName = "",
  showMetricDelta = true,
  isLoading = false,
  showIcons = true,
  layoutOrientation = "vertical",
}: StatCardsProps) {
  // Responsive grid classes
  const gridClass = `grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-${Math.min(
    columns,
    4
  )} gap-4 ${className}`;

  // Responsive flex layout - switches to wrap on mobile
  const flexClass = `flex flex-wrap sm:flex-nowrap gap-4 max-lg:flex-col w-full ${className}`;

  return (
    <div className={isGrid ? gridClass : flexClass}>
      {cards.map((card, index) => (
        <SingleCard
          key={index}
          card={card}
          showMetricDelta={showMetricDelta}
          isLoading={isLoading}
          className={`${cardClassName}  ${
            !isGrid ? "w-full sm:w-auto  sm:flex-1 min-w-[200px]" : ""
          }`}
          isGridItem={isGrid}
          showIcons={showIcons}
          layoutOrientation={layoutOrientation}
        />
      ))}
    </div>
  );
}

function SingleCard({
  card,
  showMetricDelta,
  isLoading,
  className = "",
  isGridItem = true,
  showIcons = true,
  layoutOrientation,
}: SingleStatCardProps) {
  // Default colors if not provided
  const colors = card.colors || {
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  };

  return (
    <div
      className={isGridItem ? "w-full border" : "w-full sm:w-auto sm:flex-1  "}
    >
      <Card
        className={`p-6     ${layoutOrientation === "vertical" ? "items-center" : "flex-col gap-5"} flex gap-3 h-full  ${className}`}
      >
        {showIcons && (
          <div className="flex w-14 h-[53px]   justify-center shrink-0">
            <div
              className={`w-full h-full rounded-md flex items-center justify-center text-xl sm:text-2xl font-bold ${
                colors.bgColor || "bg-primary/10"
              } ${colors.iconColor || "text-primary"}`}
            >
              {card.icon}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-2 sm:gap-4">
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-xl font-bold mt-2">
              {card.title}
            </span>
            <div>
              {isLoading ? (
                <Skeleton className="w-[80px] h-[32px] sm:w-[100px] sm:h-[36px] rounded-md dark:bg-neutral-800" />
              ) : (
                <div className="text-sm sm:text-base opacity-65   sm:mt-[8px]">
                  {card.value}
                </div>
              )}
            </div>
          </div>

          <div
            className={`text-sm ${showMetricDelta ? "visible" : "hidden"}   ${
              card.positiveMetric ? "text-green-600" : "text-red-600"
            } text-muted-foreground flex items-center gap-1 self-end sm:self-auto`}
          >
            {isLoading ? (
              <Skeleton className="w-[40px] h-[20px] sm:w-[50px] sm:h-[25px] rounded-sm dark:bg-neutral-800" />
            ) : (
              <span className="flex items-center gap-1">
                {card.positiveMetric ? <MdArrowUpward /> : <MdArrowDownward />}
                <span>{card.metricDelta}</span>
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

