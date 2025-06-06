import { tv } from "tailwind-variants";

export const userCard = tv({
    base: "rounded-xl p-4 md:p-6 flex-1 min-w-[180px] sm:min-w-[200px] flex flex-col justify-between transition-colors duration-300 shadow-soft hover:shadow-medium border border-border-color dark:border-dark-border",
    variants: {
        type: {
            student: "bg-green-50 dark:bg-dark-card border-green-200 dark:border-dark-border text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-dark-secondary",
            teacher: "bg-lamaPurpleLight dark:bg-dark-card border-purple-200 dark:border-dark-border text-purple-700 dark:text-lamaPurple hover:bg-purple-100 dark:hover:bg-dark-secondary",
            parent: "bg-lamaYellowLight dark:bg-dark-card border-yellow-200 dark:border-dark-border text-yellow-700 dark:text-lamaYellow hover:bg-yellow-100 dark:hover:bg-dark-secondary",
            staff: "bg-lamaSkyLight dark:bg-dark-card border-sky-200 dark:border-dark-border text-sky-700 dark:text-lamaSky hover:bg-sky-100 dark:hover:bg-dark-secondary",
        },
    },
});