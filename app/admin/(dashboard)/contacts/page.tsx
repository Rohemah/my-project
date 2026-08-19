"use client";

import { useEffect, useState } from "react";
import "./Contact.css";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // GET ALL CONTACT MESSAGES
  // =====================================================

  useEffect(() => {
    async function getContacts() {
      try {
        const res = await fetch("/api/contact");

        if (!res.ok) {
          throw new Error("Failed to fetch contact messages");
        }

        const data: Contact[] = await res.json();

        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    }

    getContacts();
  }, []);

  // =====================================================
  // DELETE CONTACT MESSAGE
  // =====================================================

  async function deleteContact(id: number) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this contact message?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete contact message");
      }

      setContacts((currentContacts) =>
        currentContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);

      alert("Failed to delete contact message");
    }
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="contact-page">
        <p>Loading Messages...</p>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="contact-page">

      {/* HEADER */}

      <div className="contact-header">
        <div>
          <h1>Contact Messages</h1>

          <p>
            View messages submitted through the contact form.
          </p>
        </div>
      </div>

      {/* EMPTY STATE */}

      {contacts.length === 0 ? (
        <div className="empty-state">
          <h2>No Messages Found</h2>

          <p>
            There are no contact messages yet.
          </p>
        </div>
      ) : (
        /* TABLE */

        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>

                  <td>
                    {contact.id}
                  </td>

                  <td>
                    <strong>
                      {contact.name}
                    </strong>
                  </td>

                  <td>
                    <a
                      href={`mailto:${contact.email}`}
                      className="email-link"
                    >
                      {contact.email}
                    </a>
                  </td>

                  <td>
                    {contact.subject || "-"}
                  </td>

                  <td className="message-cell">
                    {contact.message}
                  </td>

                  <td>
                    {new Date(
                      contact.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteContact(contact.id)
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