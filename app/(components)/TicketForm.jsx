"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }
    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 md:w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required
          value={formData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          id=""
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Not started">Not started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value="Create Ticket"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default TicketForm;
