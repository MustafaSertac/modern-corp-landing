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
    <div className="pt-16 pb-16 bg-black" data-aos="fade-up">
      <h2 className="text-[#b69974] text-center text-lg font-medium tracking-widest">
        Portfolio
      </h2>
      <h1 className="text-3xl md:text-5xl mt-4 text-white font-bold text-center">
        Transforing ideas into <br/>
        digital reality
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6"> 
      {PROJECT_IMAGES.map((src, index) => (
        <div key={index} className="" data-aos="zoom-in-up" data-aos-delay={index * 100}>
          <Tilt>
    <Image src={src} alt={`Project ${index + 1}`} width={450} height={550} className="rounded-md" data-aos="zoom-in" data-aos-delay={index * 100 + 50} />
          </Tilt>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Project;
