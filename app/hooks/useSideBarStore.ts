// import { create } from "zustand";
// import type { NavItemNames } from "@/app/components/side-bar";

// import { navItemsArray  } from "@/app/side-bar/side-bar";

// type SidebarState ={
//     selectedNavItem: NavItemNames<typeof navItemsArray>;
//     setSelectedNavItem: (navItem: NavItemNames<typeof navItemsArray>) => void;
//     MOBILE_BREAKPOINT: number;
//     open: boolean;
//     hidden: boolean;
//     isMobile: boolean;
//     setOpen: (open: boolean) => void;
//     setHidden: (hidden: boolean) => void;
//     setIsMobile: (isMobile: boolean) => void;
// }

// export const useSidebarStore = create<SidebarState>((set)=>({
//     selectedNavItem: "Dashboard",
//     setSelectedNavItem: (item) => set({ selectedNavItem: item }),
//     MOBILE_BREAKPOINT: 1024,
//     open: false,
//     hidden: false,
//     isMobile: false,
//     setOpen: (open)=> set({open}),
//     setHidden: (hidden) => set({hidden}),
//     setIsMobile:(isMobile)=>set({isMobile}),
// }));





import { create } from "zustand";
import { navItemsArray } from "@/app/data/side-bar/side-bar";
import { NavItemNames } from "@/app/components/side-bar";

// ✅ derive nav item names directly
// export type NavItemNames<T extends readonly { name: string }[]> =
//   T[number]["name"];

type SidebarState = {
  selectedNavItem: NavItemNames<typeof navItemsArray>;
  setSelectedNavItem: (navItem: NavItemNames<typeof navItemsArray>) => void;
  MOBILE_BREAKPOINT: number;
  open: boolean;
  hidden: boolean;
  isMobile: boolean;
  setOpen: (open: boolean) => void;
  setHidden: (hidden: boolean) => void;
  setIsMobile: (isMobile: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  selectedNavItem: "Dashboard", // ✅ type-checked against navItemsArray
  setSelectedNavItem: (item) => set({ selectedNavItem: item }),
  MOBILE_BREAKPOINT: 1024,
  open: false,
  hidden: false,
  isMobile: false,
  setOpen: (open) => set({ open }),
  setHidden: (hidden) => set({ hidden }),
  setIsMobile: (isMobile) => set({ isMobile }),
}));
