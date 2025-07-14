import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, "contact_form"));
      setContacts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Contact Messages</h2>
        <ul className="space-y-4">
          {contacts.map(msg => (
            <li key={msg.id} className="bg-white p-4 shadow rounded">
              <p><strong>{msg.name}</strong> ({msg.email})</p>
              <p>{msg.message}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
