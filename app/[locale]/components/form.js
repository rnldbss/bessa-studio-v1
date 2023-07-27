"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activeInput, setActiveInput] = useState(0);

  const handlePrevious = () => {
    if (activeInput > 0) {
      setActiveInput(activeInput - 1);
    }
  };
  const handleNext = () => {
    if (activeInput < 2) {
      setActiveInput(activeInput + 1);
    }
  };
  const variants = {
    visible: { display: "flex", opacity: 1 },
    hidden: { display: "none", opacity: 0, x: -20 },
  };

  console.log(activeInput);
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

  return isSubmitted ? (
    <div className="flex w-2/3 flex-col gap-20 sm:w-4/5 xl:w-2/3">
      <motion.span
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        className="text-2xl font-medium"
      >
        Thank you! I'll be in touch shortly.
      </motion.span>
    </div>
  ) : (
    <div className="flex w-2/3 flex-col gap-20 sm:w-4/5 xl:w-2/3">
      <h2 id="formItems" className="text-5xl font-semibold">
        Ready?
      </h2>
      <form
        onSubmit={handleSubmit}
        className="relative grid grid-cols-1 grid-rows-1 gap-4"
      >
        <motion.div
          id="formItems"
          animate={activeInput === 0 ? "visible" : "hidden"}
          variants={variants}
          className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col gap-2 text-black"
        >
          <label
            className="text-2xl font-medium dark:text-white"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-transparent outline-none"
            placeholder="Type here"
            rows={3}
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </motion.div>
        <motion.div
          id="formItems"
          animate={activeInput === 1 ? "visible" : "hidden"}
          variants={variants}
          className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col gap-2"
        >
          <label
            className="text-2xl font-medium dark:text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-transparent outline-none"
            id="name"
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </motion.div>
        <motion.div
          id="formItems"
          className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col gap-2"
          animate={activeInput === 2 ? "visible" : "hidden"}
          variants={variants}
        >
          <label
            className="text-2xl font-medium dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-transparent outline-none"
            id="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </motion.div>
        <motion.button
          id="formItems"
          animate={activeInput === 2 ? "visible" : "hidden"}
          variants={variants}
          className="absolute -bottom-[105px] right-0 flex items-center font-semibold"
          type="submit"
        >
          Submit
          <GrFormNext className="inline" />
        </motion.button>
        <div
          id="formItems"
          className="grid w-max grid-cols-3 gap-1 font-medium"
        >
          <motion.span
            animate={activeInput === 0 ? "visible" : "hidden"}
            variants={
              ({ visible: { display: "inline", opacity: 1 } },
              { hidden: { display: "none", opacity: 0, y: 5 } })
            }
            className="col-start-1 col-end-1 row-start-1 row-end-1"
          >
            1
          </motion.span>
          <motion.span
            animate={activeInput === 1 ? "visible" : "hidden"}
            variants={
              ({ visible: { display: "inline", opacity: 1 } },
              { hidden: { display: "none", opacity: 0, y: 5 } })
            }
            className="col-start-1 col-end-1 row-start-1 row-end-1"
          >
            2
          </motion.span>
          <motion.span
            animate={activeInput === 2 ? "visible" : "hidden"}
            variants={
              ({ visible: { display: "inline", opacity: 1 } },
              { hidden: { display: "none", opacity: 0, y: 5 } })
            }
            className="col-start-1 col-end-1 row-start-1 row-end-1"
          >
            3
          </motion.span>
          <span className="col-start-2 col-end-2 row-start-1 row-end-1">/</span>
          <span className="col-start-3 col-end-3 row-start-1 row-end-1">3</span>
        </div>
      </form>
      <div className="flex justify-between">
        <div
          id="formItems"
          className="flex cursor-pointer items-center font-semibold"
          onClick={handlePrevious}
        >
          <GrFormPrevious />
          <span>previous</span>
        </div>
        <motion.div
          id="formItems"
          animate={activeInput === 2 ? "hidden" : "visible"}
          variants={variants}
          className="flex cursor-pointer items-center font-semibold"
          onClick={handleNext}
        >
          <span>next</span>
          <GrFormNext />
        </motion.div>
      </div>
    </div>
  );
};
