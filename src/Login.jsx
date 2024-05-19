import { useAuth } from "./AuthContext.jsx";
export default function Login() {
  const { doLogin } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold text-white">Login</h1>
      <div className="p-10 flex gap-2">
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => doLogin("user")}>
          Login as user
        </button>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => doLogin("admin")}>
          Login as admin
        </button>
      </div>
    </>
  );
}
