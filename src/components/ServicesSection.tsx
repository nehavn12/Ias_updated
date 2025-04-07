import React from "react";
import ServiceCard from "./ServiceCard"; // Reusable component
import Image from "next/image";

const services = [
  {
    icon: "/service_icon.svg",
    title: "Indian Drivers License Verification (IDLV)",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
  {
    icon: "/service_icon.svg",
    title: "Indian Police Clearance Certificate (PCC)",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
  {
    icon: "/service_icon.svg",
    title: "Overseas Citizenship of India (OCI)",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
  {
    icon: "/service_icon.svg",
    title: "General Power of Attorney Attestation",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
  {
    icon: "/service_icon.svg",
    title: "OCI Miscellaneous Service",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
  {
    icon: "/service_icon.svg",
    title: "Indian Visa Services (Regular & On Arrival)",
    description: "There are many variants of passages of engineer’s available. Have suffered.",
    link: "#",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white" id="service">
      <div className="container mx-auto bg-[#F3F9FF] rounded-2xl px-4 sm:px-6 md:px-12 lg:px-[84px] py-12">
        {/* Section Heading */}
        <div className="text-left mb-10 sm:mb-12">
          <p className="text-sm text-[#022169] uppercase font-bold tracking-wider flex items-center gap-2 mb-3">
            Our Services
            <Image src="/about_icon.png" width={14} height={12} alt="abouticon" />
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022169] leading-tight">
            Indian Visa Consultant Services in{" "}
            <span className="text-[#E4022B]">Australia</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
