import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id='about' className='pt-10 md:pt-[84px] pb-7'>
      <div className='container mx-auto px-4 sm:px-6 md:px-[80px]'>
        {/* Row */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center'>
          {/* Column 1 (Image) */}
          <div className='md:col-span-5'>
            <Image
              src='/about.png'
              width={500}
              height={500}
              className='rounded-lg w-full h-auto object-cover'
              alt='About Us'
              priority
            />
          </div>

          {/* Column 2 (Content) */}
          <div className='md:col-span-7'>
            <p className="text-sm text-[#022169] uppercase font-bold mb-3 tracking-wider flex items-center gap-2">
              About Us 
              <Image src='/about_icon.png' width={14} height={12} alt="About Icon" />
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#022169] mb-2">
              Unknown Wanderlust
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E4022B]">
              Your Journey into
            </h2>

            <p className="text-[#9CA6B4] font-medium mt-4 leading-relaxed mb-10 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu nunc. 
              Duis egestas ac ante sed tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed sit amet arcu nunc. Duis egestas ac ante sed tincidunt.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2 text-[#022169]">
                  <Image src='/tick.png' width={14} height={14} alt="Tick Icon" />
                  Safety Guides
                </h4>
                <ul className="text-[#9CA6B4] mt-2 space-y-2 text-sm sm:text-base">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2 text-[#022169]">
                  <Image src='/tick.png' width={14} height={14} alt="Tick Icon" />
                  Passport Assistance
                </h4>
                <ul className="text-[#9CA6B4] mt-2 space-y-2 text-sm sm:text-base">
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Lorem ipsum dolor sit amet</li>
                  <li>• Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>

            {/* Read More Button */}
            <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition">
              Read More ➝
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
