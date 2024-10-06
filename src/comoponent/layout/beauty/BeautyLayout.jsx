import React, { useEffect, useState } from 'react';

import Footer from '../Base/Footer';
import { Outlet } from 'react-router-dom';
import BaseHeader from '../Base/BaseHeader';
import { beautyNavItems } from '../../../constants/navItems';

const BeautyLayout = () => {
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
        <div>
            <BaseHeader isScrolled={isScrolled} navItems={beautyNavItems} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default BeautyLayout