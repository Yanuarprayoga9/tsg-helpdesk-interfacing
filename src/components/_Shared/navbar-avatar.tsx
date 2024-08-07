import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import React from "react";
  
  type props = {
    avatar:string;
  }
  export const NavbarAvatar:React.FC<props> = ({avatar}) => {
    return (
      <Avatar >
        <AvatarImage   src={avatar} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  