import { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    window.location.reload();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow rounded">
        <h2 className="text-xl mb-3">Login</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-black text-white px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
