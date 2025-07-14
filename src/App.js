import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManageEvents from "./pages/ManageEvents";
import ManageProjects from "./pages/ManageProjects";
import ManageTeam from "./pages/ManageTeam";
import ManageAbout from "./pages/ManageAbout";
import ManageContacts from "./pages/ManageContacts";
import AdminRoute from "./pages/AdminRoute";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Header />
      {/* 🧼 Push page content below the fixed header */}
      <div className="pt-20">
        <Routes>
          {/* Public Routes */}
          <Route path="/projects/:id" element={<ProjectDetails />}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/events" element={<AdminRoute><ManageEvents /></AdminRoute>} />
          <Route path="/admin/projects" element={<AdminRoute><ManageProjects /></AdminRoute>} />
          <Route path="/admin/team" element={<AdminRoute><ManageTeam /></AdminRoute>} />
          <Route path="/admin/about" element={<AdminRoute><ManageAbout /></AdminRoute>} />
          <Route path="/admin/contacts" element={<AdminRoute><ManageContacts /></AdminRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
