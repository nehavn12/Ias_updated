"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  course: string;
  review: string;
  image: string;
  bgImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Manish Rathi",
    course: "Student",
    review:
      "Krishna was very helpful in getting my IDLV done. He is genuinely interested in helping people and this shows in his work. Very methodical and prompt ! Highly recommended.",
    image: "/kritika_sharma.png",
    bgImage: "/testimonials.png",
  },
  {
    id: 2,
    name: "Anita Verma",
    course: "Student",
    review:
      "Krishna was very helpful in getting my IDLV done. He is genuinely interested in helping people and this shows in his work. Very methodical and prompt ! Highly recommended.",
      image: "/kritika_sharma.png",
      bgImage: "/testimonials.png",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    course: "Cloud Computing",
    review:
      "From beginner to pro, Jetking's training and placement support helped me land my dream job. Best decision ever!",
      image: "/kritika_sharma.png",
      bgImage: "/testimonials.png",
  },
];

const StudentSlider = () => {
  return (
    <section className="pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px] bg-[#F3F9FF]">
      <div className="container px-6 max-w-[1290px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-[#022169] uppercase flex items-center justify-center font-bold mb-2.5 tracking-[1.5px]">
            CLIENT TESTIMONIALS
            <Image
              className="ml-1"
              src="/about_icon.png"
              width={14}
              height={12}
              alt="abouticon"
            />
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#022169] leading-tight mb-1">
            See What Our Happy
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E4022B] leading-tight">
            Clients Have to Say!
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                {/* Testimonial Box */}
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 md:w-7/12 z-10 relative md:-mr-16">
                  <p className="text-lg text-gray-700 mb-6 italic">
                    “{testimonial.review}”
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover w-14 h-14"
                    />
                    <div>
                      <p className="font-semibold text-[#022169]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#E4022B]">{testimonial.course}</p>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <div className="hidden md:block w-1/2 h-96 relative rounded-r-lg overflow-hidden">
                  <Image
                    src={testimonial.bgImage}
                    alt="Student Testimonial"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default StudentSlider;
