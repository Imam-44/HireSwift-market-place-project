import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, setUser, googleLogin } = use(AuthContext);
    const navigate = useNavigate();
const hanldeSignUp = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photoUrl = form.photoUrl.value;

  // Password Validation
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const isLengthValid = password.length >= 6;

  if (!hasUpperCase || !hasLowerCase || !isLengthValid) {
    let message = "Password must contain:\n";
    if (!hasUpperCase) message += "- At least one UPPERCASE letter\n";
    if (!hasLowerCase) message += "- At least one lowercase letter\n";
    if (!isLengthValid) message += "- At least 6 characters\n";

    Swal.fire({
      icon: "error",
      title: "Invalid Password",
      html: `<pre style="text-align:left">${message}</pre>`,
    });
    return;
  }

  // Create User
  createUser(email, password)
    .then((result) => {
      const user = result.user;

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

      
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your email already exists!",
      });
    });
};


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
    <div className="min-h-screen bg-gradient-to-br from-[#7d397b] via-[#ce0da7] to-[#b72a65] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-pink-600">Create an Account</h2>

        <form onSubmit={hanldeSignUp} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name='photoUrl'
              placeholder="https://photo-link.com"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg cursor-pointer hover:bg-pink-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-500">or</div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center text-black justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle className="text-2xl" />
          <span className="text-pink-700 font-medium cursor-pointer  ">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-pink-600 font-semibold ml-1 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
