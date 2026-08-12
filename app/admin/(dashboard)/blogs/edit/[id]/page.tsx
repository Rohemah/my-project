"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./EditBlog.css";

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  const [form, setForm] = useState({
    title: "",
    slug: "",

    // Author
    author: "",
    authorRole: "",
    authorImage: "",
    authorLink: "",

    date: "",
    image: "",
    articleOne: "",
    articleTwo: "",
  });

  const [loading, setLoading] = useState(true);

  // GET BLOG DATA
  useEffect(() => {
    async function getBlog() {
      try {
        const res = await fetch(`/api/blogs/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();

        setForm({
          title: data.title || "",
          slug: data.slug || "",

          author: data.author || "",
          authorRole: data.authorRole || "",
          authorImage: data.authorImage || "",
          authorLink: data.authorLink || "",

          date: data.date
            ? data.date.substring(0, 10)
            : "",

          image: data.image || "",
          articleOne: data.articleOne || "",
          articleTwo: data.articleTwo || "",
        });
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getBlog();
    }
  }, [id]);

  // INPUT CHANGE
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  // UPDATE BLOG
  async function updateBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        throw new Error("Failed to update blog");
      }

      alert("Blog Updated Successfully");

      router.push("/admin/blogs");

    } catch (error) {
      console.error("Error updating blog:", error);

      alert("Failed to update blog");
    }
  }

  // LOADING
  if (loading) {
    return (
      <div className="edit-blog-page">
        <div className="edit-card">
          <p>Loading Blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-blog-page">

      <div className="edit-card">

        <h1>Edit Blog</h1>

        <form
          className="edit-form"
          onSubmit={updateBlog}
        >

          {/* BLOG TITLE */}

          <div className="form-group">

            <label htmlFor="title">
              Blog Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter Blog Title"
              value={form.title}
              onChange={handleChange}
              required
            />

          </div>


          {/* BLOG SLUG */}

          <div className="form-group">

            <label htmlFor="slug">
              Blog Slug
            </label>

            <input
              id="slug"
              type="text"
              name="slug"
              placeholder="Enter Blog Slug"
              value={form.slug}
              onChange={handleChange}
              required
            />

          </div>


          {/* AUTHOR SECTION */}

          <div className="section-title">
            <h2>Author Information</h2>

            <p>
              Add the author's information displayed on the blog.
            </p>
          </div>


          {/* AUTHOR NAME */}

          <div className="form-group">

            <label htmlFor="author">
              Author Name
            </label>

            <input
              id="author"
              type="text"
              name="author"
              placeholder="Enter Author Name"
              value={form.author}
              onChange={handleChange}
              required
            />

          </div>


          {/* AUTHOR ROLE */}

          <div className="form-group">

            <label htmlFor="authorRole">
              Author Role
            </label>

            <input
              id="authorRole"
              type="text"
              name="authorRole"
              placeholder="e.g. Educational equity advocate"
              value={form.authorRole}
              onChange={handleChange}
            />

          </div>


          {/* AUTHOR IMAGE */}

          <div className="form-group">

            <label htmlFor="authorImage">
              Author Image URL
            </label>

            <input
              id="authorImage"
              type="text"
              name="authorImage"
              placeholder="Enter Author Image URL"
              value={form.authorImage}
              onChange={handleChange}
            />

          </div>


          {/* DISCOVER MORE */}

          <div className="form-group">

            <label htmlFor="authorLink">
              Discover More URL
            </label>

            <input
              id="authorLink"
              type="text"
              name="authorLink"
              placeholder="Enter Author Page URL"
              value={form.authorLink}
              onChange={handleChange}
            />

          </div>


          {/* PUBLICATION DATE */}

          <div className="form-group">

            <label htmlFor="date">
              Publication Date
            </label>

            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

          </div>


          {/* MAIN BLOG IMAGE */}

          <div className="form-group">

            <label htmlFor="image">
              Main Blog Image URL
            </label>

            <input
              id="image"
              type="text"
              name="image"
              placeholder="Enter Main Image URL"
              value={form.image}
              onChange={handleChange}
            />

          </div>


          {/* ARTICLE ONE */}

          <div className="form-group">

            <label htmlFor="articleOne">
              Introduction / Article One
            </label>

            <textarea
              id="articleOne"
              name="articleOne"
              placeholder="Enter first article"
              value={form.articleOne}
              onChange={handleChange}
              rows={6}
            />

          </div>


          {/* ARTICLE TWO */}

          <div className="form-group">

            <label htmlFor="articleTwo">
              Article Two
            </label>

            <textarea
              id="articleTwo"
              name="articleTwo"
              placeholder="Enter second article"
              value={form.articleTwo}
              onChange={handleChange}
              rows={8}
            />

          </div>


          {/* UPDATE BUTTON */}

          <button
            type="submit"
            className="submit-btn"
          >
            Update Blog
          </button>

        </form>

      </div>

    </div>
  );
}