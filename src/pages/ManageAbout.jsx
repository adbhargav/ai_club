import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageAbout() {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "about", "info");
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setMission(data.mission || "");
        setVision(data.vision || "");
      }
    };
    fetchData();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "about", "info"), { mission, vision });
    alert("Updated successfully!");
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Edit About Content</h2>
        <form onSubmit={handleSave} className="space-y-4 bg-white p-6 rounded shadow">
          <textarea rows="4" placeholder="Mission" className="w-full p-2 border rounded"
            value={mission} onChange={(e) => setMission(e.target.value)} />
          <textarea rows="4" placeholder="Vision" className="w-full p-2 border rounded"
            value={vision} onChange={(e) => setVision(e.target.value)} />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </main>
    </div>
  );
}
