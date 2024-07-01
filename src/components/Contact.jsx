import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

AOS.init(); // Initialize AOS

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-indigo-600 font-bold uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 mt-2">
            Get in Touch
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-6">
            Have questions? Feel free to reach out to us. We are here to help!
          </p>
        </div>
        <div
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Formulir Kontak */}
          <form className="space-y-4">
            <div data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button
                type="submit"
                className="inline-block w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
