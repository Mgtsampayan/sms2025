import { tv } from "tailwind-variants";

export const userCard = tv({
    base: "rounded-xl p-4 md:p-6 flex-1 min-w-[180px] sm:min-w-[200px] flex flex-col justify-between transition-colors duration-300 shadow-soft hover:shadow-medium border border-border-color",
    variants: {
        type: {
            student: "bg-green-50 dark:bg-bg-card text-green-700 dark:text-text-secondary",
            teacher: "bg-lamaPurpleLight dark:bg-lamaPurpleDark text-purple-700 dark:text-lamaPurple",
            parent: "bg-lamaYellowLight dark:bg-lamaYellowDark text-yellow-700 dark:text-lamaYellow",
            staff: "bg-lamaSkyLight dark:bg-lamaSkyDark text-sky-700 dark:text-lamaSky",
        },
    },
});