"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateCourseDescription.css";

interface Course {
  id: number;
  title: string;
}

export default function CreateCourseDescriptionPage() {
  const router = useRouter();

  const [courses, setCourses] = useState<Course[]>([]);

  const [courseId, setCourseId] = useState("");
  const [descriptionOne, setDescriptionOne] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/courseDescriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: Number(courseId),
        descriptionOne,
        descriptionTwo,
      }),
    });

    if (res.ok) {
      alert("Course Description Created Successfully!");
      router.push("/admin/courseDescriptions");
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="create-description-page">
      <h1>Create Course Description</h1>

      <form onSubmit={handleSubmit}>

        <label>Course</label>

        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        >
          <option value="">Select Course</option>

          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>

        <label>Description One</label>

        <textarea
          value={descriptionOne}
          onChange={(e) => setDescriptionOne(e.target.value)}
          rows={5}
          required
        />

        <label>Description Two</label>

        <textarea
          value={descriptionTwo}
          onChange={(e) => setDescriptionTwo(e.target.value)}
          rows={5}
          required
        />

        <button type="submit">
          Save Description
        </button>

      </form>
    </div>
  );
}