"use client";

import { useState } from "react";

type SubjectFormProps = {
  type: "create" | "update";
  data?: {
    id?: number;
    name?: string;
    code?: string;
    description?: string;
  };
};

const SubjectForm = ({ type, data }: SubjectFormProps) => {
  const [name, setName] = useState(data?.name || "");
  const [code, setCode] = useState(data?.code || "");
  const [description, setDescription] = useState(data?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: data?.id || Date.now(),
      name,
      code,
      description,
    };

    if (type === "create") {
      console.log("Creating subject:", payload);
    } else {
      console.log("Updating subject:", payload);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold dark:text-dark-text">
        {type === "create" ? "Create Subject" : "Update Subject"}
      </h2>

      <input
        type="text"
        placeholder="Subject Name"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Subject Code"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="p-2 border rounded-md dark:bg-dark-card dark:border-gray-600"
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

export default SubjectForm;
