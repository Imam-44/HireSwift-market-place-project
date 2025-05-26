import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-12 pb-6  border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">Contact Us</h4>
          <p className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-pink-500" /> Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-pink-500" /> +880 1234 567890
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-pink-500" /> support@freemarketplace.com
          </p>
        </div>

        {/* Terms and Policies */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">Important Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-pink-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600 transition">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-pink-300 rounded-full hover:bg-pink-100 transition"
            >
              <FaFacebookF className="text-pink-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-pink-300 rounded-full hover:bg-pink-100 transition"
            >
              <FaTwitter className="text-pink-600" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-pink-300 rounded-full hover:bg-pink-100 transition"
            >
              <FaLinkedinIn className="text-pink-600" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Freelance Task Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
