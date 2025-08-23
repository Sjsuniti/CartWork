import { ChartCard1 , XaxisData, YaxisData} from "@/app/components/chart-cards"

// type XaxisData = {
//   key: string
//   values: string[]
//   formatter?: (value: string) => string
// }

// type YaxisData = {
//   key: string
//   label: string
//   color: string
//   opacity: string
//   values: number[]
// }

type ChartData = { 
  xAxisData: XaxisData
  yAxisData: YaxisData  // <-- make this an array
}

export default function ChartCardArea() {
  const chartData: ChartData = {
    xAxisData: {
      key: "month",
      values: ["January", "February", "March", "April", "May", "June"],
      formatter: (value: string) => value.slice(0, 3),
    },
    yAxisData: [
      {
        key: "desktop",
        label: "Desktop",
        color: "violet",
        opacity: "25%",
        values: [1000, 2000, 1500, 3000, 2500, 4000],
      },
      {
        key: "mobile",
        label: "Mobile",
        color: "silver",
        opacity: "25%",
        values: [800, 1500, 1200, 2000, 1800, 2500],
      },
    ],
  }

  return (
    <div className="mt-5">
      <ChartCard1
        title="Order History"
        description="Monthly revenue and average order value history"
        className="flex-1 border-none shadow-none p-2"
        chartCustomSize={360}
        xAxisData={chartData.xAxisData}
        yAxisData={chartData.yAxisData}   // ✅ no error now
        showChartLegend={true}
        footerText={{
          title: "Data Updated daily",
          subTitle: "Excluding canceled orders",
        }}
      />
    </div>
  )
}
