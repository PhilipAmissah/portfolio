"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();
  console.log("executeRecaptcha:", executeRecaptcha);
  


  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name: string) => /^[A-Za-z\s'-]+$/.test(name);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("");

    const form = new FormData(e.target);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    if (!validateName(name)) {
      setStatus("Name contains invalid characters.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!executeRecaptcha) {
      setStatus("reCAPTCHA not ready. Try again.");
      return;
    }

    // Generate token
    const token = await executeRecaptcha("contact_form");
    console.log("token:", token);

    if (!token) {
      setStatus("Failed to generate reCAPTCHA token.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await res.json();

      // Handle browser-error from backend
      if (data.error === "browser-error") {
        const retryToken = await executeRecaptcha("contact_form");

        const retryRes = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({ name, email, message, token: retryToken }),
        });

        const retryData = await retryRes.json();
        setStatus(retryData.success ? "Message sent!" : retryData.error);
        if (retryData.success) e.target.reset();
        return;
      }

      setStatus(data.success ? "Message sent!" : data.error || "Something went wrong.");
      if (data.success) e.target.reset();
    } catch {
      setStatus("Network error.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-[var(--space-6)] py-[var(--space-12)] text-center"
      style={{ color: "var(--text-primary)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Contact
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-[var(--space-4)] w-full max-w-md mt-[var(--space-6)]"
      >
        <input
          name="name"
          placeholder="Name"
          className="p-[var(--space-3)] rounded-md border"
          style={{
            borderColor: "var(--border-light)",
            background: "var(--header-bg)",
            color: "var(--text-primary)",
          }}
        />

        <input
          name="email"
          placeholder="Email"
          className="p-[var(--space-3)] rounded-md border"
          style={{
            borderColor: "var(--border-light)",
            background: "var(--header-bg)",
            color: "var(--text-primary)",
          }}
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          className="p-[var(--space-3)] rounded-md border"
          style={{
            borderColor: "var(--border-light)",
            background: "var(--header-bg)",
            color: "var(--text-primary)",
          }}
        ></textarea>

        <button
          type="submit"
          className="px-[var(--space-6)] py-[var(--space-3)] rounded-md text-white"
          style={{
            background: "var(--engagement)",
          }}
        >
          Send Message
        </button>

        {status && (
          <p
            className="mt-[var(--space-3)]"
            style={{ color: "var(--awareness)" }}
          >
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
}
