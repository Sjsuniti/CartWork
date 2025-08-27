"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ContentArea from "./content-area/content-area"
import Sidebar1 from "./side-bar/side-bar";
import Loading from "./components/loading";
 
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/signin");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex bg-slate-100 dark:bg-neutral-900">
      <Sidebar1/>
      <ContentArea />
    </div>
  );
}




