import { AuthProvider } from "./AuthContext.jsx";
import Header from "./Header.jsx";
import Guard from "./Guard.jsx";
function App() {
  return (
    <AuthProvider>
      <div className="p-10">
        <Header />
        <Guard />
      </div>
    </AuthProvider>
  );
}

export default App;
