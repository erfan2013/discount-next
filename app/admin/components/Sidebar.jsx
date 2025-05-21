"use client";

import { Cat, ChartColumnStacked, CircleUserRound, Folders, LayoutDashboard, ShoppingCart, StarHalf, SwatchBook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const menulist = [
    {
      name: "Dashboard",
      link: "/admin",
      icon : <LayoutDashboard />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon : <ShoppingCart />
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon : <ChartColumnStacked />
    },
    {
      name: "Barands",
      link: "/admin/brands",
      icon : <Cat />
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon : <Folders />
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon : <CircleUserRound />
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon : <StarHalf />
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon : <SwatchBook />
    },
  ];
  return (
    <section className="bg-white border-r px-5 py-3 h-screen overflow-hidden flex flex-col gap-10 md:w-[260px]">
      <div className="flex justify-center">
        <img className="h-20" src="/logo.png" alt="logo" />
      </div>

      <ul className="flex-1 flex flex-col gap-4">
        {menulist?.map((item, index) => {
          return <Tab item={item} key={index} />
        })}
      </ul>
    </section>
  );
}


function Tab({item}) {
    const pathname = usePathname()
    const IsSelected = pathname === item?.link

    return (
        <Link href={item?.link}>
           
                <li className={`flex items-center gap-3 px-4 py-2 rounded-xl font-semibold
                    ${IsSelected ? "bg-[#879fff] text-white" : "bg-white text-black"} 
                    
                    `}>{item?.icon}{item?.name}</li>
          
          
        </Link>
    )
}
