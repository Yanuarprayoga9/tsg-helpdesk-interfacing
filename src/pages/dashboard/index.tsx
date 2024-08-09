import { DashboardLayout } from '@/components/layout/dashboard-layout';
import React from 'react';
import SearchBar from '@/components/ui/search-bar';

const index = () => {
  return (
    <DashboardLayout title="Dashboard">
      <SearchBar />
    </DashboardLayout>
  );
};

export default index;
