"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "./BlogListItem.css";

interface BlogListItem {
  id: number;
  itemText: string;

  list: {
    id: number;
    listHeading: string;

    blog: {
      id: number;
      title: string;
    };

    section: {
      id: number;
      heading: string | null;
      displayOrder: number;
    } | null;
  };
}

export default function BlogListItemsPage() {
  const [items, setItems] = useState<BlogListItem[]>([]);

  const [loading, setLoading] = useState(true);

  // =========================
  // GET ALL ITEMS
  // =========================

  useEffect(() => {
    async function getItems() {
      try {
        const res = await fetch("/api/blogListItems");

        if (!res.ok) {
          throw new Error("Failed to fetch items");
        }

        const data = await res.json();

        setItems(data);
      } catch (error) {
        console.error(
          "Error fetching blog list items:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    getItems();
  }, []);

  // =========================
  // DELETE ITEM
  // =========================

  async function deleteItem(id: number) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `/api/blogListItems/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to delete item"
        );
      }

      setItems((currentItems) =>
        currentItems.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.error(
        "Error deleting item:",
        error
      );

      alert("Failed to delete item.");
    }
  }

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="blog-list-item-page">
        <div className="loading">
          Loading Blog List Items...
        </div>
      </div>
    );
  }

  // =========================
  // PAGE
  // =========================

  return (
    <div className="blog-list-item-page">

      {/* HEADER */}

      <div className="page-header">

        <div>
          <h1>Blog List Items</h1>

          <p>
            Manage individual items inside
            your blog lists.
          </p>
        </div>

        <Link
          href="/admin/blogListItems/create"
          className="add-btn"
        >
          + Add Item
        </Link>

      </div>


      {/* EMPTY */}

      {items.length === 0 ? (

        <div className="empty-state">

          <h2>
            No Blog List Items Found
          </h2>

          <p>
            Create your first list item.
          </p>

          <Link
            href="/admin/blogListItems/create"
            className="add-btn"
          >
            Create Item
          </Link>

        </div>

      ) : (

        /* TABLE */

        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Blog</th>

                <th>Section</th>

                <th>List</th>

                <th>Item</th>

                <th>Actions</th>

              </tr>

            </thead>


            <tbody>

              {items.map((item) => (

                <tr key={item.id}>

                  {/* ID */}

                  <td>
                    {item.id}
                  </td>


                  {/* BLOG */}

                  <td>

                    {item.list?.blog?.title ||
                      "Unknown Blog"}

                  </td>


                  {/* SECTION */}

                  <td>

                    {item.list?.section ? (
                      <>
                        Section{" "}
                        {
                          item.list.section
                            .displayOrder
                        }

                        {item.list.section
                          .heading && (
                          <>
                            {" — "}
                            {
                              item.list
                                .section
                                .heading
                            }
                          </>
                        )}
                      </>
                    ) : (
                      "No section"
                    )}

                  </td>


                  {/* LIST */}

                  <td>

                    <strong>
                      {item.list
                        ?.listHeading ||
                        "No heading"}
                    </strong>

                  </td>


                  {/* ITEM */}

                  <td className="item-text">

                    {item.itemText}

                  </td>


                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link
                        href={`/admin/blogListItems/edit/${item.id}`}
                        className="edit-link"
                      >
                        Edit
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteItem(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}