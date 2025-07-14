import AdminSidebar from "../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Admin Dashboard</h1>
        <p className="text-gray-700 text-lg">
          Welcome, Admin! Use the sidebar to manage events, projects, team members, and more.
        </p>
      </main>
    </div>
  );
}
