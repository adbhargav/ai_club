import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/Footer";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snap = await getDocs(collection(db, "events"));
      setEvents(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">Upcoming Events</h2>

        {events.length === 0 ? (
          <p>No events posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="bg-white shadow rounded p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="mt-2">{event.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Footer pushed to bottom */}
      <Footer />
    </div>
  );
}
