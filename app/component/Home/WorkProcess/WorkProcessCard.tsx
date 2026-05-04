import React from 'react';

type Props = {
  number: string;
  title: string;
  isExtraClass?: boolean;
  aosDelay?: number;
}

const WorkProcessCard = ({ number, title, isExtraClass=false, aosDelay = 0  }: Props) => {
  return (
<div className={`flex items-center gap-3 ${isExtraClass ? 'lg:border-r-2 lg:border-gray-300' : ''}`} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className='text-[40px] md:Text-[60px] lg:Text-[80px] font-bold mr-5 leading-none text-amber-600' data-aos="zoom-in" data-aos-delay={aosDelay + 60}>{number}</div>
      <div className=' text-[#252525] font-semibold text-xl'>
        {title}
        <p className='lg:w-[#90] mt-3 leading-8 font-medium text-gray-700'>It is an established fact that ineffective design can distract readers from the content.
Research shows that distracting design elements reduce reader focus.</p>
      </div>
    </div>
  )
};
export default WorkProcessCard;