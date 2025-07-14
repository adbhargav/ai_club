import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageProjects() {
  const [title, setTitle] = useState("");
  const [contributors, setContributors] = useState("");
  const [summary, setSummary] = useState("");
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const snap = await getDocs(collection(db, "projects"));
    setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "projects"), { title, contributors, summary });
    setTitle(""); setContributors(""); setSummary("");
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Manage Projects</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white p-6 rounded shadow">
          <input type="text" placeholder="Title" required className="w-full p-2 border rounded"
            value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Contributors" required className="w-full p-2 border rounded"
            value={contributors} onChange={(e) => setContributors(e.target.value)} />
          <textarea placeholder="Summary" rows="3" className="w-full p-2 border rounded"
            value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add Project</button>
        </form>

        <ul className="space-y-4">
          {projects.map(p => (
            <li key={p.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.contributors}</p>
              <p>{p.summary}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
