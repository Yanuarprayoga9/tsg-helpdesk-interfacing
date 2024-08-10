import { ProfileBanner } from '@/components/@pagecomponents/leader-dash/profile-banner';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import profileBanner from '../../../assets/bannerprofile.svg';
import avatar from '../../../assets/leaddash-profile.svg';
import TicketCard from '@/components/molecules/ticket-card';
import allticketicon from '../../../assets/all-tickets-dashboard-icon.svg';
import newticketicon from '../../../assets/new-ticket-dashboard-icon.svg';
import onprogressicon from '../../../assets/on-progress-dashboard-icon.svg';
import cancelledicon from '../../../assets/cancelled-dashboard-icon.svg';
import doneicon from '../../../assets/done-dashboard-icon.svg';
import closedicon from '../../../assets/closed-dashboard-icon.svg';
import messagesicon from '../../../assets/messages-dashboard-icon.svg';
import reporticon from '../../../assets/report-dashboard-icon.svg';
import { Separator } from '@/components/ui/separator';

const index = () => {
  return (
    <>
      <DashboardLayout title="Leader Dashboard">
        <ProfileBanner
          banner={profileBanner}
          id="1"
          avatar={avatar}
          position="Senior Project Manager"
          username="Trias Bratakusuma"
        />
        <Separator className="w-full my-2" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4">
          <TicketCard icon={allticketicon} title="All Tickets" count="230" />
          <TicketCard icon={newticketicon} title="New Tickets" count="12" />
          <TicketCard icon={onprogressicon} title="On Progress" count="35" />
          <TicketCard icon={cancelledicon} title="Cancelled" count="4" />
          <TicketCard icon={doneicon} title="Done" count="27" />
          <TicketCard icon={closedicon} title="Closed" count="153" />
          <TicketCard icon={messagesicon} title="Messages" count="74" />
          <TicketCard icon={reporticon} title="Report" count="38" />
        </div>
      </DashboardLayout>
    </>
  );
};

export default index;
