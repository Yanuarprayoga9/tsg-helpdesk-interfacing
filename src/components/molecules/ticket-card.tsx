import React from 'react';
import Image from 'next/image';

interface TicketCardProps {
  icon: any;
  title: string;
  count: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ icon, title, count }) => {
  return (
    <div className="flex cursor-pointer shadow-md items-center h-[6rem] justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg">
      <div className="flex items-center">
        <Image src={icon} alt="Icon" className="mr-4" width={32} height={32} />
        <div className="">
          <h4 className="text-lg sm:text-base md:text-lg font-semibold ">{title}</h4>
          <p className="text-sm text-gray-500">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
