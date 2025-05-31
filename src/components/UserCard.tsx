import Image from "next/image";

const typeColors = {
  student: {
    lightBg: "bg-green-50", // very light green
    darkBg: "bg-green-900", // dark green
    borderLight: "border-green-200",
    borderDark: "border-green-700",
    textLight: "text-green-900",
    textDark: "text-green-300",
    badgeBgLight: "bg-green-400",
    badgeBgDark: "bg-green-600",
    badgeTextLight: "text-white",
    badgeTextDark: "text-green-100",
  },
  teacher: {
    lightBg: "bg-purple-50",
    darkBg: "bg-purple-900",
    borderLight: "border-purple-200",
    borderDark: "border-purple-700",
    textLight: "text-purple-900",
    textDark: "text-purple-300",
    badgeBgLight: "bg-purple-400",
    badgeBgDark: "bg-purple-600",
    badgeTextLight: "text-white",
    badgeTextDark: "text-purple-100",
  },
  parent: {
    lightBg: "bg-yellow-50",
    darkBg: "bg-yellow-900",
    borderLight: "border-yellow-200",
    borderDark: "border-yellow-700",
    textLight: "text-yellow-900",
    textDark: "text-yellow-300",
    badgeBgLight: "bg-yellow-400",
    badgeBgDark: "bg-yellow-600",
    badgeTextLight: "text-white",
    badgeTextDark: "text-yellow-100",
  },
  staff: {
    lightBg: "bg-blue-50",
    darkBg: "bg-blue-900",
    borderLight: "border-blue-200",
    borderDark: "border-blue-700",
    textLight: "text-blue-900",
    textDark: "text-blue-300",
    badgeBgLight: "bg-blue-400",
    badgeBgDark: "bg-blue-600",
    badgeTextLight: "text-white",
    badgeTextDark: "text-blue-100",
  },
};

const UserCard = ({ type }: { type: string }) => {
  const colors =
    typeColors[type as keyof typeof typeColors] || typeColors.student;

  return (
    <div
      className={`
        rounded-xl p-6 flex-1 min-w-[140px]
        border ${colors.borderLight} dark:${colors.borderDark}
        ${colors.lightBg} dark:${colors.darkBg}
        shadow-sm dark:shadow-md
        flex flex-col justify-between
        transition-colors duration-300
      `}
    >
      <div className="flex justify-between items-center">
        <span
          className={`
            text-xs font-semibold px-3 py-1 rounded-full shadow-sm
            ${colors.badgeBgLight} dark:${colors.badgeBgDark}
            ${colors.badgeTextLight} dark:${colors.badgeTextDark}
            tracking-wide
          `}
        >
          2024/25
        </span>
        <Image src="/more.png" alt="options" width={20} height={20} />
      </div>

      <div className="mt-6">
        <h1
          className={`
            text-3xl font-extrabold leading-none
            ${colors.textLight} dark:${colors.textDark}
          `}
        >
          1,234
        </h1>
        <h2
          className={`
            capitalize text-sm font-medium mt-1
            ${colors.textLight} dark:${colors.textDark}
          `}
        >
          {type}s
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
