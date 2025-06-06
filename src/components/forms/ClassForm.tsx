"use client";

import { useState } from "react";

type ClassFormProps = {
  type: "create" | "update";
  data?: {
    id?: number;
    name?: string;
    capacity?: number;
    grade?: number;
    supervisor?: string;
  };
};

// Consistent styling classes aligned with your theme
const INPUT_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark";
const BUTTON_CLASS = "bg-lamaYellow dark:bg-lamaYellowDark hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-max self-end transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400";
const TITLE_CLASS = "text-lg font-semibold text-text-primary dark:text-dark-text";
const FORM_CLASS = "p-4 flex flex-col gap-4 bg-bg-card dark:bg-dark-card";

const ClassForm = ({ type, data }: ClassFormProps) => {
  const [name, setName] = useState(data?.name || "");
  const [capacity, setCapacity] = useState(data?.capacity || 0);
  const [grade, setGrade] = useState(data?.grade || 1);
  const [supervisor, setSupervisor] = useState(data?.supervisor || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(),
      name,
      capacity,
      grade,
      supervisor,
    };

    if (type === "create") {
      console.log("Creating class:", payload);
      // TODO: Add API call or state update here
    } else {
      console.log("Updating class:", payload);
      // TODO: Add API call or state update here
    }
  };

  return (
    <form onSubmit={handleSubmit} className={FORM_CLASS}>
      <h2 className={TITLE_CLASS}>
        {type === "create" ? "Create Class" : "Update Class"}
      </h2>

      <input
        type="text"
        placeholder="Class Name"
        className={INPUT_CLASS}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Capacity"
        className={INPUT_CLASS}
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
        min={1}
        required
      />

      <input
        type="number"
        placeholder="Grade"
        className={INPUT_CLASS}
        value={grade}
        onChange={(e) => setGrade(parseInt(e.target.value))}
        min={1}
        max={12}
        required
      />

      <input
        type="text"
        placeholder="Supervisor"
        className={INPUT_CLASS}
        value={supervisor}
        onChange={(e) => setSupervisor(e.target.value)}
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

export default ClassForm;