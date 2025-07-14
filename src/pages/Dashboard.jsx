// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [recentEvents, setRecentEvents] = useState([]);
  const [contributions, setContributions] = useState({
    eventsAttended: 0,
    projectsSubmitted: 0,
    workshopsGiven: 0,
  });

  const navigate = useNavigate();
  const ADMIN_EMAIL = "bhargavandhe74@gmail.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/signin");
      } else {
        setUser(currentUser);
        fetchUserContributions(currentUser.uid);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchUserContributions = async (uid) => {
    // 🔹 Projects Submitted
    const projSnap = await getDocs(query(collection(db, "projects"), where("createdBy", "==", uid)));
    const projectCount = projSnap.size;

    // 🔹 Events Attended
    const eventSnap = await getDocs(collection(db, "events"));
    const attended = eventSnap.docs.filter(doc => (doc.data().attendees || []).includes(uid));
    const attendedCount = attended.length;

    // 🔹 Workshops Given
    const workshops = eventSnap.docs.filter(doc =>
      doc.data().type === "workshop" && doc.data().hostId === uid
    );
    const workshopCount = workshops.length;

    // 🔹 Recent Events
    const recent = eventSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })).slice(0, 3);

    setContributions({
      eventsAttended: attendedCount,
      projectsSubmitted: projectCount,
      workshopsGiven: workshopCount,
    });

    setRecentEvents(recent);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800">
            Welcome, {user?.displayName || user?.email}
          </h1>
          {user?.email === ADMIN_EMAIL && (
            <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
              🎖 Admin
            </span>
          )}
        </div>

        <p className="text-gray-700 mb-6">
          Thanks for being part of the AI Club at RGMCET.
        </p>

        {/* 🔗 Quick Links */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <a
            href="/events"
            className="bg-indigo-100 text-indigo-900 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            📅 View Upcoming Events
          </a>
          <a
            href="/projects"
            className="bg-green-100 text-green-900 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            🚀 Explore AI Projects
          </a>
          <a
            href="/team"
            className="bg-yellow-100 text-yellow-900 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            👥 Meet Our Team
          </a>
          <a
            href="/contact"
            className="bg-pink-100 text-pink-900 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            📬 Contact Club Leaders
          </a>
        </div>

        {/* 📊 Contributions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">📊 Your Contributions</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-3xl font-bold text-blue-700">
                {contributions.projectsSubmitted}
              </p>
              <p className="text-gray-600 text-sm mt-1">Projects Submitted</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-3xl font-bold text-blue-700">
                {contributions.eventsAttended}
              </p>
              <p className="text-gray-600 text-sm mt-1">Events Attended</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-3xl font-bold text-blue-700">
                {contributions.workshopsGiven}
              </p>
              <p className="text-gray-600 text-sm mt-1">Workshops Given</p>
            </div>
          </div>
        </div>

        {/* 🧾 Recent Events */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">🧾 Recent Events</h2>
          <ul className="space-y-2">
            {recentEvents.length > 0 ? (
              recentEvents.map((event) => (
                <li key={event.id} className="bg-white border p-3 rounded shadow-sm">
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.date || "Date not set"}</p>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No events available.</li>
            )}
          </ul>
        </div>

        {/* 🚪 Sign Out */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
