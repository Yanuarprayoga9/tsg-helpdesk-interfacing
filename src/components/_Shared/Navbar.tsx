import { useSidebar } from '@/context/sidebar.context';
import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const { setIsOpen, isOpen } = useSidebar();
  console.log(isOpen);
  return (
    <div className="w-full h-16 flex items-center  z-20">
      <div className="flex ml-4 gap-x-2 items-center">
        <Menu className="my-2 w-8 h-8 " onClick={() => setIsOpen(!isOpen)} />
        <h1 className="text-base text-center">Welcome , Yanuar Prayoga</h1>
      </div>
    </div>
  );
};
