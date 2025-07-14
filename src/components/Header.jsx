import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/rgm_logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Projects", to: "/projects" },
    { label: "Team", to: "/team" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + Title - aligned left */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="RGMCET Logo" className="h-12 w-12 rounded-full" />
            <span className="text-xl sm:text-2xl font-bold text-blue-900 whitespace-nowrap">
              AI Club - RGMCET
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-blue-700 transition ${
                pathname === item.to ? "text-blue-700 font-semibold" : "text-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="ml-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm sm:text-base"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="ml-2 text-red-600 hover:underline text-sm sm:text-base"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-blue-700 hover:underline text-sm sm:text-base">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4">
          <div className="flex flex-col space-y-3 text-base">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`block hover:text-blue-700 ${
                  pathname === item.to ? "text-blue-700 font-semibold" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-700 text-white py-2 text-center rounded"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleSignOut();
                  }}
                  className="text-red-600 text-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-700"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-700 text-white py-2 text-center rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
