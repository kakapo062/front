import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiBookPile } from "react-icons/Gi";
import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="bg-white fixed w-full top-0 z-100 p-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer flex items-center space-x-2">
              <GiBookPile className="text-3xl text-gray-800" />
            </span>
          </Link>
          {session && session.user ? (
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <Menu.Button className="ml-2 text-sm font-semibold text-gray-800">
                  {session.user.name || session.user.email}
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
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm cursor-pointer`}
                        >
                          設定
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          onClick={handleSignOut}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm cursor-pointer`}
                        >
                          ログアウト
                        </span>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link href="/login">
              <span className="text-sm font-semibold p-2 rounded-md text-gray-800 cursor-pointer">
                ログイン
              </span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
