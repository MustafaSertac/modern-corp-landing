import Image from 'next/image';

type Props = {
  image: string;
  icon: string;
  title: string;
  description: string;
  category?: string;
  aosDelay?: number;
};

const ServicesCard = ({ image, icon, title, description, category = 'OUR SERVICES', aosDelay = 0 }: Props) => {
  return (
    <div className='group overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-lg shadow-black/20' data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className='overflow-hidden'>
        <Image
          src={image}
          alt={title}
          width={300}
          height={179}
          className='h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-110'
          data-aos="zoom-in"
          data-aos-delay={aosDelay + 80}
        />
      </div>
      <div className='p-5'>
        <div className='relative z-10 ml-auto -mt-14 flex h-20 w-20 items-center justify-center rounded-lg bg-[#b69974] transition-all duration-300 group-hover:bg-black group-hover:shadow-[0_0_30px_rgba(182,153,116,0.45)]'>
          <Image src={icon} alt={`${title} icon`} width={52} height={52} />
        </div>
        <div className='mt-6 h-px w-16 bg-white/20'></div>
        <p className='mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>{category}</p>
        <h3 className='mt-2 text-xl font-semibold text-white'>{title}</h3>
        <p className='mb-2 mt-3 text-sm leading-7 text-slate-400'>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;