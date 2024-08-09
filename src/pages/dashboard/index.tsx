import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import { useState } from 'react';
import SearchBar from '@/components/ui/search-bar';
import TabNavigation from '@/components/ui/tab-navigation';
import allticketsicon from '../../assets/all-tickets-dashboard-icon.svg';
import doneicon from '../../assets/done-dashboard-icon.svg';
import onprogressicon from '../../assets/on-progress-dashboard-icon.svg';
import closedicon from '../../assets/closed-dashboard-icon.svg';
import cancelledicon from '../../assets/cancelled-dashboard-icon.svg';
import leaderimage from '../../assets/leaddash-profile.svg';
import TicketItem from '@/components/molecules/ticket-item';
import Pagination from '@/components/molecules/pagination';

const index: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      <TicketItem
        ticketNumber="Ticket# 2023-CS123"
        title="How to deposit money to my portal?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="Adrian Ramadhan"
        priority="High"
        date="2 hours ago"
        image={leaderimage}
      />
      <TicketItem
        ticketNumber="Ticket# 2023-CS123"
        title="How to deposit money to my portal?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="Adrian Ramadhan"
        priority="Medium"
        date="2 hours ago"
        image={leaderimage}
      />
      <TicketItem
        ticketNumber="Ticket# 2023-CS123"
        title="How to deposit money to my portal?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        author="Adrian Ramadhan"
        priority="Low"
        date="2 hours ago"
        image={leaderimage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </DashboardLayout>
  );
};

export default index;
