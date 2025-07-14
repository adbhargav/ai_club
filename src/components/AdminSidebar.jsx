// src/components/AdminSidebar.jsx
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-64 p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">🛠️ Admin Panel</h2>
      <ul className="space-y-2">
        <li><Link to="/admin" className="hover:text-yellow-400">Dashboard</Link></li>
        <li><Link to="/admin/events" className="hover:text-yellow-400">Manage Events</Link></li>
        <li><Link to="/admin/projects" className="hover:text-yellow-400">Manage Projects</Link></li>
        <li><Link to="/admin/team" className="hover:text-yellow-400">Manage Team</Link></li>
        <li><Link to="/admin/about" className="hover:text-yellow-400">Edit About Page</Link></li>
        <li><Link to="/admin/contacts" className="hover:text-yellow-400">View Contacts</Link></li>
      </ul>
    </div>
  );
}
