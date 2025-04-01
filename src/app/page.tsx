"use client";

import { DockDemo } from "@/components/sections/Navbar";
import { Home } from "@/components/sections/Home";
import { Test } from "@/components/sections/test";
import { Experience } from "@/components/sections/Experience";

export default function Page() {
  return (
    <main className="">
      <Home/>
      <DockDemo/>
      <Test/>
      <Experience/>
      {/* <TimelineSection/> */}
      
    </main>
  );
}
