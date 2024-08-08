import { ProfileBanner } from '@/components/@pagecomponents/leader-dash/profile-banner';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import profileBanner from '../../../assets/bannerprofile.svg';
import avatar from '../../../assets/leaddash-profile.svg';
import TicketCard from '@/components/ui/ticket-card';
import newticketicon from '../../../assets/new-ticket.svg';

const index = () => {
  return (
    <>
      <DashboardLayout title="Leader Dashboard">
        <ProfileBanner
          banner={profileBanner}
          id="1"
          avatar={avatar}
          position="Fullstack Developer"
          username="Yanuar Prayoga"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 mx-4">
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
          <TicketCard icon={newticketicon} title="All Tickets" count="20" />
        </div>
      </DashboardLayout>
    </>
  );
};

export default index;
