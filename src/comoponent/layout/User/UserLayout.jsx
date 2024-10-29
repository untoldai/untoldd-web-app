import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";

import Sidebar from '../Sidebar';
import { SidebarToggleProvider } from '../../../context/SidebarContext';
import {  usernavItems } from '../../../constants/navItems';
import UserHeader from './UserHeader';
const UserLayout = () => {

  return (
    <div className='w-full h-full relative '>
      <SidebarToggleProvider>
        <UserHeader />
        <Sidebar navItems={usernavItems} />
        <main className='w-full -z-50'>
          <Outlet />
        </main>
      </SidebarToggleProvider>
    </div>
  )
}

export default  UserLayout ;
