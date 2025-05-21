import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Billing Address",
    content: (
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border-1 border-gray-400  rounded-lg" />
        <input type="text" placeholder="Address" className="w-full p-2 border-1 border-gray-400  rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-2 border-1 border-gray-400  rounded-lg" />
        <input type="tel" placeholder="Phone Number" className="w-full p-2 border-1 border-gray-400  rounded-lg" />
      </form>
    ),
  },
  {
    id: 2,
    title: "Shipping Address",
    content:
    <p>Your shipping address form is here.</p>,
  },
  {
    id: 3,
    title: "Card Details",
    content: <p>Your card details go here.</p>,
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 space-y-4">
      {accordionData.map(({ id, title, content }) => (
        <div key={id} className="w-full border-0 rounded-2xl overflow-hidden shadow">
          <button
            className="w-full flex justify-between items-center p-6 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 transition duration-300"
            onClick={() => toggleAccordion(id)}
          >
            <span>{title}</span>
            <ChevronDown className={`transition-transform ${openId === id ? "rotate-180" : "rotate-0"}`} />
          </button>
          {openId === id && (
            <div className="p-5 bg-white border border-t-0 border-gray-300">
              {content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
