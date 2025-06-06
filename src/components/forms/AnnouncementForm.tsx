"use client";

import { useState } from "react";

type AnnouncementFormProps = {
  type: "create" | "update";
  data?: {
    id?: number;
    title?: string;
    message?: string;
    date?: string;
  };
};

// Consistent styling classes
const INPUT_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark";
const TEXTAREA_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark resize-none";
const BUTTON_CLASS = "bg-lamaYellow dark:bg-lamaYellowDark hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-max self-end transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400";
const TITLE_CLASS = "text-lg font-semibold text-text-primary dark:text-dark-text";
const FORM_CLASS = "p-4 flex flex-col gap-4 bg-bg-card dark:bg-dark-card";

const AnnouncementForm = ({ type, data }: AnnouncementFormProps) => {
  const [title, setTitle] = useState(data?.title || "");
  const [message, setMessage] = useState(data?.message || "");
  const [date, setDate] = useState(data?.date || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(),
      title,
      message,
      date,
    };

    if (type === "create") {
      console.log("Creating announcement:", payload);
    } else {
      console.log("Updating announcement:", payload);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={FORM_CLASS}>
      <h2 className={TITLE_CLASS}>
        {type === "create" ? "Create Announcement" : "Update Announcement"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={INPUT_CLASS}
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={TEXTAREA_CLASS}
        rows={4}
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={INPUT_CLASS}
        required
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

export default AnnouncementForm;