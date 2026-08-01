import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
  console.log(err.code);
  console.log(err.message);

  setError(err.code);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          NovaWeb Solutions
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Admin Login
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-600">
              {error}
            </p>
          )}

          <button
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}