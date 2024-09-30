// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { AlarmClock, HandHelping, List, CircleUserRound } from "lucide-react";

const navbarList = [
  {
    id: 1,
    title: "Prayer Schedule",
    icon: AlarmClock,
    href: "/prayer-schedule"
  },
  {
    id: 2,
    title: "Asma'ul Husna",
    icon: List,
    href: "/asmaul-husna"
  },
  {
    id: 3,
    title: "Daily Prayers",
    icon: HandHelping,
    href: "/daily-prayers"
  },
  {
    id: 4,
    title: "Account",
    icon: CircleUserRound,
    href: "/signin"
  }
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 bg-white h-screen md:border-r md:border-r-gray-300">
      <div
        className="
          h-full w-full flex justify-between px-4 py-2.5 items-center
          border-t border-t-gray-300 bg-white
          dark:border-t-[1px] dark:border-t-gray-800 md:justify-center dark:bg-gray-950
          md:max-w-[80px] md:flex-col md:gap-10
        "
      >
        {navbarList.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.id} className="mb-2">
              <Icon size={24} className="text-gray-800 dark:text-white hover:text-gray-500" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
