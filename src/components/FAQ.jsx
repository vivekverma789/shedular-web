import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./navbar.css"

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-md shadow-sm mb-2">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={onClick}
      >
        <span className="heading">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="p-4 pt-0">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for mutual transfer?",
      answer:
        "To apply for mutual transfer, submit an application through our online portal, including your current position and desired transfer location. Ensure all required documents are attached before submission.",
    },
    {
      question: "What are the eligibility criteria for promotion?",
      answer:
        "Eligibility for promotion typically includes a minimum tenure in your current position, consistent performance ratings, and completion of required training programs. Specific criteria may vary by department.",
    },
    {
      question: "How can I update my personal information?",
      answer:
        "You can update your personal information by logging into the employee self-service portal. Navigate to the 'Personal Details' section and make the necessary changes. Don't forget to save your updates.",
    },
    {
      question: "What is the process for requesting leave?",
      answer:
        "To request leave, log into the HR system, select 'Leave Request', choose the type of leave and dates, and submit for approval. Your manager will be notified to review and approve your request.",
    },
    {
      question: "How do I access my pay stubs?",
      answer:
        "Pay stubs can be accessed through the payroll section of the employee portal. Log in, navigate to 'Payroll', and select 'View Pay Stubs'. You can view and download your pay stubs from there.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#d9d9d9] p-6">
      <div className="max-w-2xl mx-auto mb-10 mt-8">
        <h1 className="text-3xl heading font-bold mb-6 text-center">Common FAQs</h1>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
