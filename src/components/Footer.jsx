import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Main Street, City Name</p>
            <p className="mb-2">Phone: +123 456 789</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="flex justify-center items-center md:justify-end">
            <div className="mr-4">
              <p className="text-sm font-semibold mb-1">Follow Us</p>
            </div>
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="text-center text-sm">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
