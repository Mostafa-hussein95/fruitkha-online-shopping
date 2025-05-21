import React from "react";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: "fa-map",
      title: "Shop Address",
      content: "34/8, East Hukupara Gifirtok, Sadan. Country Name"
    },
    {
      icon: "fa-clock",
      title: "Shop Hours",
      content: "MON - FRIDAY: 8 AM to 9 PM\nSAT - SUN: 10 AM to 8 PM"
    },
    {
      icon: "fa-address-book",
      title: "Contact",
      content: "Phone: +00 111 222 3333\nEmail: support@fruitkha.com"
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-10 xl:gap-16 items-start w-full ">
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg md:w-[70%] ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have any questions?
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm text-start font-semibold text-gray-700 p-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-start font-semibold text-gray-700 p-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-start font-semibold text-gray-700 p-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123] focus:border-transparent transition-all"
                  placeholder="+123 456 7890"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-start font-semibold text-gray-700 p-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123] focus:border-transparent transition-all"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-start font-semibold text-gray-700 p-1">
                Your Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123] focus:border-transparent transition-all resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F28123] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#051922] transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm space-y-8 md:w-[30%]">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <i className={`fa-solid ${item.icon} text-2xl text-[#F28123] mt-1`} />
              </div>
              <div>
                <h3 className="text-xl text-start font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-start leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}