import React, { useState } from "react";
import faqsData from "../data/faqs";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 text-center py-12">
      <div className="brand-faq max-w-2xl mx-auto p-6">
        <h2 className="faq-title text-2xl font-bold uppercase mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-200 border border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none px-8 py-5"
              >
                <span>{faq.question}</span>
                <span className="icon text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer text-start bg-gray-100 text-gray-600 px-8 py-5 text-base">
                  {faq.answer.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
