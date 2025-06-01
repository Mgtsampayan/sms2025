"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

// Theme-compliant chart data using CSS variables
const chartData = [
  {
    name: "Total",
    count: 106,
    fill: "var(--bg-secondary)",
  },
  {
    name: "Girls",
    count: 53,
    fill: "var(--color-lamaYellow)",
  },
  {
    name: "Boys",
    count: 53,
    fill: "var(--color-lamaSky)",
  },
];

const CountChart = () => {
  return (
    <div className="bg-bg-card border border-border-color rounded-xl w-full h-full p-4 shadow-sm dark:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-text-primary">Students</h2>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={chartData}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Icon Overlay */}
        <Image
          src="/maleFemale.png"
          alt="gender split"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "var(--color-lamaSky)" }} />
          <p className="font-bold text-text-primary">1,234</p>
          <p className="text-xs text-text-secondary">Boys (55%)</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "var(--color-lamaYellow)" }} />
          <p className="font-bold text-text-primary">1,234</p>
          <p className="text-xs text-text-secondary">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
