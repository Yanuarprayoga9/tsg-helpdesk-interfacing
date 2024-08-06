import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItem {
  name: string;
  route: string;
  icon: React.JSX.Element;
  query?: { [key: string]: string };
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', route: '/dashboard', icon: <span>📊</span> },
  { name: 'My Ticket', route: '/dashboard/my-ticket', icon: <span>🎫</span> },
  { name: 'New Ticket', route: '/dashboard/new-ticket', icon: <span>🆕</span> },
  //   { name: 'On Progress', route: '/dashboard/my-ticket', icon: <span>🔄</span>, query: { status: 'on-progress' } },
  //   { name: 'Cancelled', route: '/dashboard/my-ticket', icon: <span>❌</span>, query: { status: 'cancelled' } },
  //   { name: 'Done', route: '/dashboard/my-ticket', icon: <span>✅</span>, query: { status: 'done' } },
  //   { name: 'Closed', route: '/dashboard/my-ticket', icon: <span>📅</span>, query: { status: 'closed' } },
  { name: 'Message', route: '/dashboard/message', icon: <span>💬</span> },
  {
    name: 'Leader Dash',
    route: '/dashboard/leader-dash',
    icon: <span>👨‍💼</span>,
  },
  {
    name: 'Engineer Dash',
    route: '/dashboard/engineer-dash',
    icon: <span>👩‍💻</span>,
  },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const currentQuery = router.query;

  const isActiveRoute = (route: string, query?: { [key: string]: string }) => {
    if (currentRoute !== route) {
      return false;
    }
    if (!query) {
      return true;
    }
    return Object.keys(query).every((key) => currentQuery[key] === query[key]);
  };

  return (
    <div className="w-full h-screen ">
      <h1 className="text-xl font-bold  md:text-xl sm:font-medium text-center pt-2  m-2">
        TSG HELPDESK
        <span className="block"> SYSTEM</span>
      </h1>
      <div className="flex flex-col py-4">
        {menuItems.map((item) => (
          <Link
            key={item.route + JSON.stringify(item.query)}
            href={{ pathname: item.route, query: item.query }}
            passHref
          >
            <div
              className={`flex   py-2 my-2 md:px-6 px-4 cursor-pointer ${
                isActiveRoute(item.route, item.query)
                  ? 'bg-purple-100'
                  : 'hover:bg-purple-200'
              }`}
            >
              {item.icon}
              <span
                className={`ml-2  ${
                  isActiveRoute(item.route, item.query)
                    ? 'text-customPurple'
                    : 'hover:bg-gray-200'
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
