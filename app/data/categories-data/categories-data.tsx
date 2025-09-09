import {
  MdLaptop,
  MdPhone,
  MdHeadphones,
  MdKitchen,
  MdSportsBaseball,
  MdToys,
  MdLocalGroceryStore,
} from "react-icons/md";
import { IoLogoDropbox } from "react-icons/io";
import { ContentCardProps } from "@/app/components/content-cards";

export const allCategoriesCards: ContentCardProps[] = [
  {
    id: crypto.randomUUID(),
    icon: IoLogoDropbox,
    subTitle: "0 Products",
    title: "No Categories",
    date: new Date(),
    hideDropDownButton: true,
  },
  {
    id: crypto.randomUUID(),
    icon: MdLaptop,
    subTitle: "0 Products",
    title: "Electronics",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdToys,
    subTitle: "0 Products",
    title: "Toys and Games",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdKitchen,
    subTitle: "0 Products",
    title: "Kitchen",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdPhone,
    subTitle: "0 Products",
    title: "Home Appliance",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdHeadphones,
    subTitle: "0 Products",
    title: "Headphones",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdSportsBaseball,
    subTitle: "0 Products",
    title: "Sports and Outdoor",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    icon: MdLocalGroceryStore,
    subTitle: "0 Products",
    title: "Grocery",
    date: new Date(),
  },
];