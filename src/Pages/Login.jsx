import { useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy submit handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase login function here
    toast.success("Logged in successfully!");
  };

  const handleGoogleLogin = () => {
    // Firebase Google login function here
    toast.success("Google login success!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-pink-500">Login to Your Account</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center">
          <span className="text-gray-500">Or login with</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-pink-500 font-semibold ml-1 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
