"use client";

import { useTheme } from "next-themes";

const announcements = [
  {
    id: 1,
    title: "Important Update for Students",
    date: "2025-01-01",
    description: "Please submit your assignments before the deadline.",
    bgLight: "bg-lamaSkyLight",
    bgDark: "dark:bg-green-900",
    textLight: "text-green-900",
    textDark: "dark:text-green-300",
    dateBgLight: "bg-white",
    dateBgDark: "dark:bg-green-800",
    dateTextLight: "text-gray-400",
    dateTextDark: "dark:text-green-200",
  },
  {
    id: 2,
    title: "Teacher's Meeting",
    date: "2025-01-15",
    description: "All teachers must attend the quarterly meeting.",
    bgLight: "bg-lamaPurpleLight",
    bgDark: "dark:bg-violet-900",
    textLight: "text-violet-900",
    textDark: "dark:text-violet-300",
    dateBgLight: "bg-white",
    dateBgDark: "dark:bg-violet-800",
    dateTextLight: "text-gray-400",
    dateTextDark: "dark:text-violet-200",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "2025-02-01",
    description: "Conference scheduled for next month.",
    bgLight: "bg-lamaYellowLight",
    bgDark: "dark:bg-yellow-900",
    textLight: "text-yellow-900",
    textDark: "dark:text-yellow-300",
    dateBgLight: "bg-white",
    dateBgDark: "dark:bg-yellow-800",
    dateTextLight: "text-gray-400",
    dateTextDark: "dark:text-yellow-200",
  },
  {
    id: 4,
    title: "Staff Training Session",
    date: "2025-02-10",
    description: "Mandatory training for all staff members.",
    bgLight: "bg-blue-100",
    bgDark: "dark:bg-blue-900",
    textLight: "text-blue-900",
    textDark: "dark:text-blue-300",
    dateBgLight: "bg-white",
    dateBgDark: "dark:bg-blue-800",
    dateTextLight: "text-gray-400",
    dateTextDark: "dark:text-blue-200",
  },
];

const Announcements = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-bg-card dark:bg-dark-card p-6 rounded-lg shadow-sm transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Announcements
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {announcements.map(
          ({
            id,
            title,
            date,
            description,
            bgLight,
            bgDark,
            textLight,
            textDark,
            dateBgLight,
            dateBgDark,
            dateTextLight,
            dateTextDark,
          }) => (
            <div
              key={id}
              className={`${theme === "dark" ? bgDark : bgLight} p-5 rounded-md shadow-sm transition-colors duration-300`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className={`text-lg font-semibold ${theme === "dark" ? textDark : textLight}`}>
                  {title}
                </h2>
                <span
                  className={`text-xs rounded px-2 py-1 font-mono ${theme === "dark" ? dateBgDark : dateBgLight} ${theme === "dark" ? dateTextDark : dateTextLight}`}
                >
                  {date}
                </span>
              </div>
              <p className={`text-sm opacity-90 ${theme === "dark" ? textDark : textLight}`}>
                {description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Announcements;
