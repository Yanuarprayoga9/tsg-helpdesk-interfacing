import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import { useSidebar } from '@/context/sidebar.context';
import { useWindowWidth } from '@react-hook/window-size';
import Image from 'next/image';

import dashboardicon from '../../assets/dashboard.svg';
import myticketicon from '../../assets/myticket.svg';
import newticketicon from '../../assets/new-ticket.svg';
import messagesicon from '../../assets/messages.svg';
import leadericon from '../../assets/leader.svg';
import engineericon from '../../assets/myticket.svg';

interface MenuItem {
  name: string;
  route: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', route: '/dashboard', icon: dashboardicon },
  { name: 'My Ticket', route: '/dashboard/my-ticket', icon: myticketicon },
  { name: 'New Ticket', route: '/dashboard/new-ticket', icon: newticketicon },
  { name: 'Message', route: '/dashboard/message', icon: messagesicon },
  { name: 'Leader Dash', route: '/dashboard/leader-dash', icon: leadericon },
  {
    name: 'Engineer Dash',
    route: '/dashboard/engineer-dash',
    icon: engineericon,
  },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const isActiveRoute = (route: string) => currentRoute === route;

  const [isClient, setIsClient] = useState(false);
  const windowWidth = useWindowWidth();
  const { isOpen, setIsOpen } = useSidebar();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mobile = isClient && windowWidth < 768;

  return (
    <div className="w-full   h-screen ">
      <h1  className="text-black  text-center text-xl font-bold md:text-xl  pt-2 m-2">
        TSG HELPDESK
        <span className="block"> SYSTEM</span>
      </h1>
      {mobile && isOpen && (
        <X
          className="absolute w-8 h-12 right-4 top-2"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div className="flex flex-col py-4 ">
        {menuItems.map((item) => (
          <Link key={item.route} href={item.route} passHref>
            <div
              className={`flex  py-2 my-2 md:px-6 px-4 cursor-pointer ${
                isActiveRoute(item.route)
                  ? 'bg-lowoppurple'
                  : 'hover:bg-purple-200'
              }`}
            >
              <Image src={item.icon} alt={item.name} width={24} height={24} />
              <span
                className={`ml-2 ${
                  isActiveRoute(item.route) ? 'text-customPurple' : ''
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
