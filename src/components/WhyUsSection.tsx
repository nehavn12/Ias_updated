import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/Expert_Guidance.svg",
    title: "Expert Guidance",
    description: "Get personalized advice on choosing the right country, university, and visa.",
  },
  {
    icon: "/Hassle-Free_Application.svg",
    title: "Hassle-Free Application",
    description: "Professionals handle all paperwork, ensuring accuracy and efficiency.",
  },
  {
    icon: "/Scholarship_Assistance.svg",
    title: "Scholarship Assistance",
    description: "Get insights on financial aid, grants, and scholarships.",
  },
  {
    icon: "/Faster_Visa_Processing.svg",
    title: "Faster Visa Processing",
    description: "Avoid common mistakes that cause delays and get your visa approved smoothly.",
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20" id="whyinternational">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#022169] uppercase font-bold tracking-wider flex items-center justify-center gap-2 mb-3">
            Why IAS
            <Image src="/about_icon.png" width={14} height={12} alt="abouticon" />
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022169] leading-snug">
            Why International App Services <br />
            <span className="text-[#E4022B]">is awesome</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center">
            <Image
              src="/why_IAS.png"
              alt="Students Abroad"
              width={804}
              height={771}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* Right: Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F3F9FF] p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <Image src={feature.icon} alt={feature.title} width={64} height={64} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#022169]">{feature.title}</h3>
                <p className="text-[#9CA6B4] text-sm sm:text-base mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
