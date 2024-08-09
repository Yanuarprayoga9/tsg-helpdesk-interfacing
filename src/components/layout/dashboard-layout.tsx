import React, { useState, useEffect } from 'react';
import { Navbar } from '../_Shared/navbar';
import { useSidebar } from '@/context/sidebar.context';
import Sidebar from '../_Shared/sidebar';
import { useWindowWidth } from '@react-hook/window-size';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const DashboardLayout: React.FC<Props> = ({ children, title }) => {
  const [isClient, setIsClient] = useState(false);
  const windowWidth = useWindowWidth();
  const { isOpen } = useSidebar();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const isMobile = isClient && windowWidth < 768;
  
  const sidebarClasses = isMobile
    ? 'fixed bg-white top-0 left-0 w-full h-full z-50 overflow-y-auto'
    : 'col-span-8 border-r-2 sm:col-span-3 2xl:col-span-2';
    
  const mainContentClasses = isMobile
    ? `col-span-12 ${isOpen ? 'filter bg-customPurple blur-sm z-0' : ''}`
    : 'col-span-4 sm:col-span-9 2xl:col-span-10';
  
  return (
    <div className="w-full h-screen relative">
      <div className="grid grid-cols-12 h-screen">
        {/* Sidebar */}
        {(!isMobile || isOpen) && (
          <div className={sidebarClasses}>
            <Sidebar />
          </div>
        )}
        {/* Main Content */}
        <div className={mainContentClasses}>
          <div className="sticky top-0 shadow-md z-10 bg-white">
            <Navbar />
          </div>
          <div className="flex flex-col h-full bg-whitesmoke1">
            <div className="w-full h-full p-1 sm:p-4">
              <h1 className="text-xl ml-2 sm:ml-0 font-semibold py-4">{title}</h1>
              <div className="bg-whitecustom p-1 sm:p-4 rounded-md shadow-md pb-16">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
