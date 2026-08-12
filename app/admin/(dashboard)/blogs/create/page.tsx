"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateBlog.css";

export default function CreateBlog() {
  const router = useRouter();

  const [categories, setCategories] = useState<any[]>([]);

  const [form, setForm] = useState({
    categoryId: "",
    title: "",
    slug: "",
    author: "",
    authorRole: "",
    authorImage: "",
    authorLink: "",
    date: "",
    image: "",
    articleOne: "",
    articleTwo: "",
  });

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Category fetch error:", error);
      });
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          categoryId: Number(form.categoryId),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Create blog error:", data);
        alert("Failed to create blog");
        return;
      }

      console.log("Blog created:", data);

      router.push("/admin/blogs");
    } catch (error) {
      console.error("Request error:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="create-blog-page">
      <div className="create-blog-container">

        <h1>Create Blog</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Category</label>

            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Blog Title</label>

            <input
              name="title"
              value={form.title}
              placeholder="Blog title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Blog Slug</label>

            <input
              name="slug"
              value={form.slug}
              placeholder="Blog slug"
              onChange={handleChange}
              required
            />
          </div>

          <h2>Author Information</h2>

          <div className="form-group">
            <label>Author Name</label>

            <input
              name="author"
              value={form.author}
              placeholder="Author name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Author Role</label>

            <input
              name="authorRole"
              value={form.authorRole}
              placeholder="Educational equity advocate"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Author Image URL</label>

            <input
              name="authorImage"
              value={form.authorImage}
              placeholder="Author image URL"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Discover More URL</label>

            <input
              name="authorLink"
              value={form.authorLink}
              placeholder="Author page URL"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Blog Image URL</label>

            <input
              name="image"
              value={form.image}
              placeholder="Blog image URL"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Article One</label>

            <textarea
              name="articleOne"
              value={form.articleOne}
              placeholder="Write article content..."
              onChange={handleChange}
              rows={6}
            />
          </div>

          <div className="form-group">
            <label>Article Two</label>

            <textarea
              name="articleTwo"
              value={form.articleTwo}
              placeholder="Write more article content..."
              onChange={handleChange}
              rows={6}
            />
          </div>

          <button type="submit">
            Create Blog
          </button>

        </form>
      </div>
    </div>
  );
}