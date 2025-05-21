"use client";

import Sidebar from "./components/Sidebar";

export default function Layout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flexx-1">{children}</section>
    </main>
  );
}
