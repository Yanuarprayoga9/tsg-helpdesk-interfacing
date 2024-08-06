import React, { useState, useEffect } from 'react';
import { Navbar } from '../_Shared/navbar';
import { useSidebar } from '@/context/sidebar.context';
import Sidebar from '../_Shared/sidebar';
import { useWindowWidth } from '@react-hook/window-size';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const DashboardLayout: React.FC<Props> = ({ children,title }) => {
  const [isClient, setIsClient] = useState(false);
  const windowWidth = useWindowWidth();
  const { isOpen } = useSidebar();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mobile = isClient && windowWidth < 768;

  return (
    <div className="w-full h-screen relative">
      {/* {mobile && isOpen && (
        <div className="fixed inset-0 bg-black shadow-sm bg-opacity-50 z-10"></div>
      )} */}
      <div className="grid grid-cols-12 h-screen">
        {/* Sidebar */}
        {(!mobile || isOpen) && (
          <div
            className={` ${ 
              mobile
                ? 'fixed  top-0 left-0 w-full h-full  z-50 overflow-y-auto'
                : 'col-span-8 border-r-2 sm:col-span-3 2xl:col-span-2 '
            }`}
          >
            <Sidebar />
          </div>
        )}
        {/* Content area */}
        <div
          className={`${
            mobile
              ? 'col-span-12 '
              : ' col-span-4 sm:col-span-9 2xl:col-span-10'
          } ${mobile && isOpen ? 'filter bg-customPurple blur-sm z-0' : ''}`}
        >
          <div className="sticky top-0 shadow-md z-10 bg-white">
            <Navbar />
          </div>
          <div className="flex flex-col h-full bg-slate-50 ">
            <div className="w-full h-full p-4 ">
              <h1 className='text-xl font-semibold py-4'>{title}</h1>
              <div className="bg-white rounded-md shadow-md pb-16">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
