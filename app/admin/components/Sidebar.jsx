"use client";

import {
  Cat,
  ChartColumnStacked,
  CircleUserRound,
  Folders,
  LayoutDashboard,
  ShieldCheck,
  ShoppingCart,
  StarHalf,
  SwatchBook,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firestore/firebase";

export default function Sidebar() {
  const menulist = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <ShoppingCart />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <ChartColumnStacked />,
    },
    {
      name: "Barands",
      link: "/admin/brands",
      icon: <Cat />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <Folders />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <CircleUserRound />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <StarHalf />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <SwatchBook />,
    },
    //  {
    //   name: "َAdmins",
    //   link: "/admin/َadmins",
    //   icon: <ShieldCheck />,
    // },
  ];
  return (
    <section className="bg-white border-r px-5 py-3 h-screen overflow-hidden flex flex-col gap-10 w-[260px]">
      <div className="flex justify-center">
        <img className="h-20" src="/logo.png" alt="logo" />
      </div>

      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menulist?.map((item, index) => {
          return <Tab item={item} key={index} />;
        })}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={async () => {
            try {
              await toast.promise(signOut(auth), {
                error: (e) => e?.message,
                loading: "Logging out...",
                success: "Logged out successfully",
              });
            } catch (error) {
              toast.error(error.message);
            }
          }}
          className="flex items-center gap-2 hover:bg-indigo-100 transition-all duration-500 px-3 py-2 rounded-full w-full justify-center ease-soft-spring"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </section>
  );
}

function Tab({ item }) {
  const pathname = usePathname();
  const IsSelected = pathname === item?.link;

  return (
    <Link href={item?.link}>
      <li
        className={`flex items-center gap-3 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300
                    ${
                      IsSelected
                        ? "bg-[#879fff] text-white"
                        : "bg-white text-black"
                    } 
                    
                    `}
      >
        {item?.icon}
        {item?.name}
      </li>
    </Link>
  );
}
