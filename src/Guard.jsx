import Login from "./Login.jsx";
import { useAuth } from "./AuthContext.jsx";
import Logout from "./Logout.jsx";

import UserPage from "./UserPage.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

export default function Guard() {
  const { user } = useAuth();

  return (
    <div className="p-10">
      {user ? <Logout /> : <Login />}
      {user && user.role === "user" && <UserPage />}
      {user && user.role === "admin" && <AdminDashboard />}
    </div>
  );
}
