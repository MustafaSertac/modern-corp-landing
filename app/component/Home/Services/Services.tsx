import Image from 'next/image';
import ServicesCard from './ServicesCard';

const servicesData = [
  {
    image: '/images/s1.png',
    icon: '/images/sicon1.png',
    title: 'Digital Strategy',
    description: 'Market-focused roadmaps that align digital channels with long-term business growth.',
  },
  {
    image: '/images/s2.png',
    icon: '/images/sicon2.png',
    title: 'Web Development',
    description: 'High-performance web platforms designed for scale, security, and seamless user journeys.',
  },
  {
    image: '/images/s3.png',
    icon: '/images/sicon3.png',
    title: 'UI/UX Design',
    description: 'Elegant interfaces with clear hierarchy, crafted to reflect a premium brand experience.',
  },
  {
    image: '/images/s4.png',
    icon: '/images/sicon4.png',
    title: 'Cloud Solutions',
    description: 'Reliable cloud architecture and optimization services that support enterprise agility.',
  },
];

const Services = () => {
  return (
    <section id="services" className='relative scroll-mt-24 pb-16 pt-16 md:pb-20 md:pt-20' data-aos="fade-up">
      <div className='pointer-events-none absolute right-0 top-20 opacity-60' data-aos="fade-left" data-aos-delay="120">
        <Image
          src="/images/service_bg.png"
          alt="Services Image"
          width={300}
          height={300}
          style={{ height: 'auto' }}
        />
      </div>

      <div className='relative z-10 mx-auto w-[90%] sm:w-[86%] lg:w-[80%]'>
        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#b69974]'>WHAT WE OFFER</p>
        <h2 className='mt-4 text-3xl font-bold text-white md:text-5xl'>Premium Digital Services</h2>
        <div className='mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8'>
          {servicesData.map((service, index) => (
            <ServicesCard
              key={service.title}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
              aosDelay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;