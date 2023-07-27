"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Err", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
// isSubmitted ? (
//   <div>
//     <h1>success</h1>
//   </div>
// ) :
