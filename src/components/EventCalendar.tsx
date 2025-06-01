"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-bg-card dark:bg-dark-card rounded-lg p-6">
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-md border border-gray-300 dark:border-gray-700"
      // calendarType="US"
      />

      <div className="flex justify-between items-center mt-8 mb-6">
        <h1 className="text-xl font-semibold dark:text-dark-text">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-5">
        {events.map(({ id, title, time, description }) => (
          <article
            key={id}
            className="rounded-md border-2 border-gray-100 dark:border-gray-700 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple dark:bg-gray-800 p-5"
          >
            <header className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-700 dark:text-gray-300">{title}</h2>
              <time className="text-xs text-gray-400 dark:text-gray-500">{time}</time>
            </header>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
