import { FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

AOS.init(); // Initialize AOS

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-indigo-600 font-bold uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 mt-2">
            Discover Our Story
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center justify-center mb-4">
              <FaRegLightbulb className="text-6xl text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Phasellus semper scelerisque risus, non efficitur nunc imperdiet
              nec. Praesent eu sollicitudin ligula. Curabitur dapibus odio in
              velit volutpat, et dapibus urna posuere.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center mb-4">
              <FaRegLightbulb className="text-6xl text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-xl p-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-center mb-4">
              <FaRegLightbulb className="text-6xl text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Vivamus non odio consequat, posuere justo eget, congue augue. Cras
              molestie aliquam diam, id suscipit nisi fermentum non.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
