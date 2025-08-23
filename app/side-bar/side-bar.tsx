// import { MdCategory } from "react-icons/md";
// import Sidebar1 from "../components/side-bar";
// import { HomeIcon } from "lucide-react";
// import { FaShoppingBasket } from "react-icons/fa";
// import { GrMoney } from "react-icons/gr";
// import { FiPackage } from "react-icons/fi";
// import { useClickOutside } from "../data/hooks/useClickOutside";
// import { useSearchStore } from "../data/hooks/useSearchStore"; // ✅ fixed import
// import { useWindowSize } from "../data/hooks/useWindowSize";
// import { useSidebarStore } from "../data/hooks/useSlideBarStore";
// import { useEffect, useState, useRef } from "react"; // ✅ added missing imports

// export const navItemsArray = [
//   {
//     icon: <HomeIcon />,
//     name: "Dashboard",
//   },
//   {
//     icon: <FiPackage />,
//     name: "Products",
//   },
//   {
//     icon: <FaShoppingBasket />,
//     name: "Orders",
//   },
//   {
//     icon: <MdCategory />,
//     name: "Categories",
//   },
// ] as const;

// export default function SideBar() {
//   const {
//     open,
//     setOpen,
//     hidden,
//     setHidden,
//     MOBILE_BREAKPOINT,
//     selectedNavItem,
//     setSelectedNavItem,
//   } = useSidebarStore();

//   const { clearSearch } = useSearchStore();
//   const { width } = useWindowSize();
//   const [isClient, setIsClient] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//     // ✅ Hook to close sidebar when clicked outside
//   useClickOutside(sidebarRef, () => {
//     if (width <= MOBILE_BREAKPOINT && open) {
//       setOpen(false);
//     }
//   }, open);


//   // Calculate openedWidth on client side
//   const openedWidth = isClient
//     ? width <= MOBILE_BREAKPOINT
//       ? 340
//       : 250
//     : 250;

// //const { width } = useWindowSize();
//   const {  setIsMobile } = useSidebarStore();

//   useEffect(() => {
//     setIsMobile(width < 1024); // mobile breakpoint
//     if (width >= 1024) {
//       setOpen(true); // always open on desktop
//     } else {
//       setOpen(false); // closed by default on mobile
//     }
//   }, [width, setIsMobile, setOpen]);

//   return (
//     <div className="h-full sticky top-0 z-50">
//       <Sidebar1
//         ref={sidebarRef}
//         selectedNavItem={selectedNavItem}
//         setSelectedNavItem={setSelectedNavItem}
//         openedWidth={openedWidth}
//         showOverlay={isClient && width <= MOBILE_BREAKPOINT && open}
//         onOverlayClick={() => setOpen(false)} // ✅ fixed syntax
//         overlayClassName="bg-black/50 backdrop-blur-sm"
//         hideSideBar={hidden}
//         setHideSideBar={setHidden}
//         navItemsProp={navItemsArray}
//         className={`border-none ${
//           isClient && width <= MOBILE_BREAKPOINT
//             ? open
//               ? "fixed left-0 top-0 h-full z-50"
//               : hidden
//             : ""
//         }`}
//         domainName="CartWorks"
//         showcallToAction={false}
//         showTopSeperator={false}
//         domainObject={{
//           name: "Cartworks",
//           icon: <GrMoney size={18} className="text-sm text-white" />,
//         }}
//         userProfile={{
//           name: "Admin",
//           email: "admin@gmail.com", // ✅ fixed typo
//         }}
//       />
//     </div>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { MdCategory } from "react-icons/md";
import { HomeIcon } from "lucide-react";
import { FaShoppingBasket } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { FiPackage } from "react-icons/fi";

import Sidebar1 from "./../components/side-bar";
import { useClickOutside } from "./../hooks/useClickOutside";
import { useSearchStore } from "./../hooks/useSearchStore";
import { useWindowSize } from "./../hooks/useWindowSize";
import { useSidebarStore } from "./../hooks/useSideBarStore";

// ✅ Sidebar navigation items
export const navItemsArray = [
  { icon: <HomeIcon />, name: "Dashboard" },
  { icon: <FiPackage />, name: "Products" },
  { icon: <FaShoppingBasket />, name: "Orders" },
  { icon: <MdCategory />, name: "Categories" },
] as const;

export default function SideBar() {
  const {
    open,
    setOpen,
    hidden,
    setHidden,
    MOBILE_BREAKPOINT,
    selectedNavItem,
    setSelectedNavItem,
    setIsMobile,
  } = useSidebarStore();

  const { clearSearch } = useSearchStore();
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // ✅ Mark client-side render (to avoid hydration mismatch)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Close sidebar when clicking outside (mobile only)
  useClickOutside(
    sidebarRef,
    () => {
      if (width <= MOBILE_BREAKPOINT && open) {
        setOpen(false);
        clearSearch(); // also clear search when sidebar closes
      }
    },
    open
  );

  // ✅ Sync sidebar state with screen width
  useEffect(() => {
    setIsMobile(width < MOBILE_BREAKPOINT);
    if (width >= MOBILE_BREAKPOINT) {
      setOpen(true); // always open on desktop
    } else {
      setOpen(false); // closed by default on mobile
    }
  }, [width, MOBILE_BREAKPOINT, setIsMobile, setOpen]);

  // ✅ Sidebar width depending on screen size
  const openedWidth = isClient ? (width <= MOBILE_BREAKPOINT ? 340 : 250) : 250;

  return (
    <div className="h-full sticky top-0 z-50">
      {isClient && width <= MOBILE_BREAKPOINT && open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
          
        />
      )}

      {/* Sidebar Component */}
      <Sidebar1
        ref={sidebarRef}
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
        openedWidth={openedWidth}
        showOverlay={isClient && width <= MOBILE_BREAKPOINT && open}
        onOverlayClick={() => setOpen(false)}
        overlayClassName="bg-black/50 backdrop-blur-sm"
        hideSideBar={hidden}
        setHideSideBar={setHidden}
        navItemsProp={navItemsArray}
        className={`border-none transition-all duration-300 ${
          isClient && width <= MOBILE_BREAKPOINT
            ? open
              ? "fixed left-0 top-0 h-full z-50"
              : "hidden"
            : "relative"
        }`}
        domainName="CartWorks"
        showcallToAction={false}
        showTopSeperator={false}
        domainObject={{
          name: "Cartworks",
          icon: <GrMoney size={18} className="text-sm text-white" />,
        }}
        userProfile={{
          name: "Admin",
          email: "admin@gmail.com",
        }}
      />
    </div>
  );
}
