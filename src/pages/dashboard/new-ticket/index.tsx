import { NewTicketForm } from '@/components/organisms/new-ticket/new-ticket-form';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const index = () => {
  return (
    <DashboardLayout title="New-Ticket">
      <div className="flex flex-col space-y-2">
        <h1 className="font-semibold text-lg">Create Quick Ticket</h1>
        <p className="text-slate-300">
          Write and address new queries and issues
        </p>
        <Separator className='w-full'/>
        <NewTicketForm />
      </div>
    </DashboardLayout>
  );
};

export default index;
