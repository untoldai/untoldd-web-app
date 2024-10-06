import React from 'react'
import { Outlet } from "react-router-dom";
import AdminHeader from './AdminHeader';
import Sidebar from '../Sidebar';
import { SidebarToggleProvider } from '../../../context/SidebarContext';
import { navItems } from '../../../constants/navItems';
const AdminLayout = () => {
 
  return (
    <div className='w-full h-full relative '>
      <SidebarToggleProvider>
        <AdminHeader />
        <Sidebar navItems={navItems} />
        <main className='w-full -z-50'>
          <Outlet />
        </main>
      </SidebarToggleProvider>
    </div>
  )
}

export default AdminLayout