import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import SearchBar from '@/components/ui/search-bar';
import TabNavigation from '@/components/ui/tab-navigation';
import allticketsicon from '../../assets/all-tickets-dashboard-icon.svg';
import doneicon from '../../assets/done-dashboard-icon.svg';
import onprogressicon from '../../assets/on-progress-dashboard-icon.svg';
import closedicon from '../../assets/closed-dashboard-icon.svg';
import cancelledicon from '../../assets/cancelled-dashboard-icon.svg';

const index = () => {
  const tabs = [
    {
      label: 'All Tickets',
      imageSrc: allticketsicon,
    },
    { label: 'Done', imageSrc: doneicon },
    { label: 'On Progress', imageSrc: onprogressicon },
    { label: 'Closed', imageSrc: closedicon },
    { label: 'Cancelled', imageSrc: cancelledicon },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <SearchBar />
      <TabNavigation tabs={tabs} />
    </DashboardLayout>
  );
};

export default index;
