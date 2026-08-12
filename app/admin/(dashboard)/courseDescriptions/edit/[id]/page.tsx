"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditCourseDescription.css";

interface Course {
  id: number;
  title: string;
}

export default function EditCourseDescription({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const [descriptionId, setDescriptionId] = useState<number | null>(null);

  const [courses, setCourses] = useState<Course[]>([]);

  const [courseId, setCourseId] = useState("");

  const [descriptionOne, setDescriptionOne] = useState("");

  const [descriptionTwo, setDescriptionTwo] = useState("");

  useEffect(() => {
    async function loadData() {
      const { id } = await params;

      setDescriptionId(Number(id));

      // Load Courses
      const courseRes = await fetch("/api/courses");
      const courseData = await courseRes.json();
      setCourses(courseData);

      // Load Description
      const descriptionRes = await fetch(
        `/api/courseDescriptions/${id}`
      );

      const description = await descriptionRes.json();

      setCourseId(description.courseId.toString());
      setDescriptionOne(description.descriptionOne || "");
      setDescriptionTwo(description.descriptionTwo || "");
    }

    loadData();
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!descriptionId) return;

    const res = await fetch(
      `/api/courseDescriptions/${descriptionId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: Number(courseId),
          descriptionOne,
          descriptionTwo,
        }),
      }
    );

    if (res.ok) {
      alert("Course Description Updated Successfully!");
      router.push("/admin/courseDescriptions");
    } else {
      alert("Failed to update description.");
    }
  };

  return (
    <div className="create-description-page">

      <h1>Edit Course Description</h1>

      <form onSubmit={handleSubmit}>

        <label>Course</label>

        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        >
          <option value="">Select Course</option>

          {courses.map((course) => (
            <option
              key={course.id}
              value={course.id}
            >
              {course.title}
            </option>
          ))}
        </select>

        <label>Description One</label>

        <textarea
          value={descriptionOne}
          onChange={(e) =>
            setDescriptionOne(e.target.value)
          }
          rows={5}
          required
        />

        <label>Description Two</label>

        <textarea
          value={descriptionTwo}
          onChange={(e) =>
            setDescriptionTwo(e.target.value)
          }
          rows={5}
          required
        />

        <button type="submit">
          Update Description
        </button>

      </form>

    </div>
  );
}