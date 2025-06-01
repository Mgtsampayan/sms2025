"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 60, absent: 40 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 90, absent: 75 },
  { name: "Fri", present: 65, absent: 55 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-bg-card border border-border-color rounded-xl p-4 h-full shadow-sm dark:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-text-primary">
          Attendance
        </h2>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text-secondary)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
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
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "16px", paddingBottom: "24px" }}
          />
          <Bar
            dataKey="present"
            fill="var(--color-lamaYellow)"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="var(--color-lamaSky)"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
