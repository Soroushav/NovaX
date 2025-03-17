import { useState } from "react";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("soroushav85@gmail.com");
  const [password, setPassword] = useState("9721599s");
  const { login, isLoading } = useLogin();
  const { isAuthenticated } = useUser();
  if (isLoading) return <Spinner />;
  if (isAuthenticated) navigate("/dashboard");
  function handleLogin(e) {
    e.preventDefault();
    login({ username, password });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl text-center text-gray-800 mb-10">
          NovaX<span className="text-indigo-500">.</span>
        </h1>
        <h2 className="text-xl font-medium text-center text-gray-600 mt-2">
          Login to your account
        </h2>
        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 mt-6 rounded-lg hover:bg-indigo-700 transition"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <span
              className="text-indigo-600 font-semibold hover:underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
