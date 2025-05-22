import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, setUser } = use(AuthContext);
    const navigate = useNavigate();
  const hanldeSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log({ name, email, password, photoUrl });

   createUser(email, password)
  .then((result) => {
    const user = result.user;

    // Profile update here
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photoUrl });

      Swal.fire({
        icon: "success",
        title: "Your account created successfully",
        showConfirmButton: false,
        timer: 1000
      });
      navigate('/')
    });

  })

  .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your email already added!",
    });
  });

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create an Account</h2>

        <form onSubmit={hanldeSignUp} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name='photoUrl'
              placeholder="https://photo-link.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-500">or</div>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-medium cursor-pointer">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-indigo-600 font-semibold ml-1 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
