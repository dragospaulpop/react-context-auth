import { useAuth } from "./AuthContext.jsx";

export default function Header() {
  const { user } = useAuth();
  return (
    <div className="bg-blue-500 text-white p-10">
      <h1 className="text-3xl font-bold">
        Hello: {user ? user.name : "Anonymous"}, {user ? user.role : "-"}
      </h1>
    </div>
  );
}
