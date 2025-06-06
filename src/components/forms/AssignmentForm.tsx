"use client";

import { useState } from "react";

type AssignmentFormProps = {
    type: "create" | "update";
    data?: {
        id?: number;
        subject?: string;
        class?: string;
        teacher?: string;
        dueDate?: string;
        title?: string;
        description?: string;
        instructions?: string;
        totalMarks?: number;
        submissionType?: "online" | "offline" | "both";
        priority?: "low" | "medium" | "high";
    };
};

// Consistent styling classes aligned with your theme system
const INPUT_CLASS = "p-3 border border-border-color dark:border-dark-border rounded-lg bg-bg-card dark:bg-dark-card text-text-primary dark:text-text-primary placeholder:text-text-secondary dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurple focus:border-transparent transition-all duration-200";

const SELECT_CLASS = "p-3 border border-border-color dark:border-dark-border rounded-lg bg-bg-card dark:bg-dark-card text-text-primary dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurple focus:border-transparent transition-all duration-200";

const TEXTAREA_CLASS = "p-3 border border-border-color dark:border-dark-border rounded-lg bg-bg-card dark:bg-dark-card text-text-primary dark:text-text-primary placeholder:text-text-secondary dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-lamaPurple dark:focus:ring-lamaPurple focus:border-transparent resize-none transition-all duration-200";

const BUTTON_CLASS = "bg-lamaYellow dark:bg-lamaYellow hover:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-dark-card shadow-md hover:shadow-lg";

const CANCEL_BUTTON_CLASS = "bg-bg-secondary dark:bg-dark-secondary hover:bg-gray-300 dark:hover:bg-gray-600 text-text-primary dark:text-text-primary font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-dark-card";

const TITLE_CLASS = "text-xl font-bold text-text-primary dark:text-text-primary mb-2";

const LABEL_CLASS = "text-sm font-medium text-text-primary dark:text-text-primary mb-2 block";

const FORM_CLASS = "p-6 flex flex-col gap-5 bg-bg-card dark:bg-dark-card rounded-xl shadow-soft";

const PRIORITY_COLORS = {
    low: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700",
    medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700",
    high: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700"
};

const AssignmentForm = ({ type, data }: AssignmentFormProps) => {
    const [formData, setFormData] = useState({
        subject: data?.subject || "",
        class: data?.class || "",
        teacher: data?.teacher || "",
        dueDate: data?.dueDate || "",
        title: data?.title || "",
        description: data?.description || "",
        instructions: data?.instructions || "",
        totalMarks: data?.totalMarks || 100,
        submissionType: data?.submissionType || "online" as const,
        priority: data?.priority || "medium" as const,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                id: data?.id || Date.now(),
                ...formData,
                totalMarks: Number(formData.totalMarks),
            };

            if (type === "create") {
                console.log("Creating assignment:", payload);
                // Add your API call here
            } else {
                console.log("Updating assignment:", payload);
                // Add your API call here
            }

            // Reset form if creating
            if (type === "create") {
                setFormData({
                    subject: "",
                    class: "",
                    teacher: "",
                    dueDate: "",
                    title: "",
                    description: "",
                    instructions: "",
                    totalMarks: 100,
                    submissionType: "online",
                    priority: "medium",
                });
            }
        } catch (error) {
            console.error("Error submitting assignment:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={FORM_CLASS}>
            <div className="mb-4">
                <h2 className={TITLE_CLASS}>
                    {type === "create" ? "Create New Assignment" : "Update Assignment"}
                </h2>
                <p className="text-text-secondary dark:text-text-secondary text-sm">
                    {type === "create"
                        ? "Create a new assignment for your students"
                        : "Update the assignment information below"
                    }
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="title" className={LABEL_CLASS}>
                        Assignment Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={INPUT_CLASS}
                        placeholder="Enter assignment title"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject" className={LABEL_CLASS}>
                        Subject *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={SELECT_CLASS}
                        required
                    >
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Physical Education">Physical Education</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="class" className={LABEL_CLASS}>
                        Class *
                    </label>
                    <select
                        id="class"
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        className={SELECT_CLASS}
                        required
                    >
                        <option value="">Select Class</option>
                        <option value="1A">1A</option>
                        <option value="1B">1B</option>
                        <option value="2A">2A</option>
                        <option value="2B">2B</option>
                        <option value="3A">3A</option>
                        <option value="3B">3B</option>
                        <option value="4A">4A</option>
                        <option value="4B">4B</option>
                        <option value="5A">5A</option>
                        <option value="5B">5B</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="teacher" className={LABEL_CLASS}>
                        Teacher *
                    </label>
                    <select
                        id="teacher"
                        name="teacher"
                        value={formData.teacher}
                        onChange={handleInputChange}
                        className={SELECT_CLASS}
                        required
                    >
                        <option value="">Select Teacher</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Michael Johnson">Michael Johnson</option>
                        <option value="Sarah Williams">Sarah Williams</option>
                        <option value="David Brown">David Brown</option>
                        <option value="Emily Davis">Emily Davis</option>
                        <option value="Robert Wilson">Robert Wilson</option>
                        <option value="Lisa Anderson">Lisa Anderson</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dueDate" className={LABEL_CLASS}>
                        Due Date *
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        className={INPUT_CLASS}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="totalMarks" className={LABEL_CLASS}>
                        Total Marks *
                    </label>
                    <input
                        type="number"
                        id="totalMarks"
                        name="totalMarks"
                        value={formData.totalMarks}
                        onChange={handleInputChange}
                        className={INPUT_CLASS}
                        min="1"
                        max="1000"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="submissionType" className={LABEL_CLASS}>
                        Submission Type *
                    </label>
                    <select
                        id="submissionType"
                        name="submissionType"
                        value={formData.submissionType}
                        onChange={handleInputChange}
                        className={SELECT_CLASS}
                        required
                    >
                        <option value="online">Online Submission</option>
                        <option value="offline">Offline Submission</option>
                        <option value="both">Both Online & Offline</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="priority" className={LABEL_CLASS}>
                        Priority Level
                    </label>
                    <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className={`${SELECT_CLASS} ${PRIORITY_COLORS[formData.priority]}`}
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="description" className={LABEL_CLASS}>
                    Assignment Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className={TEXTAREA_CLASS}
                    rows={4}
                    placeholder="Describe what students need to do for this assignment..."
                    required
                />
            </div>

            <div>
                <label htmlFor="instructions" className={LABEL_CLASS}>
                    Detailed Instructions
                </label>
                <textarea
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    className={TEXTAREA_CLASS}
                    rows={6}
                    placeholder="Provide step-by-step instructions, requirements, grading criteria, etc..."
                />
            </div>

            <div className="flex gap-4 justify-end pt-4 border-t border-border-color dark:border-dark-border">
                <button
                    type="button"
                    className={CANCEL_BUTTON_CLASS}
                    onClick={() => {
                        if (type === "create") {
                            setFormData({
                                subject: "",
                                class: "",
                                teacher: "",
                                dueDate: "",
                                title: "",
                                description: "",
                                instructions: "",
                                totalMarks: 100,
                                submissionType: "online",
                                priority: "medium",
                            });
                        }
                    }}
                >
                    {type === "create" ? "Reset" : "Cancel"}
                </button>
                <button
                    type="submit"
                    className={BUTTON_CLASS}
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? (type === "create" ? "Creating..." : "Updating...")
                        : (type === "create" ? "Create Assignment" : "Update Assignment")
                    }
                </button>
            </div>
        </form>
    );
};

export default AssignmentForm;