import { useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

AOS.init(); // Initialize AOS

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a variety of services including web development, customer support, and customization to fit your unique requirements.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us via email at info@example.com or call us at +123 456 789. We are available 24/7 to assist you.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday, from 9 AM to 6 PM. However, our customer support team is available 24/7.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we provide custom solutions tailored to your business needs. Contact us to discuss your requirements.",
    },
  ];

  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-indigo-600 font-bold uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left focus:outline-none"
              >
                <h3 className="text-xl font-bold text-gray-800 flex justify-between items-center">
                  {faq.question}
                  <span>{openFAQIndex === index ? "-" : "+"}</span>
                </h3>
              </button>
              {openFAQIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
