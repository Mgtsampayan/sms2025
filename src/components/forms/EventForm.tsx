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
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold dark:text-dark-text">
        {type === "create" ? "Create Event" : "Update Event"}
      </h2>

      <input
        type="text"
        placeholder="Event Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Location"
        className="input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="input"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

export default EventForm;
