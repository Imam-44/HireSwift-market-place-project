import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
import { MdCheckCircle, MdError } from "react-icons/md";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { logInUser, googleLogin } = use(AuthContext)

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //firebase log in send
    logInUser(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          Swal.fire({
            icon: "success",
            title: "your account log in successfully",
            showConfirmButton: false,
            timer: 1500
          })
        }
        navigate('/')
      })

      .catch(error => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your email/password are wrong!",

          });
        }
      })

  }

    const handleGoogleLogin = () => {
    const loadingToast = toast.loading('Signing in with Google...');
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
        toast.success('Logged in successfully!', { id: loadingToast });
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message, { id: loadingToast });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a229a6] via-[#9a248a] to-[#c9356b] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-pink-500">Login to Your Account</h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center">
          <span className="text-gray-500">Or login with</span>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer text-black"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-pink-700 font-medium">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-pink-500 font-semibold ml-1 hover:underline">
            SignUp here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
