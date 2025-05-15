import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/utils";

const FaqItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="mb-4 border border-neutral-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-neutral-50 transition"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-heading font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="text-primary flex-shrink-0" />
        )}
      </button>
      
      <div 
        className={`p-4 bg-white border-t border-neutral-200 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="text-neutral-700">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Common questions about our products and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
