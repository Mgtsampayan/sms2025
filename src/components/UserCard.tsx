"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { userCard } from "@/variants/userCard";

type UserCardProps = {
  type: "student" | "teacher" | "parent" | "staff";
};

const badgeMap: Record<UserCardProps["type"], { bg: string; text: string }> = {
  student: {
    bg: "bg-green-400 dark:bg-green-600",
    text: "text-white dark:text-green-100",
  },
  teacher: {
    bg: "bg-purple-400 dark:bg-purple-600",
    text: "text-white dark:text-purple-100",
  },
  parent: {
    bg: "bg-yellow-400 dark:bg-yellow-600",
    text: "text-white dark:text-yellow-100",
  },
  staff: {
    bg: "bg-blue-400 dark:bg-blue-600",
    text: "text-white dark:text-blue-100",
  },
};

const UserCard = ({ type }: UserCardProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const badge = badgeMap[type];

  return (
    <div className={userCard({ type })}>
      <div className="flex justify-between items-center">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide ${badge.bg} ${badge.text}`}
        >
          2024/25
        </span>
        <Image src="/more.png" alt="options" width={20} height={20} />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-extrabold leading-none">1,234</h1>
        <h2 className="capitalize text-sm font-medium mt-1">{type}s</h2>
      </div>
    </div>
  );
};

export default UserCard;
