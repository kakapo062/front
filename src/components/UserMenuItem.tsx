import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import classNames from "classnames";

interface UserMenuItemProps {
  src: string;
  title: string;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ src, title }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={src}>
          <span
            className={classNames(
              "block px-4 py-2 text-sm cursor-pointer",
              {
                "bg-gray-100 text-gray-900": active,
                "text-gray-700": !active,
              }
            )}
          >
            {title}
          </span>
        </Link>
      )}
    </Menu.Item>
  );
};

export default UserMenuItem;
