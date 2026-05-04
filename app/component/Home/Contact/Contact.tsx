import React from 'react';
import { FaArrowRightLong, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const contactInfo = [
  {
    title: 'Call Now',
    value: '+555 67676734',
    icon: FaPhone,
  },
  {
    title: 'E-mail Now',
    value: 'example@gmail.com',
    icon: IoMail,
  },
  {
    title: 'Address',
    value: 'Dhaka, Bangladesh',
    icon: FaLocationDot,
  },
];

const Contact = () => {
  return (
    <section className='bg-[#e7e7ea] py-24'>
      <div className='mx-auto w-[80%]'>
        <p className='text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#8f734f]'>BIZE ULASIN</p>
        <h2 className='mt-4 text-center text-3xl font-bold text-[#121826] md:text-5xl'>Projenizi birlikte guclendirelim</h2>

        <div className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[2.2fr_1.1fr]'>
          <article className='rounded-xl border border-white/10 bg-[#0b1328] p-5 shadow-[0_20px_60px_rgba(6,12,28,0.35)] md:p-7'>
            <form className='space-y-3'>
              <input
                type='text'
                placeholder='Name*'
                className='h-11 w-full rounded-full border border-white/20 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-400 focus:border-[#b69974]'
              />
              <input
                type='email'
                placeholder='Email*'
                className='h-11 w-full rounded-full border border-white/20 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-400 focus:border-[#b69974]'
              />
              <input
                type='text'
                placeholder='Subject*'
                className='h-11 w-full rounded-full border border-white/20 bg-transparent px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-400 focus:border-[#b69974]'
              />
              <textarea
                placeholder='Comments*'
                rows={5}
                className='w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-400 focus:border-[#b69974]'
              />
              <button
                type='submit'
                className='flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#b69974] text-xs font-semibold uppercase tracking-[0.18em] text-[#0b1328] transition-all hover:bg-[#c9ac86]'
              >
                Submit <FaArrowRightLong />
              </button>
            </form>
          </article>

          <div className='space-y-4'>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className='group flex items-center gap-4 rounded-xl border border-[#1e263d] bg-gradient-to-r from-[#101a33] to-[#0d1428] p-5 text-white shadow-[0_12px_30px_rgba(9,14,28,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b69974]/60 hover:shadow-[0_18px_40px_rgba(9,14,28,0.45)]'
                >
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#b69974] text-[#0b1328] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(182,153,116,0.6)]'>
                    <Icon />
                  </div>
                  <div>
                    <p className='text-[11px] uppercase tracking-[0.16em] text-slate-300'>{item.title}</p>
                    <p className='mt-1 text-sm font-semibold text-white'>{item.value}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
