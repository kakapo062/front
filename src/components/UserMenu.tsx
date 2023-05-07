import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import UserMenuItem from "./UserMenuItem";

interface UserProps {
  user: UserProfile;
}

const UserMenu: React.FC<UserProps> = ({ user }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        {user.picture ? (
          <Image
            src={user.picture}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : null}
        <Menu.Button className="ml-2 text-sm font-semibold text-gray-800">
          {user.name || user.email}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <UserMenuItem src="/settings" title="設定" />
            <UserMenuItem src="/api/auth/logout" title="ログアウト" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
