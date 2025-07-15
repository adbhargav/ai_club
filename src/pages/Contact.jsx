// src/pages/Contact.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "contact_form"), form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded">
            <input
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
