"use client";

import { useState } from "react";

type LessonFormProps = {
  type: "create" | "update";
  data?: {
    id?: number;
    title?: string;
    subject?: string;
    teacher?: string;
    date?: string;
  };
};

// Consistent styling classes aligned with your theme
const INPUT_CLASS = "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark";
const BUTTON_CLASS = "bg-lamaYellow dark:bg-lamaYellowDark hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-max self-end transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400";
const TITLE_CLASS = "text-lg font-semibold text-text-primary dark:text-dark-text";
const FORM_CLASS = "p-4 flex flex-col gap-4 bg-bg-card dark:bg-dark-card";

const LessonForm = ({ type, data }: LessonFormProps) => {
  const [title, setTitle] = useState(data?.title || "");
  const [subject, setSubject] = useState(data?.subject || "");
  const [teacher, setTeacher] = useState(data?.teacher || "");
  const [date, setDate] = useState(data?.date || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(),
      title,
      subject,
      teacher,
      date,
    };

    if (type === "create") {
      console.log("Creating lesson:", payload);
    } else {
      console.log("Updating lesson:", payload);
    }

    // TODO: Replace console.log with API call or state update
  };

  return (
    <form onSubmit={handleSubmit} className={FORM_CLASS}>
      <h2 className={TITLE_CLASS}>
        {type === "create" ? "Create Lesson" : "Update Lesson"}
      </h2>

      <input
        type="text"
        placeholder="Lesson Title"
        className={INPUT_CLASS}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Subject"
        className={INPUT_CLASS}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Teacher"
        className={INPUT_CLASS}
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
        required
      />

      <input
        type="date"
        className={INPUT_CLASS}
        value={date}
        onChange={(e) => setDate(e.target.value)}
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

export default LessonForm;