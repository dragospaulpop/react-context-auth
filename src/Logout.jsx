import { useAuth } from "./AuthContext.jsx";

export default function Logout() {
  const { doLogout } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-white">Login</h1>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={doLogout}
      >
        Logout
      </button>
    </div>
  );
}
