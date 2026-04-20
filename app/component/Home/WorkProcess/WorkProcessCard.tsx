import React from 'react';

type Props = {
  number: string;
  title: string;
  isExtraClass?: boolean;
}

const WorkProcessCard = ({ number, title, isExtraClass = false }: Props) => {
  return (
  <div className={`flex items-center gap-3 ${isExtraClass ? 'lg-border-r2 lg-border-gray-300' : ''}`}>
    <div className='text-[40px] md:Text-[60px] lg:Text-[80px] font-bold mr-5 leading-none text-amber-600'>{number}</div>
    <div>
        <
    </div>
    </div>
  )
}

export default WorkProcessCard;