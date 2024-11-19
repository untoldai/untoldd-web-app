import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Base/Footer'

import InfluncerBaseHeader from './Base/InfluncerBaseHeader';
import { InfluncerNavItems } from '../../constants/navItems';

const InfluncerLayout = () => {
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
      <InfluncerBaseHeader isScrolled={isScrolled}  navItems={InfluncerNavItems} />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default InfluncerLayout