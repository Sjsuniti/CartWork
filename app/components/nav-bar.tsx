


// "use client";
// import { memo, useCallback } from "react";
// import Link from "next/link";
// import { ModeToggle } from "@/app/dark-mode";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart, LogOut } from "lucide-react";
// import { useSession, signOut } from "next-auth/react";

// // ✅ Memoized AuthButton with displayName
// const AuthButton = memo(() => {
//   const { data: session, status } = useSession();

//   const handleSignOut = useCallback(() => {
//     signOut({ callbackUrl: "/auth/signin" });
//   }, []);

//   if (status === "loading") {
//     return (
//       <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
//     );
//   }

//   if (session) {
//     return (
//       <div className="flex items-center gap-2">
//         <span className="text-sm hidden sm:inline">Hi, {session.user?.name}</span>
//         <Button
//           onClick={handleSignOut}
//           variant="outline"
//           size="sm"
//           className="flex items-center gap-1"
//         >
//           <LogOut className="w-4 h-4" />
//           <span className="hidden sm:inline">Sign Out</span>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <Button asChild className="whitespace-nowrap h-11 px-3">
//       <Link href="/auth/signup">Get Started</Link>
//     </Button>
//   );
// });

// AuthButton.displayName = "AuthButton"; // ✅ fixes memo displayName warning

// export default function Navbar() {
//   // ✅ App Logo as a separate function
//   function AppLogo() {
//     return (
//       <div className="flex items-center justify-between space-x-2 mt-1">
//         <div className="flex gap-2 items-center">
//           <div className="w-11 h-11 bg-primary rounded-md flex items-center justify-center">
//             <ShoppingCart className="text-primary-foreground" />
//           </div>
//           <h1 className="text-[20px] flex gap-1 max-md:hidden">
//             <span className="font-bold">EcommDash </span>
//           </h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-3 flex m-5 mx-8 items-center justify-between flex-wrap">
//       <AppLogo />
//       <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
//         <Link href="/" className="hover:underline">
//           Home
//         </Link>
//         <Link href="/auth/signin" className="hover:underline">
//           Sign In
//         </Link>
//         <Link href="/auth/signup" className="hover:underline">
//           Sign Up
//         </Link>
//       </div>
//       <div className="flex gap-4 items-center flex-wrap justify-end">
//         <ModeToggle />
//         <AuthButton />
//       </div>
//     </div>
//   );
// }



"use client";
import { memo, useCallback } from "react";
import Link from "next/link";
import { ModeToggle } from "@/app/dark-mode";
import { Button } from "@/components/ui/button";
import { ShoppingCart, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

// 🔹 AppLogo component with proper display name
const AppLogo = memo(() => {
  return (
    <div className="flex items-center justify-between space-x-2 mt-1">
      <div className="flex gap-2 items-center">
        <div className="w-11 h-11 bg-primary rounded-md flex items-center justify-center">
          <ShoppingCart className="text-primary-foreground" />
        </div>
        <h1 className="text-[20px] flex gap-1 max-md:hidden">
          <span className="font-bold">EcommDash</span>
        </h1>
      </div>
    </div>
  );
});
AppLogo.displayName = "AppLogo";

// 🔹 Memoized AuthButton
const AuthButton = memo(() => {
  const { data: session, status } = useSession();

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: "/auth/signin" });
  }, []);

  if (status === "loading") {
    return (
      <div className="w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm hidden sm:inline">Hi, {session.user?.name}</span>
        <Button
          onClick={handleSignOut}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </Button>
      </div>
    );
  }

  return (
    <Button asChild className="whitespace-nowrap h-11 px-3">
      <Link href="/auth/signup">Get Started</Link>
    </Button>
  );
});
AuthButton.displayName = "AuthButton";

// 🔹 Main Navbar component with proper display name
const Navbar = memo(() => {
  return (
    <div className="p-3 flex m-5 mx-8 items-center justify-between flex-wrap">
      <AppLogo />
      <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/auth/signin" className="hover:underline">
          Sign In
        </Link>
        <Link href="/auth/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>
      <div className="flex gap-4 items-center flex-wrap justify-end">
        <ModeToggle />
        <AuthButton />
      </div>
    </div>
  );
});
Navbar.displayName = "Navbar";

export default Navbar;