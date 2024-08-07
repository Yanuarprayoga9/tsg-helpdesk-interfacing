import { useSidebar } from '@/context/sidebar.context';
import React from 'react';
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';
import { NavbarProfileMenu } from './navbar-profile-menus';
import Link from 'next/link';

export const Navbar = () => {
  const { setIsOpen, isOpen } = useSidebar();
  console.log(isOpen);
  return (
    <div className="w-full h-16 flex items-center justify-between  z-20">
      <div className="flex ml-4 gap-x-2 items-center">
        <Menu className="my-2 w-8 h-8 " onClick={() => setIsOpen(!isOpen)} />
        <h1 className="text-base text-center">Welcome , Yanuar Prayoga</h1>
      </div>
      <div className="flex ml-4 gap-x-2 px-4 md:px-8 items-center justify-evenly">
        <div className="relative p-2 border rounded-full">
          <div className="bg-red-500 w-2 h-2 absolute right-3 rounded-full" />
          <Link href="/dashboard/notifications">
            <Bell className="w-6 h-6" />
          </Link>
        </div>
        <NavbarProfileMenu />
      </div>
    </div>
  );
};
