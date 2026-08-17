"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegIdCard, FaRegEnvelope, FaRegCommentDots, FaRegMessage, FaArrowUp } from "react-icons/fa6";
import FloatingInput from "@/components/ui/FloatingInput";

const CONTACT_EMAIL = "ahmdsyaukim@gmail.com";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="relative w-full max-w-md">
      {/* circle blur - pojok kiri belakang card */}
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Message
              <FaArrowUp size={12} className="rotate-45" />
            </span>
            <span
              className="pointer-events-none absolute inset-0 z-20 -translate-x-full
                         bg-gradient-to-r from-transparent via-white/50 to-transparent
                         transition-transform duration-700 ease-out
                         group-hover:translate-x-full"
            />
          </motion.button>
        </form>
      </div>
    </div>
  );
}