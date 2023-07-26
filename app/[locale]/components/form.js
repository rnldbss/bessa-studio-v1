"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log("Data", message, name, email);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
