"use client";

import { useState } from "react";

type ParentFormProps = {
    type: "create" | "update";
    data?: {
        id?: number;
        name?: string;
        email?: string;
        phone?: string;
        address?: string;
        students?: string[];
    };
};

// Consistent styling classes aligned with your theme
const INPUT_CLASS =
    "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark";
const TEXTAREA_CLASS =
    "p-2 border border-border-color dark:border-dark-border rounded-md bg-bg-card dark:bg-dark-card text-text-primary dark:text-dark-text placeholder:text-text-secondary dark:placeholder:text-dark-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurpleDark resize-none";
const BUTTON_CLASS =
    "bg-lamaYellow dark:bg-lamaYellowDark hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-max self-end transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400";
const TITLE_CLASS =
    "text-lg font-semibold text-text-primary dark:text-dark-text";
const FORM_CLASS = "p-4 flex flex-col gap-4 bg-bg-card dark:bg-dark-card";

const ParentForm = ({ type, data }: ParentFormProps) => {
    const [name, setName] = useState(data?.name || "");
    const [email, setEmail] = useState(data?.email || "");
    const [phone, setPhone] = useState(data?.phone || "");
    const [address, setAddress] = useState(data?.address || "");
    const [students, setStudents] = useState(data?.students?.join(", ") || "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            id: data?.id || Date.now(),
            name,
            email,
            phone,
            address,
            students: students
                .split(",")
                .map((s) => s.trim())
                .filter((s) => s.length > 0),
        };

        if (type === "create") {
            console.log("Creating parent:", payload);
            // TODO: Add API call or state update here
        } else {
            console.log("Updating parent:", payload);
            // TODO: Add API call or state update here
        }
    };

    return (
        <form onSubmit={handleSubmit} className={FORM_CLASS}>
            <h2 className={TITLE_CLASS}>
                {type === "create" ? "Create Parent" : "Update Parent"}
            </h2>

            <input
                type="text"
                placeholder="Parent Name"
                className={INPUT_CLASS}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email Address"
                className={INPUT_CLASS}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="tel"
                placeholder="Phone Number"
                className={INPUT_CLASS}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <textarea
                placeholder="Address"
                className={TEXTAREA_CLASS}
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Student Names (comma-separated)"
                className={INPUT_CLASS}
                value={students}
                onChange={(e) => setStudents(e.target.value)}
                required
            />

            <button type="submit" className={BUTTON_CLASS}>
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    );
};

export default ParentForm;
