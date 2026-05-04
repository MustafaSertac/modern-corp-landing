import React from "react";
import Image from "next/image";
import { FaRegFolder } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
  aosDelay?: number;
};
const BlogCard = ({ image, title, aosDelay = 0 }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-100" data-aos="fade-up" data-aos-delay={aosDelay}>
      <Image
        src={image}
        className="h-auto w-full object-cover"
        width={300}
        height={206}
        alt={title}
        data-aos="zoom-in"
        data-aos-delay={aosDelay + 60}
      />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <FaRegFolder className="text-orange-700 w-6 h-6" />
            <p className="font-semibold text-gray-800 text-sm">Category</p>
          </div>
          <p className="text-gray-800 font-semibold text-sm">Jan 1, 2026</p>
        </div>
        <h1 className="mt-5 text-lg font-bold text-gray-900 transition-all duration-300 hover:text-blue-700 cursor-pointer">
          {title}
        </h1>
        <button className="relative inline-block mt-8 cursor-pointer group">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-[#1a1a1a]">
            Read More
            <FiArrowDownRight className="text-[#b79d7b] text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="block w-full h-px group-hover:w-0 transition-all duration-300 bg-[#514f4f] mt-2"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
