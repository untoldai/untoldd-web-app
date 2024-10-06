import React, { useEffect, useState } from 'react'
import KidswareHeader from '../Base/KidswareHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../Base/Footer'
import { kidsWearNavItems } from '../../../constants/navItems';
import BaseHeader from '../Base/BaseHeader';

const KidsWearLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='w-full overflow-hidden'>
      <BaseHeader isScrolled={isScrolled}  navItems={kidsWearNavItems} />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default KidsWearLayout