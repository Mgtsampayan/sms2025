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

const AnnouncementForm = ({ type, data }: AnnouncementFormProps) => {
  const [title, setTitle] = useState(data?.title || "");
  const [message, setMessage] = useState(data?.message || "");
  const [date, setDate] = useState(data?.date || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(), // fallback ID for mock
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
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold dark:text-dark-text">
        {type === "create" ? "Create Announcement" : "Update Announcement"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        required
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        rows={4}
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        required
      />

      <button
        type="submit"
        className="bg-lamaYellow dark:bg-yellow-700 text-white py-2 px-4 rounded-md w-max self-end"
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
