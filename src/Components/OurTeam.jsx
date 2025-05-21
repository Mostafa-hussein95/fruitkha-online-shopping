import React from "react";
import person1 from "../assets/team-1.jpg"
import person2 from "../assets/team-2.jpg"
import person3 from "../assets/team-3.jpg"

export default function OurTeam() {
  const teamData = [
    {
      imgSrc: `${person1}`,
      name: "Jimmy Doe",
      title: "Farmer",
    },
    {
      imgSrc: `${person2}`,
      name: "Marry Doe",
      title: "Farmer",
    },
    {
      imgSrc:`${person3}`,
      name: "Simon Joe",
      title: "Farmer",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mb-10">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-[#F28123]">Our</span> Team
        </h2>
        <div className="max-w-[100px] h-1 mx-auto my-4 bg-[#F28123] rounded-sm" />
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>

      {/* أعضاء الفريق */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {teamData.map((person, index) => (
          <article 
            key={index}
            className="group relative text-center h-120 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-t-xl h-90">
              <img
                src={person.imgSrc}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#051922]">
                {person.name}
              </h3>
              <p className="text-[#F28123] font-medium text-lg">{person.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}