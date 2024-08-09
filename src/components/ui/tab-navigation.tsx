import Image from 'next/image';
import React, { useState } from 'react';

interface Tab {
  label: string;
  imageSrc: string;
}

interface TabNavigationProps {
  tabs: Tab[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="flex flex-wrap items-center justify-start py-4 space-x-2 md:space-x-8 border-b border-gray-200 gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`flex items-center space-x-1 md:space-x-2 text-sm font-medium ${
            activeTab === tab.label
              ? 'text-purple-600 border-b-2 border-purple-400'
              : 'text-gray-500'
          }`}
        >
          <Image
            src={tab.imageSrc}
            alt={tab.label}
            width={24}
            height={24}
            className={`transition-colors duration-200 ${
              activeTab === tab.label ? 'filter-purple' : 'filter-gray'
            }`}
          />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
