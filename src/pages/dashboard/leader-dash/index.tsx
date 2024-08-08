import { ProfileBanner } from '@/components/@pagecomponents/leader-dash/profile-banner';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import profileBanner from '../../../assets/bannerprofile.svg';
import avatar from '../../../assets/leaddash-profile.svg';
const index = () => {
  return (
    <DashboardLayout title="Leader Dashboard">
      <ProfileBanner banner={profileBanner} id="1" avatar={avatar} position="Fullstack Developer" username="Yanuar Prayoga" />
    </DashboardLayout>
  );
};

export default index;
