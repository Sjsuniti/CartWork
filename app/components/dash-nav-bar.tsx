
import React, { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LucideIcon, SearchIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { IoAdd, IoNotifications } from "react-icons/io5";

interface NavbarProps {
  username?: string;
  leftSection?: ReactNode;
  avatarUrl?: string;
  avatarFallback?: string;
  className?: string;
  showAvatar?: boolean;
  buttonData?: {
    text: string;
    icon: LucideIcon | IconType;
    onClickedBtn?: () => void;
  };
  searchProps?: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  };
  showSearchBar?: boolean;
  iconButtons?: Array<ReactNode>;
  rightSection?: Array<ReactNode>;
}

export default function DashboardNavBar1({
  username = "Alex",
  avatarUrl = "",
  avatarFallback = "Ax",
  className = "",
  searchProps = {
    value: "",
    placeholder: "Search Anything",
    onChange: () => {},
  },
  showAvatar = true,
  buttonData = { text: "Add New", icon: IoAdd, onClickedBtn: () => {} },
  leftSection,
  showSearchBar = true,
  rightSection,
  iconButtons = [
    <div key={"notifIcon"}>
      <IoNotifications />
    </div>,
  ],
}: NavbarProps) {
  return (
    <Card
      className={`w-full rounded-none shadow-none   px-4 py-5 flex items-center justify-between ${className}`}
    >
      {/* Left side - Welcome message */}
      {!leftSection ? (
        <div className="flex items-center text-xl max-md:hidden">
          <h2 className="font-bold">Dashboard</h2>
          
        </div>
      ) : (
        <>{leftSection}</>
      )}

      {/* Middle - Search bar */}

      {/* Right side - Icons and profile */}
      <div className="flex items-center space-x-4 ">
        {showSearchBar && (
          <div className="  items-center mx-4 relative w-full flex-1">
            <div className="absolute left-3 top-3 text-gray-400">
              <SearchIcon size={16} />
            </div>
            <Input
              className="pl-9  h-10 border  "
              placeholder={searchProps.placeholder}
              onChange={searchProps.onChange}
              value={searchProps.value}
            />
          </div>
        )}

        <div className="flex justify-center items-center gap-4">
          {rightSection?.map((node, index) => (
            <div className="opacity-55 px-0" key={index}>
              {node}
            </div>
          ))}
        </div>

        <Button
          onClick={buttonData.onClickedBtn && buttonData.onClickedBtn}
          className="h-10 shadow-none"
        >
          <buttonData.icon />
          <span className="max-sm:hidden">{buttonData.text}</span>
        </Button>
        <Separator className="h-6 w-[2px]" orientation="horizontal" />

        <div className="flex justify-center items-center gap-4">
          {iconButtons.map((icon, index) => (
            <div className="opacity-55 px-0" key={index}>
              {icon}
            </div>
          ))}
        </div>
        {showAvatar && (
          <Button variant={"ghost"} className="flex items-center py-6">
            <Avatar className="h-9 w-9 border border-gray-200">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback className="bg-gray-100 text-gray-800 text-sm">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <MdOutlineKeyboardArrowDown />
          </Button>
        )}
      </div>
    </Card>
  );
}


