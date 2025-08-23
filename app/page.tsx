"use client";
import ContentArea from "./content-area/content-area"
import Sidebar1 from "./side-bar/side-bar"; // adjust path as needed
 
export default function Home() {
  return (
    <div className="flex bg-slate-100 dark:bg-neutral-900">
      <Sidebar1/>
      <ContentArea />
    </div>
  );
}




