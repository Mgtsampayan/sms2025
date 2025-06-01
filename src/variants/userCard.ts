// src/variants/userCard.ts
import { tv } from "tailwind-variants";

export const userCard = tv({
    base: "rounded-xl p-6 flex-1 min-w-[140px] flex flex-col justify-between transition-colors duration-300 shadow-sm dark:shadow-md border",
    variants: {
        type: {
            student:
                "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-900 dark:text-green-300",
            teacher:
                "bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-300",
            parent:
                "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700 text-yellow-900 dark:text-yellow-300",
            staff:
                "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-300",
        },
    },
    defaultVariants: {
        type: "student",
    },
});
