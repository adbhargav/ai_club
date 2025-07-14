import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminRoute({ children }) {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      } else if (user.email === "bhargavandhe74@gmail.com") {
        setIsAdmin(true);
      } else {
        navigate("/dashboard");
      }
      setCheckingAuth(false);
    });

    return () => unsubscribe(); // cleanup listener
  }, [navigate]);

  if (checkingAuth) {
    return <div className="text-center mt-10 text-lg font-semibold">Checking admin access...</div>;
  }

  return isAdmin ? children : null;
}
