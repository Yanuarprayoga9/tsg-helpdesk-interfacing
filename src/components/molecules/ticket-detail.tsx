import React from 'react';

interface TicketDetailsProps {
  ticketNumber: string;
  title: string;
  description: string;
  postedAt: string;
}

const TicketDetails: React.FC<TicketDetailsProps> = ({
  ticketNumber,
  title,
  description,
  postedAt,
}) => {
  return (
    <div className="p-4 mb-">
      <div className="flex items-center mb-2">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <h3 className="text-lg font-bold text-gray-800">{ticketNumber}</h3>
          </div>
          <div>
            <span className="block mt-4 text-sm text-gray-500">
              Posted at {postedAt}
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-md font-semibold text-gray-700">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TicketDetails;
