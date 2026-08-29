"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegIdCard,
  FaRegEnvelope,
  FaRegCommentDots,
  FaRegMessage,
  FaArrowUp,
  FaCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";
import FloatingInput from "@/components/ui/FloatingInput";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: fullName,
          email: email,
          subject: subject || "Contact from Portfolio",
          message: message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full max-w-md">
      
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-10 -z-10 h-56 w-56 rounded-full bg-primary/50 blur-[80px]"
      />

      <div className="glass relative rounded-3xl bg-white p-8 shadow-xl">
        <div className="relative mb-1 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
          </span>
          <h3 className="text-3xl font-extrabold text-black">hello.</h3>
        </div>

        <p className="text-sm font-bold text-black">Send me a message</p>
        <p className="mt-0.5 text-xs text-gray-500">
          Fill out the fields below, and our team will connect shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
          <FloatingInput label="Full Name" icon={FaRegIdCard} value={fullName} onChange={setFullName} />
          <FloatingInput label="Email Address" icon={FaRegEnvelope} type="email" value={email} onChange={setEmail} />
          <FloatingInput label="Subject" icon={FaRegCommentDots} value={subject} onChange={setSubject} />
          <FloatingInput label="Your Message" icon={FaRegMessage} as="textarea" value={message} onChange={setMessage} />

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-md disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center gap-2">
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && <FaArrowUp size={12} className="rotate-45" />}
            </span>

            {status !== "loading" && (
              <span
                className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                           bg-gradient-to-r from-transparent via-white/50 to-transparent
                           transition-transform duration-700 ease-out
                           group-hover:translate-x-full"
              />
            )}
          </motion.button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              <FaCircleCheck size={16} />
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              <FaCircleExclamation size={16} />
              Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}