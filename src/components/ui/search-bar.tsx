import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from './button';

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0">
      <Input className="w-full sm:w-1/5" placeholder="Search for Ticket" />
      <div className="flex w-full flex-col items-center space-y-4 sm:w-auto sm:flex-row sm:space-x-4 sm:space-y-0">
        <Select>
          <SelectTrigger className="w-full sm:w-[130px]">
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[120px]">
            <SelectValue placeholder="This Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full bg-customPurple sm:w-auto" type="submit">
          New Ticket
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
