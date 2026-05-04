import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { HiChevronDoubleRight } from 'react-icons/hi';

const serviceLinks = ['UI Design', 'UX Design', 'Web App', 'Digital Marketing', 'Video Editing'];

const Footer = () => {
  return (
    <footer className='bg-[#161c2d] py-14 text-white' data-aos="fade-up">
      <div className='mx-auto grid w-[90%] grid-cols-1 gap-8 sm:w-[86%] md:grid-cols-2 lg:w-[85%] lg:grid-cols-4 lg:gap-10'>
        <div data-aos="fade-up" data-aos-delay="0">
          <div className='flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#b69974] text-[#161c2d]'>
              <span className='text-xs font-bold'>CB</span>
            </div>
            <h3 className='text-xl font-semibold'>CorpBox</h3>
          </div>
          <p className='mt-4 max-w-xs text-sm leading-6 text-slate-300'>
            Conditions terms of use our services of guests list the main list guests list the team list.
          </p>
          <div className='mt-5 flex items-center gap-3'>
            <a className='rounded bg-white/10 p-2 text-sm transition-colors hover:bg-[#b69974] hover:text-[#161c2d]' href="#">
              <FaFacebookF />
            </a>
            <a className='rounded bg-white/10 p-2 text-sm transition-colors hover:bg-[#b69974] hover:text-[#161c2d]' href="#">
              <FaYoutube />
            </a>
            <a className='rounded bg-white/10 p-2 text-sm transition-colors hover:bg-[#b69974] hover:text-[#161c2d]' href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <h4 className='text-lg font-semibold'>Address</h4>
          <ul className='mt-4 space-y-3 text-sm text-slate-300'>
            <li className='flex items-start gap-2'>
              <FaLocationDot className='mt-1 text-[#b69974]' />
              <span>Old city street, USA 1212 New York 3500</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhone className='text-[#b69974]' />
              <span>+88 014 420420</span>
            </li>
            <li className='flex items-center gap-2'>
              <IoMail className='text-[#b69974]' />
              <span>example@gmail.com</span>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="240">
          <h4 className='text-lg font-semibold'>More Services</h4>
          <ul className='mt-4 space-y-2 text-sm text-slate-300'>
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#" className='inline-flex items-center gap-2 transition-colors hover:text-[#d6bc99]'>
                  <HiChevronDoubleRight className='text-[#b69974]' />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="360">
          <h4 className='text-lg font-semibold'>Newsletter</h4>
          <p className='mt-4 text-sm leading-6 text-slate-300'>
            It is a long established fact that a reader will be distracted.
          </p>

          <article className='mt-4 flex items-center gap-3 rounded-md bg-white/10 p-3'>
            <Image src='/images/s1.png' alt='Newsletter' width={62} height={52} className='h-[52px] w-[62px] rounded object-cover' data-aos="zoom-in" data-aos-delay="420" />
            <div>
              <p className='text-xs text-[#d6bc99]'>25 October, 2025</p>
              <p className='mt-1 text-sm font-medium'>The standard chunk of lorem ipsum</p>
            </div>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
