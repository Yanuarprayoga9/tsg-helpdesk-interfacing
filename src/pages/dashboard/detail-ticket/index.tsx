import { DashboardLayout } from '@/components/layout/dashboard-layout';
import ReplyForm from '@/components/molecules/reply-form';
import TicketDetails from '@/components/molecules/ticket-detail';
import React from 'react';

const index = () => {
  return (
    <DashboardLayout title="Detail Ticket">
      <TicketDetails
        ticketNumber="Ticket# 2023-CS123"
        title="How to deposit money to my portal?"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        postedAt="12:45 AM"
      />
      <ReplyForm />
    </DashboardLayout>
  );
};

export default index;
