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
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold dark:text-dark-text">
        {type === "create" ? "Create Lesson" : "Update Lesson"}
      </h2>

      <input
        type="text"
        placeholder="Lesson Title"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Subject"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Teacher"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
        required
      />

      <input
        type="date"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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

export default LessonForm;
