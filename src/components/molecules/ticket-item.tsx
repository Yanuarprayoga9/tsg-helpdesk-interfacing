import Image from 'next/image';
import React from 'react';

interface TicketItemProps {
  ticketNumber: string;
  title: string;
  description: string;
  author: string;
  priority?: string;
  date: string;
  image: string;
}

const TicketItem: React.FC<TicketItemProps> = ({
  ticketNumber,
  title,
  description,
  author,
  priority = 'Low',
  date,
  image,
}) => {
  const priorityStyles: {
    [key: string]: { textColor: string; bgColor: string; dotColor: string };
  } = {
    High: {
      textColor: 'text-red-600',
      bgColor: 'bg-red-100',
      dotColor: 'bg-red-500',
    },
    Medium: {
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      dotColor: 'bg-yellow-500',
    },
    Low: {
      textColor: 'text-green-600',
      bgColor: 'bg-green-100',
      dotColor: 'bg-green-500',
    },
    Done: {
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      dotColor: 'bg-blue-500',
    },
  };

  const currentPriorityStyle =
    priorityStyles[priority] || priorityStyles['Low'];

  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full ${currentPriorityStyle.dotColor} mr-4`}
          />
          <h3 className="text-lg font-bold text-gray-800">{ticketNumber}</h3>
          {priority && (
            <span
              className={`ml-2 px-2 py-1 text-xs font-semibold rounded ${currentPriorityStyle.textColor} ${currentPriorityStyle.bgColor}`}
            >
              {priority}
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h4 className="mt-2 text-md font-semibold text-gray-700">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Image
            src={image}
            alt="Avatar"
            className="mr-2 rounded-full"
            width={32}
            height={32}
          />
          <span className="text-sm text-gray-600">{author}</span>
        </div>
        <a
          href="detail-ticket"
          className="text-sm text-purple-600 hover:underline"
        >
          Open Ticket
        </a>
      </div>
    </div>
  );
};

export default TicketItem;
