'use client';

import { useEffect, useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      aria-label='Scroll to top'
      onClick={handleScrollTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#b69974]/60 bg-[#111a2d] text-[#d8be97] shadow-[0_10px_30px_rgba(6,10,20,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16213a] hover:shadow-[0_0_24px_rgba(182,153,116,0.55)] ${
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <FaArrowUpLong />
    </button>
  );
};

export default ScrollToTop;
