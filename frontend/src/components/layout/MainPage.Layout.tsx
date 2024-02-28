
import React from "react";
import { Sidebar } from "../widgets/sidebar";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export function MainPageLayout({ header, children }: Props) {
  return (
    <main className="flex h-screen overflow-hidden">
      <nav className="w-1/12 fixed">
        <Sidebar />
      </nav>
      <div className="h-screen w-11/12 ml-auto overflow-x-hidden bg-accent  ">
        {header}
        {children}
      </div>
    </main>
  );
}
