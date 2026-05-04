"use client";
import React from "react";
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
const PROJECT_IMAGES = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];
const Project = () => {
  return (
    <div id="portfolio" className="scroll-mt-24 bg-black pb-16 pt-16 md:pb-20 md:pt-20" data-aos="fade-up">
      <h2 className="text-[#b69974] text-center text-lg font-medium tracking-widest">
        Portfolio
      </h2>
      <h1 className="mt-4 px-4 text-center text-3xl font-bold text-white md:text-5xl">
        Transforing ideas into <br/>
        digital reality
      </h1>
      <div className="mx-auto mt-12 grid w-[90%] grid-cols-1 gap-5 sm:mt-14 sm:w-[86%] sm:grid-cols-2 lg:mt-20 lg:w-[80%] lg:grid-cols-3 lg:gap-6"> 
      {PROJECT_IMAGES.map((src, index) => (
        <div key={index} className="" data-aos="zoom-in-up" data-aos-delay={index * 100}>
          <Tilt>
    <Image src={src} alt={`Project ${index + 1}`} width={450} height={550} className="h-auto w-full rounded-md object-cover" data-aos="zoom-in" data-aos-delay={index * 100 + 50} />
          </Tilt>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Project;
