import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageTeam() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [team, setTeam] = useState([]);

  const fetchTeam = async () => {
    const snap = await getDocs(collection(db, "team"));
    setTeam(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "team"), { name, role, imageURL });
    setName(""); setRole(""); setImageURL("");
    fetchTeam();
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Manage Team</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white p-6 rounded shadow">
          <input type="text" placeholder="Name" required className="w-full p-2 border rounded"
            value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Role" required className="w-full p-2 border rounded"
            value={role} onChange={(e) => setRole(e.target.value)} />
          <input type="url" placeholder="Image URL" required className="w-full p-2 border rounded"
            value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Member</button>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {team.map(member => (
            <div key={member.id} className="bg-white p-4 rounded shadow text-center">
              <img src={member.imageURL} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
