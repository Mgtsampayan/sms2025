"use client";

import { useState } from "react";

type EventFormProps = {
  type: "create" | "update";
  data?: {
    id?: number;
    name?: string;
    date?: string;
    location?: string;
    description?: string;
  };
};

// Consistent styling classes aligned with your theme
const INPUT_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark";
const TEXTAREA_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark resize-none";
const BUTTON_CLASS = "bg-lamaYellow dark:bg-lamaYellowDark hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-max self-end transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400";
const TITLE_CLASS = "text-lg font-semibold text-text-primary dark:text-dark-text";
const FORM_CLASS = "p-4 flex flex-col gap-4 bg-bg-card dark:bg-dark-card";

const EventForm = ({ type, data }: EventFormProps) => {
  const [name, setName] = useState(data?.name || "");
  const [date, setDate] = useState(data?.date || "");
  const [location, setLocation] = useState(data?.location || "");
  const [description, setDescription] = useState(data?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(), // fallback ID for mock
      name,
      date,
      location,
      description,
    };

    if (type === "create") {
      console.log("Creating event:", payload);
      // TODO: Call your backend or update global state
    } else {
      console.log("Updating event:", payload);
      // TODO: Call your backend or update global state
    }
  };

  return (
    <form onSubmit={handleSubmit} className={FORM_CLASS}>
      <h2 className={TITLE_CLASS}>
        {type === "create" ? "Create Event" : "Update Event"}
      </h2>

      <input
        type="text"
        placeholder="Event Name"
        className={INPUT_CLASS}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="date"
        className={INPUT_CLASS}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Location"
        className={INPUT_CLASS}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className={TEXTAREA_CLASS}
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className={BUTTON_CLASS}
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;