"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const SidebarRef =  useRef(null);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    toggleSidebar()
  },[pathname])


  useEffect(() => {
    function handleClickOutsideEvent(event) {
      if (SidebarRef.current && !SidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideEvent);
    }
  },[])

  return (
    <main className="relative flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className={`fixed md:hidden ease-in-out transition-all duration-700
         ${isOpen ? "translate-x-0" : "-translate-x-[260px]"}`}>
        <Sidebar />
      </div>

      <section className="flex-1 flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <section className="flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}
