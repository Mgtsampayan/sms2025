"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  // Dynamically get today’s date for min/max times on current day
  const today = new Date();
  const minTime = new Date(today);
  minTime.setHours(8, 0, 0, 0);
  const maxTime = new Date(today);
  maxTime.setHours(17, 0, 0, 0);

  return (
    <div className="h-full w-full rounded-xl p-4 bg-bg-card dark:bg-dark-card dark:text-dark-text">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        onView={(newView) => setView(newView)}
        style={{ height: "100%" }}
        min={minTime}
        max={maxTime}
        className="rbc-theme-overrides"
      />
    </div>
  );
};

export default BigCalendar;
