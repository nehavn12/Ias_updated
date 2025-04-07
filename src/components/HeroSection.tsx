import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[700px] md:h-[904px] flex items-end bg-cover bg-center"
      style={{ backgroundImage: "url('/top_banner.jpg')" }}
    >
      {/* Content Positioned Near the Bottom */}
      <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 pb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight md:leading-[90px]">
          Journey With Confidence <br />
          <span className="text-[#E4022B]">Migrate</span> With Us
        </h1>
        <p className="mt-6 sm:mt-8 mb-4 text-base sm:text-lg max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet risus nunc. Duis egestas ac ante sed tincidunt.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
