"use client";

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_feild}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.input_feild}>
          <label htmlFor="email">email</label>
          <input
            type="teemailxt"
            required
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          {status === "success" && (
            <p className={styles.success_msg}>Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )}

          <button type="submit">We will contact you!</button>
        </div>
      </form>
    </>
  );
}
