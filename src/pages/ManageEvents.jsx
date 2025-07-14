// src/pages/ManageEvents.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function ManageEvents() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const snap = await getDocs(collection(db, "events"));
    const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEvents(list);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    await deleteDoc(doc(db, "events", id));
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Manage Events</h2>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <h4 className="font-bold text-lg">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
