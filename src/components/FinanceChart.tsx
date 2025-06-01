"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 3490, expense: 4300 },
  { name: "Aug", income: 3490, expense: 4300 },
  { name: "Sep", income: 3490, expense: 4300 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 3490, expense: 4300 },
  { name: "Dec", income: 3490, expense: 4300 },
];

const FinanceChart = () => {
  return (
    <div className="bg-bg-card border border-border-color rounded-xl w-full h-full p-4 shadow-sm dark:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-text-primary">Finance</h2>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border-color)"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "var(--text-secondary)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{ fill: "var(--text-secondary)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
              borderColor: "var(--border-color)",
              borderRadius: "0.5rem",
            }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="var(--color-lamaSky)"
            strokeWidth={4}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="var(--color-lamaPurple)"
            strokeWidth={4}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
