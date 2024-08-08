import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
  banner: string;
  username: string;
  position: string;
  avatar: string;
};

export const ProfileBanner: React.FC<Props> = ({
  id,
  username,
  position,
  banner,
  avatar,
}) => {
  return (
    <div className="w-full h-1/3">
      <div className="h-full w-full relative">
        <div className="h-[16rem] w-full bg-black opacity-40 absolute"></div>
        <Image
          src={banner}
          alt="banner"
          className="object-cover h-[16rem] rounded-md w-full"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="relative flex py-6">
            <Image
              src={avatar}
              alt="avatar"
              className="object-cover rounded-full h-[130px] bg-red-200 w-[130px] absolute left-4 -top-12"
            />
            <div className="ml-40">
              <p className="font-semibold">{username}</p>
              <p className="text-slate-300">{position}</p>
            </div>
          </div>
          <Button className="bg-customPurple" onClick={()=>console.log(id)}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};
