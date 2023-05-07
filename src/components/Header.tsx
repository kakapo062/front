import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiBookPile } from "react-icons/Gi";
import { useUser } from "@auth0/nextjs-auth0/client";
import UserMenu from "./UserMenu";

const Header = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className="bg-white fixed w-full top-0 z-100 p-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer flex items-center space-x-2">
              <GiBookPile className="text-3xl text-gray-800" />
            </span>
          </Link>
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link href="/api/auth/login">
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
