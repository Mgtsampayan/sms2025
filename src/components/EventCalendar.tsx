"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onChange(new Date()); // initialize date on client
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents mismatch

  return (
    <div className="bg-bg-card dark:bg-dark-card rounded-lg p-6">
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-md border border-border-color"
      />

      <div className="flex justify-between items-center mt-8 mb-6">
        <h1 className="text-xl font-semibold text-text-primary">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-5">
        {events.map(({ id, title, time, description }) => (
          <article
            key={id}
            className="rounded-md border-2 border-border-color border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple dark:bg-bg-secondary p-5"
          >
            <header className="flex justify-between items-center">
              <h2 className="font-semibold text-text-primary">{title}</h2>
              <time className="text-xs text-text-secondary">{time}</time>
            </header>
            <p className="mt-2 text-sm text-text-secondary">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
