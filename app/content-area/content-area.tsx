



//import { AvatarFallback } from "@radix-ui/react-avatar";
import DashboardNavBar1 from "../components/dash-nav-bar";
import { ModeToggle } from "../dark-mode";
import { GoSidebarCollapse } from "react-icons/go";
import { MdAdd } from "react-icons/md";

import Dashboard from "./dashboard/dashboard";
import ProductsPage from "./products/products-page";
import OrdersPage from "./orders/orders-page";
//import CategoriesPage from "../content-area/categories/categories-page";
import { useSidebarStore } from "../hooks/useSideBarStore";
import { useSearchStore } from "../hooks/useSearchStore";
import { navItemsArray } from "../side-bar/side-bar";

export default function ContentArea() {
  const { open, setOpen, isMobile, setHidden, selectedNavItem, setSelectedNavItem } =
    useSidebarStore();
  const { setSearchProduct, searchProduct } = useSearchStore();

  function renderComponent() {
    switch (selectedNavItem) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <ProductsPage />;
       case "Orders":
         return <OrdersPage />;
      // case "Categories":
      //   return <CategoriesPage />;
      default:
        return <></>;
    }
  }

  const getIconSelectedNavItem = () => {
    const index = navItemsArray.findIndex((item) => item.name === selectedNavItem);
    return navItemsArray[index]?.icon;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim()) {
      setSelectedNavItem("Products");
      requestAnimationFrame(() => setSearchProduct(value));
    } else {
      setSearchProduct(value);
    }
  };

  return (
    <div className="w-full">
      <DashboardNavBar1
        className="h-[105px] border bg-inherit border-none px-8"
        searchProps={{
          placeholder: "Search a product",
          value: searchProduct,
          onChange: handleSearchChange,
        }}
        username="Admin"
       
        iconButtons={[
          <ModeToggle key={"modetoggle"} />,
          <span
            key={"isMobileButton"}
            onClick={() => {
              setOpen(!open);
              setHidden(false);
            }}
            className={`${!isMobile ? "visible" : "hidden"}`} 
          >
            <GoSidebarCollapse />
          </span>,
        ]}
        buttonData={{
          text: "New Product",
          icon: MdAdd,
          onClickedBtn: () => {},
        }}
        leftSection={
          <div className="flex items-center gap-2">
            <div className="text-2xl text-primary">{getIconSelectedNavItem()}</div>
            <span className="text-2xl font-bold max-md:hidden">{selectedNavItem}</span>
          </div>
        }
      />
      {renderComponent()} 
    </div>
  );
}

