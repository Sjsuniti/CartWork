import ChartCardArea from "./order-history-chart/order-history";
import StatisticsCards from "./statistics-cards/statistics-cards";
import RecentOrderTable from "./recent-orders/recent-orders";
import TopProductsArea from "./top-products/top-product";
import TotalReviewsArea from "./total-reviews/total-reviews";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col overflow-auto p-3">
        <div className="flex-1 flex p-4 gap-4 mt-8 max-xl:flex-col">
            <div className="flex-1 flex flex-col overflow-hidden gap-4">
                <StatisticsCards />
                <ChartCardArea />
            </div>
            <div className="flex flex-col gap-4">
                <TopProductsArea />
                <TotalReviewsArea />
            </div>
        </div>
      <div className="px-3">
        <RecentOrderTable />
      </div>
    </div>
  );
}
