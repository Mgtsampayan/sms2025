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
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold dark:text-dark-text">
        {type === "create" ? "Create Class" : "Update Class"}
      </h2>

      <input
        type="text"
        placeholder="Class Name"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Capacity"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
        min={1}
        required
      />

      <input
        type="number"
        placeholder="Grade"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={grade}
        onChange={(e) => setGrade(parseInt(e.target.value))}
        min={1}
        max={12}
        required
      />

      <input
        type="text"
        placeholder="Supervisor"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={supervisor}
        onChange={(e) => setSupervisor(e.target.value)}
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

export default ClassForm;
