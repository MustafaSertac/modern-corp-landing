import React from 'react';

type Props = {
  number: string;
  title: string;
  isExtraClass?: boolean;
  aosDelay?: number;
}

const WorkProcessCard = ({ number, title, isExtraClass=false, aosDelay = 0  }: Props) => {
  return (
<div className={`flex items-start gap-3 sm:items-center ${isExtraClass ? 'lg:border-r-2 lg:border-gray-300 lg:pr-6' : ''}`} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className='mr-3 text-[34px] font-bold leading-none text-amber-600 sm:mr-5 sm:text-[46px] lg:text-[66px]' data-aos="zoom-in" data-aos-delay={aosDelay + 60}>{number}</div>
      <div className='text-lg font-semibold text-[#252525] sm:text-xl'>
        {title}
        <p className='mt-3 max-w-[34rem] text-sm font-medium leading-7 text-gray-700 sm:text-base sm:leading-8'>It is an established fact that ineffective design can distract readers from the content.
Research shows that distracting design elements reduce reader focus.</p>
      </div>
    </div>
  )
};
export default WorkProcessCard;