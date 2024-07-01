import {
  RiServiceLine,
  RiCustomerService2Line,
  RiSettings4Line,
} from "react-icons/ri"; // Import react-icons
import { motion } from "framer-motion"; // Import framer-motion
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

AOS.init(); // Initialize AOS

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-indigo-600 font-bold uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 mt-2">
            What We Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <RiServiceLine className="text-6xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600 text-center">
              We provide custom web development solutions tailored to your
              business needs.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <RiCustomerService2Line className="text-6xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600 text-center">
              Our dedicated customer support team is available 24/7 to assist
              you.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <RiSettings4Line className="text-6xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Customization
            </h3>
            <p className="text-gray-600 text-center">
              Customize your applications and services to fit your unique
              requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
